<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-01 10:00:15
<<<<<<< HEAD
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-12 23:23:00
=======
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-09-04 14:55:58
>>>>>>> 681bfeeac3f395a6baca630686e9f0ce5fc448d2
 * @Description: 题目详情页
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemDetail">
    <el-row>
      <el-col :span="12" :xs="24">
        <olp-exercises-info :problem-data="problemData" :problem-language="language" />
      </el-col>
      <el-col :span="12" :xs="24">
        <code-mirror style="margin-left: 5px" @submit="submitProblem" :language="language" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="problemDetail">
import { useRouter, useRoute } from 'vue-router';
import { ProblemAPI, ProblemLanguageAPI } from '@/network';
import { ElMessageBox, ElMessage } from 'element-plus';
<<<<<<< HEAD
import { ProblemData } from '@/utils/type/data';
const router = useRoute();
const store = useStore();
const userStore = useGetters('userStore', ['token', 'isAuthenticated']);
/* 初始化题目详情-start */
onMounted(() => {
  /* 测试代码 */
  store.commit('userStore/setUserInfo', {
    pid: '1002',
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhNWFhYWFiY2FjYTI0MGI5ODY1M2M5NzkxNTljNGRjZiIsInN1YiI6ImFkbWluIiwiaXNzIjoic2ciLCJpYXQiOjE2NjE3ODA1ODQsImV4cCI6MTY2MTc4NDE4NH0.2Y1IAcY0E9-wrX73yMIyb6wVwscojmYnjFcWkWyC8UU',
  });
  /* 测试代码 */
=======
import { ProblemData, ProblemLanguageData } from '@/utils/type/data';
>>>>>>> 681bfeeac3f395a6baca630686e9f0ce5fc448d2

const route = useRoute();
/* 初始化题目详情-start */
onMounted(async () => {
  // 题目Id
  const problemId = +route.params.id;
  // 题目数据
  const _problemData: ProblemData = await ProblemAPI.findById(problemId);
  problemData.value = _problemData;

  // 题目支持语言数据
  const _problemLanguageList: ProblemLanguageData[] = await ProblemLanguageAPI.findById(problemId);
  language.length = 0;
  _problemLanguageList.forEach(item => {
    language.push(item.name);
  });
});
/* 初始化题目详情-end */

/* 题目数据-start */
<<<<<<< HEAD
const problemData = ref<ProblemData>({});
=======
const problemData = ref<ProblemData | Record<string, never>>({});
>>>>>>> 681bfeeac3f395a6baca630686e9f0ce5fc448d2

const language = reactive<string[]>([]);
/* 题目数据-end */

/* 提交题目-start */
const submitProblem = (mode: string, code: string) => {
  return;
};
/* 提交题目-end */
</script>

<style lang="scss" scoped></style>
