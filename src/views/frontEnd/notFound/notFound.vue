<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 22:30:23
 * @Description: 
 * @Email: Rv_Jiang@outlook.coms
-->
<template>
  <div id="notFound">
    <el-empty>
      <template #description>
        <h1 class="status">{{ statusDisplay }}</h1>
      </template>

      <template #default>
        <section class="main">
          <p class="description">{{ description[status] }}</p>
          <section class="button-group">
            <el-button type="text" size="large" @click="backToIndex">
              <span class="button-item">返回首页</span>
            </el-button>
          </section>
        </section>
      </template>
    </el-empty>
  </div>
</template>

<script lang="ts" setup>
import { TransitionPresets, useTransition } from '@vueuse/core';
import { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
/* 状态码-start */
const status: Ref<number> = ref(0);
const _statusTransition = useTransition(status, {
  duration: 1000,
  transition: TransitionPresets.easeInOutCubic,
});
const statusDisplay = computed(() => {
  return (Math.round(_statusTransition.value) + '').padStart(3, '0');
});
// 状态码初始化
status.value = Number(route.params.cause || 404);
/* 状态码-end */

/* 描述-start */
const description: Record<string, string> = {
  '404': '页面不存在，不如返回首页，或者刷新网站试试吧',
  '403': '没有访问权限，不如返回首页，或者刷新网站试试吧',
  '500': '服务器繁忙，不如返回首页，或者刷新网站试试吧',
};
/* 描述-end */

/* 按钮功能-start */
const backToIndex = () => {
  router.push('/index');
};
/* 按钮功能-end */
</script>

<style lang="scss" scoped>
#notFound {
  :deep(svg) {
    --el-empty-fill-color-1: var(--el-color-primary-light-9);
    --el-empty-fill-color-2: var(--el-color-primary-light-9);
    --el-empty-fill-color-5: var(--el-color-primary-light-8);
    --el-empty-fill-color-7: var(--el-color-primary-light-7);
    --el-empty-fill-color-8: var(--el-color-primary-light-7);
    --el-empty-fill-color-9: var(--el-color-primary-light-5);
  }

  color: var(--el-text-color-placeholder);

  .status {
    color: var(--el-color-primary-light-9);
    font-size: 100px;
    letter-spacing: 15px;
    font-weight: bold;
    text-shadow: var(--el-color-primary-light-5) 1px 1px 0,
      var(--el-color-primary-light-7) 2px 2px 0, var(--el-color-primary-light-8) 3px 3px 0,
      var(--el-color-primary-light-9) 4px 4px 0;
    user-select: none;
  }

  .main {
    // 表述文本
    .description {
      font-size: var(--el-font-size-large);
    }
    .button-group {
      .button-item {
        font-size: var(--el-font-size-medium);
      }
    }
  }
}
</style>
