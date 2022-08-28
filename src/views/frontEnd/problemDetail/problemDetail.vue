<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-01 10:00:15
<<<<<<< HEAD
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-19 18:45:47
=======
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-19 10:33:19
>>>>>>> fcc5601aa8d9e3f318d78aee198b2d95afb9c789
 * @Description: 题目详情页
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemDetail">
    <el-row>
      <el-col :span="12" :xs="24">
        <!-- <olp-exercises-info :problem-data="problemData" /> -->
      </el-col>
      <el-col :span="12" :xs="24">
        <code-mirror style="margin-left: 5px" @submit="submitProblem" :language="language" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="problemDetail">
import { useRoute } from 'vue-router';
import { ProblemAPI, ProblemLanguageAPI } from '@/network';
import { useGetters } from '@/utils/useMapper';
import { useStore } from 'vuex';
import { ElMessageBox, ElMessage } from 'element-plus';
const router = useRoute();
const store = useStore();
const userStore = useGetters('userStore', ['token', 'isAuthenticated']);
/* 初始化题目详情-start */
onMounted(() => {
  /* 测试代码 */
  store.commit('userStore/setUserInfo', {
    pid: '1002',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0ODJmYjE0NTYzNmU0ZWE5ODRjNzE4NDY5NzljYmZhZSIsInN1YiI6ImFkbWluIiwiaXNzIjoic2ciLCJpYXQiOjE2NjA5MDE4NTQsImV4cCI6MTY2MDkwNTQ1NH0.dkiZ_f-btgmEkhcJ1U8SZa0_e6lGsCxUR4y9yr77rMA',
  });
  /* 测试代码 */

  const problemId = Number(router.params.id);
  // 题目数据
  ProblemAPI.findById(problemId)
    .then(res => {
      problemData.value = res.data;
    })
    .catch(err => {
      if (err.msg === '查询失败') {
        ElMessageBox.alert('当前题目不存在或已删除', '正在返回上一步操作', { type: 'error' }).then(
          history.back
        );
      } else ElMessage.error(err);
    });
  // 身份验证
  if (!userStore.token.value) {
    ElMessage.error('当前处于未登录状态，请先登录');
    return;
  }
  // 题目支持语言数据
  ProblemLanguageAPI.findById(problemId, userStore.token.value).then(res => {
    console.log('problemLanguage', res);
    language.value = res.data?.map(({ name }: any) => name) ?? [];
  });
});
/* 初始化题目详情-end */

/* 题目数据-start */
const problemData = ref({});
const language = ref([]);
/* 题目数据-end */

/* 提交题目-start */
const submitProblem = (mode: string, code: string) => {
  return;
};
/* 提交题目-end */
</script>

<style lang="scss" scoped></style>
