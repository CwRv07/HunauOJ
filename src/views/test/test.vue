<!--
 * @Author: ND_LJQ
 * @Date: 2022-07-04 11:19:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-09 10:47:16
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <!-- Echarts测试板块 -->

    <!-- <div class="echarts-container">
      <olp-bar-chart />
    </div> -->

    <!-- /Echarts测试板块 -->

    <!-- TableGroup测试板块 -->

    <!-- <div class="table-group-container">
      <olp-table-group :props="tableProps" :data="tableData">
        <template #name="{ value }"> 名字+{{ value }} </template>
        <template #date="{ value }"> 生日+{{ value }} </template>
        <template #address="{ value }"> 地址+{{ value }} </template>
      </olp-table-group>
    </div> -->

    <!-- /TableGroup测试板块 -->

    <!-- markdown测试板块 -->
    <div>
      <olp-exercises-info />
    </div>
  </div>
  <!-- /markdown测试板块 -->
</template>

<script setup lang="ts" name="test">
import OlpTableGroup from '@/components/base/OlpTableGroup/OlpTableGroup.vue';
/* TableGroup测试板块 */
const tableProps = [
  { prop: 'name', label: '姓名', width: 100, align: 'center' as const },
  { prop: 'date', label: '生日', width: 200 },
  { prop: 'address', label: '地址', width: 300 },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom0',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
/* /TableGroup测试板块 */
</script>

<style lang="scss" scoped>
.echarts-container {
  width: 100%;
  height: 500px;
}
.table-group-container {
  width: 100%;
}
</style>
