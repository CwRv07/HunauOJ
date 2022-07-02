<template>
  <el-card class="team-card">
    <!-- 图片板块 -->
    <aside class="card-image">
      <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" :lazy="true" />
      <p class="team-leader" title="队长名称">队长名称</p>
    </aside>
    <!-- 详情板块 -->
    <aside class="card-detail">
      <header class="team-name">队伍名称</header>
      <main class="team-introduction">
        <span class="text"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore quod sequi ducimus, architecto perspiciatis, fuga sit quasi ratione illum sapiente laborum, ipsa mollitia. Quas
          accusantium consectetur vitae beatae iure.</span
        >
      </main>
      <footer class="team-tag">
        <el-tag type="info" effect="plain">
          <el-icon size="1rem"><User /></el-icon>
          <span>17</span>
        </el-tag>
        <el-tag type="info" effect="plain">
          <el-icon size="1rem"><Clock /></el-icon>
          <span>时间</span>
        </el-tag>
      </footer>
    </aside>
  </el-card>
</template>

<script setup lang="ts" name="team-card"></script>

<style lang="scss" scoped>
.team-card {
  margin: 10px 0;
  cursor: pointer;
  :deep(.el-card__body) {
    display: flex;
  }
  /* 图片板块 */
  .card-image {
    width: 100px;
    .el-image {
      width: 100px;
      height: 100px;
      border-radius: var(--el-border-radius-base);
      overflow: hidden;
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
