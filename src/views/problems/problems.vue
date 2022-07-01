<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-03 08:11:33
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-30 16:00:55
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problems">
    <el-row>
      <el-col :sm="16">
        <problem-table />
      </el-col>

      <el-col :sm="8" class="hidden-xs-only">
        <aside class="problem-side"></aside>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="problems">
import ProblemTable from './components/ProblemTable/ProblemTable.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/styles/public.scss';

#problems {
  width: $global-width;
  margin: 0 auto;
}
</style>
