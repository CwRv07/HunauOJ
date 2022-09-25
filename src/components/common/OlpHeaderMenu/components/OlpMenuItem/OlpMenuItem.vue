<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:37:50
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 10:44:12
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <template v-for="(item, index) in props.itemArr">
    <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
           情况一：有子集的情况：                         -->
    <el-sub-menu :key="index" :index="String(item.sort)" v-if="item.children.length > 0">
      <template #title>
        <el-icon>
          <component :is="item.icon" v-if="item.icon" />
        </el-icon>
        <span> {{ item.name }}</span>
      </template>
      <olp-menu-item :item-arr="item.children" />
    </el-sub-menu>
    <!-- 情况二：没子集的情况 -->
    <el-menu-item v-else :key="index + 0" :index="String(item.path)">
      <el-icon>
        <component :is="item.icon" v-if="item.icon" />
      </el-icon>
      <span> {{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
const props = defineProps({
  itemArr: {
    type: Array as any,
    default: () => [{}],
  },
});
</script>

<style lang="scss" scoped></style>
