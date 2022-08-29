<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-19 09:33:22
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-29 22:22:14
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <div class="modal" v-show="modelVisible">
      <!-- 旋转体-start -->
      <div class="turn-body">
        <!-- 注册-start -->
        <div class="modal-content register">
          <div class="form-content">
            <div class="turn-off" @click="onCancel">
              <el-icon><Close /></el-icon>
            </div>
            <div class="logo-img">
              <img src="../../../assets/logo.png" />
            </div>
            <div class="header-title">
              <span><h2>注册</h2></span>
            </div>
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
              size="large"
            >
              <el-form-item prop="re_account" label-width="0">
                <el-input
                  v-model="ruleForm.re_account"
                  type="text"
                  autocomplete="off"
                  style="height: 38px"
                  placeholder="登录用账号"
                />
              </el-form-item>
              <el-form-item prop="re_email" label-width="0">
                <el-input
                  v-model="ruleForm.re_email"
                  type="email"
                  autocomplete="off"
                  style="height: 38px"
                  placeholder="用户昵称"
                />
              </el-form-item>
              <el-form-item prop="re_pass" label-width="0">
                <el-input
                  v-model="ruleForm.re_pass"
                  type="password"
                  autocomplete="off"
                  show-password
                  style="height: 38px"
                  placeholder="密码"
                />
              </el-form-item>
              <el-form-item prop="checkPass" label-width="0">
                <el-input
                  v-model="ruleForm.checkPass"
                  type="password"
                  autocomplete="off"
                  show-password
                  style="height: 38px"
                  placeholder="确认您的密码"
                />
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="userRegister">注册</el-button>
            <div class="other-operating">
              <div class="loginBtn">登录</div>
              <div>联系管理员</div>
            </div>
          </div>
        </div>
        <!-- 注册-end -->

        <!-- 登录-start -->
        <div class="modal-content login">
          <div class="form-content">
            <div class="turn-off" @click="onCancel">
              <el-icon><Close /></el-icon>
            </div>
            <div class="logo-img">
              <img src="../../../assets/logo.png" style="" />
            </div>
            <div class="header-title">
              <span><h2>登录</h2> </span>
            </div>
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              status-icon
              :rules="rules"
              label-width="120px"
              class="demo-ruleForm"
            >
              <el-form-item prop="account" label-width="0">
                <el-input
                  v-model="ruleForm.account"
                  type="text"
                  autocomplete="off"
                  style="height: 38px"
                  placeholder="用户名"
                />
              </el-form-item>
              <el-form-item prop="pass" label-width="0">
                <el-input
                  v-model="ruleForm.pass"
                  type="password"
                  autocomplete="off"
                  show-password
                  style="height: 38px"
                  placeholder="密码"
                />
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="userLogin">登录</el-button>
            <!-- <el-button @click="elMessageTest">test</el-button> -->
            <div class="other-operating">
              <div class="registerBtn">注册</div>
              <div>找回密码</div>
            </div>
          </div>
        </div>
        <!-- 登录-end -->
      </div>
      <!-- 旋转体-end -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus';
import { BuildPropType } from 'element-plus/es/utils';
import { ElMessage } from 'element-plus';
// import addUser from '@/network/security/user/insertUserInfo';
import { SecurityAPI } from '@/network/index';
const userLoginInfo = reactive({
  username: '',
  password: '',
});

const userRregisterInfo = reactive({
  password: '',
  nickname: '',
  username: '',
});

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  account: '',
  email: '',
  re_account: '',
  re_pass: '',
  re_email: '',
});

onMounted(() => {
  // console.log('Modal正在挂载.....');
  let login = <HTMLElement>document.querySelector('.login');
  let register = <HTMLElement>document.querySelector('.register');
  let loginBtn = <HTMLElement>document.querySelector('.loginBtn');
  let registerBtn = <HTMLElement>document.querySelector('.registerBtn');

  // console.log(loginBtn);
  // console.log(registerBtn);
  // console.log(modelVisible);

  loginBtn?.addEventListener('click', () => {
    // console.log('我被点击了!');
    if (register != null) {
      register.style.transform = 'rotateY(180deg)';
      login.style.transform = 'rotateY(0)';
    }
  });
  registerBtn?.addEventListener('click', () => {
    // console.log('我被点击了!');
    if (login != null) {
      login.style.transform = 'rotateY(-180deg)';
      register.style.transform = 'rotateY(0)';
    }
  });
});

//
// 声明接收的属性名和type
const props = defineProps({
  modelValue: {
    type: Boolean,
    modelType: String,
    default: false,
  },
});

const emit = defineEmits(['handleCheck']);
const modelVisible = ref(props.modelValue);

const onCancel = () => {
  // console.log('我被点击了!');
  modelVisible.value = false;
  emit('handleCheck', false);
};

//监听单个对象
watch(
  () => props.modelValue,
  (newVal: any, oldVal: any) => {
    if (newVal && newVal !== oldVal) {
      modelVisible.value = newVal;
    }
  },
  { immediate: false, deep: true }
);
// From表单校验
const ruleFormRef = ref<FormInstance>();

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'));
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'));
      } else {
        callback();
      }
    }
  }, 1000);
};

const openElmessage = (info: string, mType: any) => {
  console.log(info, mType);
  ElMessage({
    showClose: true,
    message: info,
    type: mType,
    // grouping: true,
    // duration: 0,
  });
};

