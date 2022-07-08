<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-08 19:26:36
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-08 19:55:52
 * @Description: 子路由题目表单封装
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <olp-table-group :props="problemProps" :data="data" :row-click="rowClick" />
</template>

<script setup lang="ts" name="olpProblemTable">
import { useRouter } from 'vue-router';
const router = useRouter();

/* 参数 */
const props = defineProps<{
  mode: 'competition' | 'practice';
  data: { [key: string]: any }[];
}>();

/* 初始化字段 */
const problemProps = (() => {
  if (props.mode === 'practice') {
    // 练习模式
    return reactive([
      { prop: 'id', label: '题目ID', width: 80, align: 'center' as const, overflow: true },
      { prop: 'title', label: '题目', width: 200 },
      { prop: 'diffculty', label: '难度', width: 80, align: 'center' as const },
      { prop: 'total', label: '总数', width: 80, align: 'center' as const },
      {
        prop: 'passingRate',
        label: 'AC通过率',
        width: 100,
        align: 'center' as const,
        overflow: true,
      },
    ]);
  } else {
    // 比赛模式
    return reactive([
      { prop: 'id', label: 'ID', width: 80, align: 'center' as const, overflow: true },
      { prop: 'title', label: '题目', width: 200 },
      { prop: 'acNumber', label: 'AC数', width: 80, align: 'center' as const },
      { prop: 'total', label: '总数', width: 80, align: 'center' as const },
      {
        prop: 'passingRate',
        label: 'AC通过率',
        width: 100,
        align: 'center' as const,
        overflow: true,
      },
    ]);
  }
})();

/* 处理问题详情页跳转 */
const rowClick = (row: any) => {
  return;
};
</script>

<style lang="scss" scoped></style>
