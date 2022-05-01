<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 17:52:49
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export
import {} from 'vue';

/* Rv_Jiang测试代码-start */
import { useStore } from 'vuex';
import storage from './utils/storage';

const store = useStore();
console.log(store.getters);

storage.set('name', '卷心菜汪');
console.log(storage.get('name'));
storage.remove('name');

/* Rv_Jiang测试代码-end */
</script>

<template>
  <div>
    <!-- Rv_Jiang测试代码-start -->
    <!-- Rv_Jiang测试代码-end -->
  </div>
</template>

<style lang="scss"></style>
