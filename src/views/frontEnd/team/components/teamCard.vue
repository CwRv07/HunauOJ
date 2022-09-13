<template>
  <el-card class="team-card" @click="jumpToProblemDetail(teamData.tId)">
    <!-- 图片板块 -->
    <aside class="card-image">
      <el-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        fit="cover"
        :lazy="true"
      />
      <!-- <p class="team-leader" title="队长名称">队长名称</p> -->
    </aside>
    <!-- 详情板块 -->
    <aside class="card-detail">
      <header class="team-name">{{ teamData.tName }}</header>
      <main class="team-introduction">
        <span class="text">{{ teamData.tDescription }}</span>
      </main>
      <!-- <footer class="team-tag">
        <el-tag type="info" effect="plain">
          <el-icon size="1rem"><User /></el-icon>
          <span>17</span>
        </el-tag>
        <el-tag type="info" effect="plain">
          <el-icon size="1rem"><Clock /></el-icon>
          <span>22-07-02</span>
        </el-tag>
      </footer> -->
    </aside>
  </el-card>
</template>

<script setup lang="ts" name="team-card">
import { useRouter } from 'vue-router';
import { TeamAPI } from '@/network';
import { TeamData } from '@/utils/type/data';
import { p } from '@antfu/utils';
const router = useRouter();

/* 参数-start */
const props = defineProps<{
  teamData: TeamData;
}>();
/* 参数-end */

/* 跳转函数 */
const jumpToProblemDetail = (tId: any) => {
  router.push(`/team/${tId}`);
};
</script>

<style lang="scss" scoped>
.team-card {
  margin: 10px 0;
  cursor: pointer;
  :deep(.el-card__body) {
    display: flex;
  }
  &:hover {
    .team-name {
      color: var(--el-color-primary);
    }
    .el-image {
      transform: scale(1.05);
    }
  }
  /* 图片板块 */
  .card-image {
    width: 80px;
    .el-image {
      width: 80px;
      height: 80px;
      border-radius: var(--el-border-radius-base);
      overflow: hidden;
      transition: transform 0.3s;
    }
    .team-leader {
      @extend .single-line;
      margin-top: 5px;
      text-align: center;
    }
  }

  /* 详情板块 */
  .card-detail {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .team-name {
      @extend .single-line;
      font-size: var(--el-font-size-medium);
      font-weight: bold;
      transition: color 0.3s;
    }
    .team-introduction {
      margin: 10px 0;
      flex: 1;
      .text {
        @extend .multi-line-4;
      }
    }

    .team-tag {
      align-self: flex-end;
      font-size: var(--el-font-size-small);
      color: var(--el-text-color-secondary);

      .el-tag {
        margin-left: 10px;
        :deep(.el-tag__content) {
          display: flex;
        }
      }
    }
  }
}
</style>
