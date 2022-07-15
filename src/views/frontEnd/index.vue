<template>
  <div>
    <olp-header-menu />
    <router-view />
  </div>
</template>

<script setup lang="ts" name="frontEndIndex"></script>

<style lang="scss">
/* 开发期间解决自定义主题被覆盖问题，此处重复引入 */
@use '@/assets/styles/element/index.scss';
</style>
