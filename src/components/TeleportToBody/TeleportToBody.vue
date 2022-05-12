<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-12 10:03:45
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-12 10:11:21
 * @Description: 将插槽放置于body元素中，请尽量离文档流，控制视口布局
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="teleport-to-body">
    <teleport to="body">
      <slot></slot>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="teleport-to-body"></script>

<style lang="scss" scoped></style>
