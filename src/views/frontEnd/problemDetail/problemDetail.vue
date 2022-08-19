<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-01 10:00:15
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-19 11:09:10
 * @Description: 题目详情页
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemDetail">
    <el-row>
      <el-col :span="12"><olp-exercises-info /></el-col>
      <el-col :span="12"><code-mirror @submit="submitProblem" /></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="problemDetail">
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import ProblemAPI from '@/network/problem';

const router = useRoute();

/* 初始化题目详情-start */
const problemId = Number(router.params.id);
/* 初始化题目详情-end */

/* 提交题目-start */
const submitProblem = (mode: string, code: string) => {
  ProblemAPI.submitProblem({
    problemId: problemId,
    language: mode,
    contestId: 0,
    code: code,
  })
    .then(data => {
      console.log(data);
      ElMessage({
        type: 'success',
        message: '题目提交成功',
        showClose: true,
      });
    })
    .catch(err => {
      console.log(err);
      ElMessage({
        type: 'error',
        message: '题目提交失败',
        showClose: true,
      });
    });
};
/* 提交题目-end */
</script>

<style lang="scss" scoped></style>
