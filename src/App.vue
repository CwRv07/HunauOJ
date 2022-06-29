<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-29 14:51:29
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export

import {} from 'vue';
import {} from '../node_modules/@element-plus/icons-vue';
/* Rv_Jiang测试代码-start */
// import { mapGetters, useStore } from 'vuex';
// import storage from './utils/storage';

/* Rv_Jiang测试代码-end */
</script>

<template>
  <!-- Rv_Jiang测试代码-start -->
  <olp-header-menu />
  <router-view />
  <!-- Rv_Jiang测试代码-end -->
</template>

<style lang="scss">
#app {
  color: var(--el-text-color-primary);
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
