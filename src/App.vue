<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-29 22:06:54
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export
import {} from 'vue';
import {} from '@/network';
/* 测试代码 */
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  color: var(--el-text-color-primary);
  background-color: $bg-color;

  /* 全局修改el-card样式 */
  .el-card {
    box-shadow: $box-shadow-default;
  }

  // icon与文本对齐
  .el-tag {
    .el-tag__content {
      display: flex;
      align-items: center;
    }
  }

  .el-empty {
    --el-empty-fill-color-1: var(--el-color-primary-light-9);
    --el-empty-fill-color-2: var(--el-color-primary-light-9);
    --el-empty-fill-color-5: var(--el-color-primary-light-8);
    --el-empty-fill-color-7: var(--el-color-primary-light-7);
    --el-empty-fill-color-8: var(--el-color-primary-light-7);
    --el-empty-fill-color-9: var(--el-color-primary-light-5);
  }
}

body {
  overflow-x: hidden;
}

//修改滚动条样式
::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: none;
  background: rgb(217, 217, 217);
  -webkit-box-shadow: none;
  box-shadow: none;

  &:hover {
    background: rgb(168, 168, 168);
  }
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 10px;
  // background: #06b0b9;
  -webkit-box-shadow: none;
}
</style>