// 正则表达式
//手机号或者座机号
const reg_tel_phone = /(^((\+86)|(86))?(1[3-9])\d{9}$)|(^(0\d{2,3})-?(\d{7,8})$)/;

const reg_account_pass = ref(true);
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    // console.log('已进入');
    reg_account_pass.value = false;
    callback(new Error('请输入账号'));
  }
};

const reg_password_pass = ref(true);
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    reg_password_pass.value = false;
    callback(new Error('请输入密码'));
  } else {
    const pass = /^(?=.*[a-zA-Z])(?=.*\d).{1,15}$/.test(value);
    if (!pass) {
      reg_password_pass.value = false;
      callback(new Error('密码至少包含字母、数字，1-15位'));
    }
    callback();
  }
};

const reg_checkPassword_pass = ref(true);
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入您的密码'));
    reg_checkPassword_pass.value = false;
  } else if (value !== ruleForm.re_pass) {
    reg_checkPassword_pass.value = false;
    callback(new Error('两次输入的密码不一致!'));
  } else {
    callback();
  }
};

const reg_email_pass = ref(true);
const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    // console.log('已进入');
    reg_email_pass.value = false;
    callback(new Error('请输入用户昵称'));
  }
  //  else {
  //   const pass = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/.test(value);
  //   if (!pass) {
  //     callback(new Error('邮箱格式不正确!'));
  //   }
  //   callback();
  // }
};

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  account: [{ validator: validateAccount, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  re_account: [{ validator: validateAccount, trigger: 'blur' }],
  re_pass: [{ validator: validatePass, trigger: 'blur' }],
  re_email: [{ validator: validateEmail, trigger: 'blur' }],
});

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
// const submitForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;
//   formEl.validate(valid => {
//     if (valid) {
//       console.log('submit!');
//     } else {
//       console.log('error submit!');

//       return false;
//     }
//   });
// };
//  /From表单校验

// 用户登录逻辑
const userLogin = () => {
  // console.log("已触发");
  if (ruleForm.account == '' || ruleForm.pass == '') {
    // console.log("已触发2");
    openElmessage('请输入完整!', 'error');
    return;
  } else if (reg_password_pass.value == true && reg_account_pass.value == true) {
    // console.log("已触发3");
    userLoginInfo.username = ruleForm.account;
    userLoginInfo.password = ruleForm.pass;
    // const jsonString = JSON.stringify(userLoginInfo);
    const result = SecurityAPI.Login.LoginAPI.userLogin(userLoginInfo).then(res => {
      console.log(res);
    });
    // console.log(jsonString);
    console.log(result);
  }
};

// 用户注册逻辑
const userRegister = () => {
  if (ruleForm.re_account == '' || ruleForm.re_email == '' || ruleForm.re_pass == '') {
    console.log('已进入1');
    openElmessage('请将信息输入完整!', 'error');
    return;
  } else if (
    reg_password_pass.value == true &&
    reg_account_pass.value == true &&
    reg_checkPassword_pass.value == true &&
    reg_email_pass.value == true
  ) {
    userRregisterInfo.username = ruleForm.re_account;
    userRregisterInfo.nickname = ruleForm.re_email;
    userRregisterInfo.password = ruleForm.re_pass;
    // const jsonString = JSON.stringify(userRregisterInfo);
    SecurityAPI.User.UserAPI.addUser(userRregisterInfo)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(jsonString);
    // const result = addUser(jsonString);
    // console.log(result);
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh);
  backdrop-filter: blur(3px);
  background-color: rgba(142, 142, 142, 0.2);
  perspective: 800px;
  z-index: 2000;
  > .turn-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 384px;
    height: 480px;
    transform-style: preserve-3d;
    transition: all 1.6s ease;
    animation-delay: 0.5s;
    animation: arise 0.9s;

    > .modal-content {
      position: absolute;
      width: 384px;
      // height: 480px;
      background-color: white;
      border-radius: 3%;
      // transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      /* opacity: 0; */

      > .form-content {
        position: relative;
        max-width: 384px;
        padding: 24px 32px 32px;

        .turn-off {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
          transform-origin: center center;
          transition: all 1s ease;
          &:hover {
            transform: rotate(360deg);
          }
        }
        > .header-title {
          text-align: center;
          margin-top: 32px;
          margin-bottom: 24px;
          font-weight: 500px;
          user-select: none;
        }

        > .logo-img {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-user-drag: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
          > img {
            vertical-align: middle;
            border-style: none;
            height: 60px;
            width: 60px;
          }
        }
        > .el-button {
          width: 100%;
          height: 38px;
          margin: 8px 0px 16px 0px;
        }

        > .other-operating {
          display: flex;
          margin: 16px 0px 16px 0px;
          > .registerBtn {
            margin-right: auto;
            cursor: pointer;
          }
          > .loginBtn {
            margin-right: auto;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.login {
  backface-visibility: hidden;
  > .el-form {
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
  }
  > .header-title {
    transform-style: preserve-3d;
    > span {
      > h2 {
        transform: translate3d(0, 0, 1px);
      }
    }
  }
  > .logo-img {
    transform-style: preserve-3d;
  }
}

.register {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  > .el-form {
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 1px);
  }
  > .header-title {
    transform-style: preserve-3d;
    > span {
      > h2 {
        transform: translate3d(0, 0, 1px);
      }
    }
  }
  > .logo-img {
    transform-style: preserve-3d;
  }
}

@keyframes arise {
  0% {
    top: -500%;
  }
  50% {
    top: 55%;
  }
  100% {
    top: 50%;
  }
}
</style>
