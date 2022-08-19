<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-01 10:00:15
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-19 10:33:19
 * @Description: 题目详情页
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemDetail">
    <el-row>
      <el-col :span="12" :xs="24" />
      <el-col :span="12" :xs="24"><code-mirror @submit="submitProblem" /></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="problemDetail">
import { useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import { ProblemAPI } from '@/network';

const router = useRoute();

/* 初始化题目详情-start */
const problemId = Number(router.params.id);
/* 初始化题目详情-end */

/* 提交题目-start */
const submitProblem = (mode: string, code: string) => {};
/* 提交题目-end */
</script>

<style lang="scss" scoped></style>
