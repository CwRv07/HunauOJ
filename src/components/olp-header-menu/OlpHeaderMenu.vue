<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:36:59
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-01 19:43:14
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-menu :default-active="activeIndex2" class="el-menu-header" mode="horizontal" text-color="black" @select="handleSelect" active-text-color="#47b686">
    <!-- 递归动态菜单 -->
    <olp-menu-item :item-arr="itemArr" />
    <el-button-group class="ml-4 header-button">
      <el-button type="primary">登录</el-button>
      <el-button type="primary">注册</el-button>
    </el-button-group>
  </el-menu>
</template>

<script lang="ts" setup>
import OlpMenuItem from './olp-menu-item/OlpMenuItem.vue';
const itemArr = reactive([
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；没children的，即children的length等于0的，才会使用path属性做路由跳转
    name: '首页',
    path: 1,
    icon: 'house',
    children: [],
  },
  {
    name: '题目',
    path: 2,
    icon: 'hot-water',
    children: [],
  },
  {
    name: '训练',
    path: 3,
    icon: 'tickets',
    children: [],
  },
  {
    name: '比赛',
    path: 4,
    icon: 'trophy',
    children: [],
  },
  {
    name: '测评',
    path: 5,
    icon: 'odometer',
    children: [],
  },
  {
    name: '排名',
    path: 6,
    icon: 'histogram',
    children: [
      {
        name: 'ACM排名',
        path: '6-1',
        icon: '',
        children: [],
      },
      {
        name: 'OI排名',
        path: '6-2',
        icon: '',
        children: [],
      },
    ],
  },
  {
    name: '讨论',
    path: 7,
    icon: 'chat-dot-square',
    children: [],
  },
  {
    name: '团队',
    path: 8,
    icon: 'user',
    children: [],
  },
  {
    name: '关于',
    path: 9,
    icon: 'warning',
    children: [
      {
        name: '简介',
        path: '9-1',
        icon: '',
        children: [],
      },
      {
        name: '开发者',
        path: '9-2',
        icon: '',
        children: [],
      },
    ],
  },
]);

const activeIndex2 = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-menu-header {
  justify-content: flex-end;
}
.header-button {
  display: flex;
  align-items: center;
}
</style>
