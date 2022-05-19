<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-19 09:33:22
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-19 17:52:04
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <h1>登录注册</h1>
    <div class="modal" v-if="props.modelValue">
      <!-- 旋转体-start -->
      <div class="turn-body">
        <!-- 注册-start -->
        <div class="modal-content register">
          <div class="form-content">
            <div class="logo-img">
              <img src="../../../assets/logo.png" />
            </div>
            <div class="header-title">
              <span><h2>注册</h2></span>
            </div>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm" size="large">
              <el-form-item prop="account" label-width="0">
                <el-input v-model="ruleForm.account" type="text" autocomplete="off" style="height: 38px" placeholder="手机号/邮箱" />
              </el-form-item>
              <el-form-item prop="email" label-width="0">
                <el-input v-model="ruleForm.email" type="email" autocomplete="off" style="height: 38px" placeholder="手机号/邮箱" />
              </el-form-item>
              <el-form-item prop="pass" label-width="0">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" style="height: 38px" placeholder="密码" />
              </el-form-item>
              <el-form-item prop="checkPass" label-width="0">
                <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" style="height: 38px" placeholder="确认您的密码" />
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
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
            <div class="logo-img">
              <img src="../../../assets/logo.png" style="" />
            </div>
            <div class="header-title">
              <span><h2>登录</h2> </span>
            </div>
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
              <el-form-item prop="account" label-width="0">
                <el-input v-model="ruleForm.account" type="text" autocomplete="off" style="height: 38px" placeholder="手机号/邮箱" />
              </el-form-item>
              <el-form-item prop="pass" label-width="0">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" style="height: 38px" placeholder="密码" />
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
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
onMounted(() => {
  console.log('Modal正在挂载.....');
  let login = <HTMLElement>document.querySelector('.login');
  let register = <HTMLElement>document.querySelector('.register');
  let loginBtn = <HTMLElement>document.querySelector('.loginBtn');
  let registerBtn = <HTMLElement>document.querySelector('.registerBtn');
  console.log(login);
  console.log(register);
  loginBtn?.addEventListener('click', () => {
    console.log('我被点击了!');
    if (register != null) {
      register.style.transform = 'rotateY(180deg)';
      login.style.transform = 'rotateY(0)';
    }
  });
  registerBtn?.addEventListener('click', () => {
    console.log('我被点击了!');
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
    default: true,
  },
  title: String,
  content: String,
});

// 声明自定义事件
const emit = defineEmits(['update:modelValue', 'handleCheck', 'userInfoHandel']);

const onCancel = () => {
  emit('update:modelValue', false);
};

const userInfoHandel = (user: any) => {
  emit('userInfoHandel', user);
};

// From表单校验
const ruleFormRef = ref<FormInstance>();

// const checkAge = (rule: any, value: any, callback: any) => {
//   if (!value) {
//     return callback(new Error('Please input the age'));
//   }
//   setTimeout(() => {
//     if (!Number.isInteger(value)) {
//       callback(new Error('Please input digits'));
//     } else {
//       if (value < 18) {
//         callback(new Error('Age must be greater than 18'));
//       } else {
//         callback();
//       }
//     }
//   }, 1000);
// };
const validateAccount = (rule: any, value: any, callback: any) => {
  if (value === '') {
    console.log('已进入');
    callback(new Error('请输入账号'));
  }
};

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField('checkPass', () => null);
    }
    callback();
  }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入您的密码'));
  } else if (value !== ruleForm.pass) {
    callback(new Error('两次输入的密码不一致!'));
  } else {
    callback();
  }
};

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    console.log('已进入');
    callback(new Error('请输入邮箱'));
  }
};

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  account: '',
  email: '',
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  account: [{ validator: validateAccount, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
});

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');

      return false;
    }
  });
};
//  /From表单校验
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  background-color: rgba(142, 142, 142, 0.2);
  perspective: 800px;
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
      transition: all 0.6s ease;
      /* opacity: 0; */

      > .form-content {
        position: relative;
        max-width: 384px;
        padding: 24px 32px 32px;

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
          user-select: none;
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
