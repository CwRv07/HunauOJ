<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 14:22:22
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <!-- <olp-header-menu /> -->
    <h1>index</h1>
    <div>
      <el-menu />
      <router-link :to="{ name: 'notFound', params: { cause: 404 } }">404</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
