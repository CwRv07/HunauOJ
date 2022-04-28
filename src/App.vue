<!--
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 22:57:55
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts">
// 处理一个Vuter报错，需要首行import/export
import {} from 'vue';
const count = ref(0);
</script>

<template>
  <div>
    <el-page-header content="detail" />
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success">Danger</el-button>
    <el-button type="info">asd</el-button>
  </div>
</template>

<style lang="scss"></style>
