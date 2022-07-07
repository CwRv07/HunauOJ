<template>
  <div class="olp-table-group">
    <el-table :data="data" stripe fit>
      <el-table-column
        v-for="item in props"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width"
        :align="item.align || 'left'"
        :fixed="item.fixed || false"
        :show-overflow-tooltip="item.overflow || false"
        :formatter="item.formatter"
      >
        <template #default="{ row }">
          <slot :name="item.prop" :value="row[item.prop]">{{
            row[item.prop]
          }}</slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts" name="olpTableGroup">
import type { tableDataType, tablePropsType, tablePropsItemType } from './type';
/* 表格参数 */
defineProps<{
  data: tableDataType;
  props: tablePropsType;
}>();
</script>

<style lang="scss" scoped>
.olp-table-group {
}
</style>
