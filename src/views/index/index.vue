<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-28 09:09:19
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 23:16:32
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div>
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

<style lang="scss" scoped></style>
