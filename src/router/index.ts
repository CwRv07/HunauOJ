/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-28 10:19:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-02 11:47:59
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHashHistory, RouteLocationNormalized } from 'vue-router';
import { useGetters } from '@/utils/useMapper';
import stateRouter from './stateRouter';
// import { USER_ROLE } from '@/utils/constants';

/*
createWebHashHistory hash 路由
createWebHistory history 路由
createMemoryHistory 带缓存 history 路由
*/
const routerHistory = createWebHashHistory();
const routes = [...stateRouter];

const router = createRouter({
  history: routerHistory,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 路由切换时控制滚动行为
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

/* 路由导航卫士 */
// 常量定义
// const userStore = useGetters('userStore', ['isAuthenticated', 'isUser', 'isAdmin', 'isProblemAdmin', 'isSuperAdmin']);
// const elMessageToLogin = () => {
//   ElMessageBox.alert('您未进行登录操作或登录超时', '请先进行登录操作', {
//     confirmButtonText: '确认',
//     callback: () => {
//       router.push('/index');
//     },
//   });
// };
// const elMessageToRollBack = () => {
//   ElMessageBox.alert('您当前用户权限不足', '访问失败', {
//     confirmButtonText: '确认',
//   });
// };
/**
 * @Description: 路由导航守卫拦截
 * @param {RouteLocationNormalized} to
 * @param {RouteLocationNormalized} from
 * @return {*}
 */
import { ElLoading } from 'element-plus';

/* 路由导航变量 */
const routerVariable: { [key: string]: any } = {
  loadingInstance: null,
};

router.beforeEach((to: RouteLocationNormalized /* from: RouteLocationNormalized */) => {
  console.log(to);

  /* 路由跳转动画 */
  routerVariable.loadingInstance = ElLoading.service();

  // // 判断路由匹配里是否需要权限
  // if (to.matched.some(oldRouter => oldRouter.meta.roles)) {

  //   // 判断当前用户能否进行身份判断
  //   if (userStore.isAuthenticated.value) {
  //     //详细判断身份是否符合

  //     // 超级管理员
  //     if (userStore.isSuperAdmin.value) {
  //       return;
  //     }

  //     // 问题管理员
  //     if (userStore.isProblemAdmin.value) {
  //       if ((to.meta.roles as string[]).includes(USER_ROLE.PROBLEM_ADMIN)) {
  //         return;
  //       } else {
  //         elMessageToRollBack();
  //         return false;
  //       }
  //     }

  //     // 管理员
  //     if (userStore.isAdmin.value) {
  //       if ((to.meta.roles as string[]).includes(USER_ROLE.ADMIN)) {
  //         return;
  //       } else {
  //         elMessageToRollBack();
  //         return false;
  //       }
  //     }

  //     // 用户
  //     if (userStore.isUser.value) {
  //       if ((to.meta.roles as string[]).includes(USER_ROLE.USER)) {
  //         return;
  //       } else {
  //         elMessageToRollBack();
  //         return false;
  //       }
  //     }

  //     // 异常用户处理
  //     elMessageToLogin();
  //     return false;
  //   } else {
  //     // 无法进行身份判断，跳转登录页面
  //     elMessageToLogin();
  //     return false;
  //   }
  // } else {
  //   // 当前路由不需要权限情况
  //   return;
  // }
});

router.afterEach(() => {
  setTimeout(() => {
    routerVariable.loadingInstance.close();
  }, 500);
});
export default router;
