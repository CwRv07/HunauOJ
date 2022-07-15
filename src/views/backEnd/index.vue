<template>
  <div>
    <el-button type="primary">按钮</el-button>

    <router-view />
  </div>
</template>

<script setup lang="ts" name="backEndIndex"></script>

<style lang="scss" scoped>
/* 开发期间解决自定义主题被覆盖问题，此处重复引入 */
@use '@/assets/styles/element/index.scss';
</style>
