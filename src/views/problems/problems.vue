<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-03 08:11:33
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-01 10:19:11
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problems">
    <el-row>
      <el-col class="problem-table-box" :sm="16">
        <el-card>
          <problem-table />
        </el-card>
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
#problems {
  @include body-padding($body-padding-list);
  margin-top: 30px;
  .problem-table-box {
  }
}
</style>
