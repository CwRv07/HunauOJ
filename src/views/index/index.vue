<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 11:23:05
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <olp-header-menu />
    <h1>index</h1>
    <div>
      <router-link to="/notFound">404</router-link>
    </div>
    <button @click="changeToken">修改token</button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore();
const changeToken = () => {
  store.dispatch('userStore/setToken', '123');

  // store.state['userStore/token'] = '123';
};
</script>

<style scoped></style>
