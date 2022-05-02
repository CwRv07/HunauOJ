<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 21:48:44
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <olp-header-menu />
    <h1>index</h1>
    <div>
      <router-link :to="{ name: 'notFound', params: { cause: 404 } }"> 404 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 403 } }"> 403 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 500 } }"> 500 </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
