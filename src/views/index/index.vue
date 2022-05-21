<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-21 23:15:46
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <!-- <h1 v-loading.fullscreen.lock="true" :element-loading-spinner="svg" element-loading-svg-view-box="0, 0, 1024, 1024" element-loading-background="rgba(122, 122, 122, 0.8)">index</h1> -->
    <div>
      <router-link :to="{ name: 'notFound', params: { cause: 404 } }"> 404 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 403 } }"> 403 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 500 } }"> 500 </router-link>
      <router-link to="/markdownTest">markdownTest</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
const svg = `
<path d="M1016.057791 124.92321l-22.64677 221.938351a28.081995 28.081995 0 0 1-30.799608 25.364383l-221.938351-22.646771a28.081995 28.081995 0 0 1-14.946869-49.822895l76.546085-62.505086a394.053807 394.053807 0 1 0-45.293541 588.816034 58.881603 58.881603 0 1 1 70.657924 94.210565 511.817014 511.817014 0 1 1 65.675634-757.760942l76.99902-62.505087a28.081995 28.081995 0 0 1 45.746476 24.911448z" fill="#41b882" p-id="3274"></path>`;
</script>

<style scoped></style>
