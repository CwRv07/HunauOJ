<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:36:59
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 21:56:17
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-row :gutter="10">
    <el-col :span="5">
      <div class="logo-box">
        <!-- 选择logo位置是左?中?右? -->
        <div class="content-left">
          <img src="../../../../public/favicon.ico" alt="" />
        </div>
        <div class="content-center"></div>
        <div class="content-right"></div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="menu-content" ref="menuContent">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-header"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#47b686"
        >
          <div class="flex-grow" />
          <!-- 递归动态菜单 -->
          <olp-menu-item :item-arr="itemArr" />
        </el-menu>
      </div>
    </el-col>
    <el-col :span="3">
      <olp-menu-button />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import OlpMenuItem from './components/OlpMenuItem/OlpMenuItem.vue';

const router = useRouter();

const itemArr = reactive([
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；没children的，即children的length等于0的，才会使用path属性做路由跳转
    name: '首页',
    sort: '1',
    icon: 'house',

    path: '/index',
    children: [],
  },
  {
    name: '题目',
    sort: '2',
    icon: 'hot-water',
    path: '/problem',
    children: [],
  },
  {
    name: '训练',
    sort: '3',
    icon: 'tickets',
    children: [],
  },
  {
    name: '比赛',
    sort: '4',
    icon: 'trophy',
    path: '/competition',
    children: [],
  },
  {
    name: '测评',
    sort: '5',
    icon: 'odometer',
    children: [],
  },
  {
    name: '排名',
    sort: '6',
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
    sort: '7',
    icon: 'chat-dot-square',
    children: [],
  },
  {
    name: '团队',
    sort: '8',
    icon: 'user',
    path: '/team',
    children: [],
  },
  {
    name: '关于',
    sort: '9',
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
const activeIndex = ref('');
// 动态检测当前路由修改导航栏激活项
watch(
  () => router.currentRoute.value,
  routerInstance => {
    let index = '';
    let routerPath = routerInstance.meta?.title as string;
    if (routerPath != null) {
      itemArr.forEach(item => {
        if (item.path?.substring(1) === routerPath) {
          index = '/' + routerPath;
        }
      });
    }

    activeIndex.value = index;
  },
  { immediate: true, deep: true }
);

const handleSelect = (key: string, keyPath: string[]) => {
  router.push({ path: key });
};

const isCollapse = ref(true);
const handleOpen = () => {
  isCollapse.value = false;
};
const handleClose = () => {
  isCollapse.value = true;
};

const menuContent = ref();

const findC = (arr1: Array<any>) => {
  if (
    itemArr.filter(() => {
      return arr1.forEach(item => {
        if (
          itemArr.find(function (items: any) {
            return items.icon === item.icon;
          }) != undefined
        ) {
          return true;
        } else {
          return false;
        }
      });
    }).length == arr1.length
  ) {
    return true;
  }

  return false;
};

const isHas = (newWidth: number, popItem: any, popArr: any, omit: any) => {
  if (
    itemArr.find(function (popArr: any) {
      return popArr.icon === 'MoreFilled';
    }) != undefined
  ) {
    if (newWidth == 1000) {
      console.log('我怕被触发了');
    }
  } else {
    popItem = itemArr.pop();
    omit.children.unshift(popItem);
    popArr.push(popItem);
    itemArr.push(omit);
  }
};

const getWidth = () => {
  nextTick(() => {
    if (menuContent.value) {
      //div容器获取tableBox.value.clientWidth
      let newWidth = menuContent.value.clientWidth;
      // width.value = (newWidth - 450) / 2;

      if (newWidth <= 1100) {
        const omit: any = {
          name: '',
          sort: '10',
          icon: 'MoreFilled',
          children: [],
        };

        let popItem = null;
        const popArr = [];
      }
    }
  });
};

onMounted(() => {
  getWidth();
  window.addEventListener('resize', getWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', getWidth);
});
</script>

<style lang="scss" scoped>
ul {
  border-bottom: 0;
}

.logo-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
