<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
<<<<<<< HEAD
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-01 17:49:13
=======
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 17:52:49
>>>>>>> 46498019a687dd4bc9a89e1935e827e18ceb51b2
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export
import {} from 'vue';
<<<<<<< HEAD
=======

/* Rv_Jiang测试代码-start */
import { useStore } from 'vuex';
import storage from './utils/storage';

const store = useStore();
console.log(store.getters);

storage.set('name', '卷心菜汪');
console.log(storage.get('name'));
storage.remove('name');

/* Rv_Jiang测试代码-end */
>>>>>>> 46498019a687dd4bc9a89e1935e827e18ceb51b2
</script>

<template>
  <div>
<<<<<<< HEAD
    <router-view />
=======
    <!-- Rv_Jiang测试代码-start -->
    <!-- Rv_Jiang测试代码-end -->
>>>>>>> 46498019a687dd4bc9a89e1935e827e18ceb51b2
  </div>
</template>

<style lang="scss"></style>
