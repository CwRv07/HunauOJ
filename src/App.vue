<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-17 14:15:47
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export
import {} from 'vue';

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
