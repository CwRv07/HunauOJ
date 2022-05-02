<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:36:59
<<<<<<< HEAD
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-02 22:12:45
=======
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 13:51:15
>>>>>>> 3118442584281ca86eadb764950cf02a24236516
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-menu :default-active="activeIndex2" class="el-menu-header" mode="horizontal" text-color="black" @select="handleSelect" active-text-color="#47b686">
    <!-- 递归动态菜单 -->
    <olp-menu-item :item-arr="itemArr" />
    <olp-menu-button />
  </el-menu>
</template>

<script lang="ts" setup>
import OlpMenuItem from './olp-menu-item/OlpMenuItem.vue';
const itemArr = reactive([
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；没children的，即children的length等于0的，才会使用path属性做路由跳转
    name: '首页',
    sort: 1,
    icon: 'house',
    children: [],
  },
  {
    name: '题目',
    sort: 2,
    icon: 'hot-water',
    children: [],
  },
  {
    name: '训练',
    sort: 3,
    icon: 'tickets',
    children: [],
  },
  {
    name: '比赛',
    sort: 4,
    icon: 'trophy',
    children: [],
  },
  {
    name: '测评',
    sort: 5,
    icon: 'odometer',
    children: [],
  },
  {
    name: '排名',
    sort: 6,
    icon: 'histogram',
    children: [
      {
        name: 'ACM排名',
        sort: '6-1',
        icon: '',
        children: [],
      },
      {
        name: 'OI排名',
        sort: '6-2',
        icon: '',
        children: [],
      },
    ],
  },
  {
    name: '讨论',
    sort: 7,
    icon: 'chat-dot-square',
    children: [],
  },
  {
    name: '团队',
    sort: 8,
    icon: 'user',
    children: [],
  },
  {
    name: '关于',
    sort: 9,
    icon: 'warning',
    children: [
      {
        name: '简介',
        sort: '9-1',
        icon: '',
        children: [],
      },
      {
        name: '开发者',
        sort: '9-2',
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
  //字体无法被简单的鼠标拖动复制
  user-select: none;
}
ul {
  border-bottom: 0;
}
</style>
