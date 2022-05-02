<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 22:30:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 14:20:55
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div>
    <!-- <olp-header-menu /> -->
    <el-empty>
      <h1>{{ Math.round(_statusDisplay) }}</h1>
    </el-empty>
  </div>
</template>

<script lang="ts" setup>
import { TransitionPresets, useTransition } from '@vueuse/core';
import { useRoute } from 'vue-router';
const route = useRoute();
const status = ref(100);
const _statusDisplay = useTransition(status, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
});
status.value = Number(route.params.cause || 404);
</script>

<style lang="scss" scoped></style>
