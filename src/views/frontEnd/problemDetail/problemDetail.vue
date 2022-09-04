<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-01 10:00:15
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-09-04 14:48:48
 * @Description: 题目详情页
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemDetail">
    <el-row>
      <el-col :span="12" :xs="24">
        <olp-exercises-info :problem-data="problemData" />
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
import { ProblemData, ProblemLanguageData } from '@/utils/type/data';

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
const problemData = ref<ProblemData | Record<string, never>>({});

const language = reactive<string[]>([]);
/* 题目数据-end */

/* 提交题目-start */
const submitProblem = (mode: string, code: string) => {
  return;
};
/* 提交题目-end */
</script>

<style lang="scss" scoped></style>
