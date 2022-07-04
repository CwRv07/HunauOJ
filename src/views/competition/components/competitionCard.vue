<template>
  <div class="competiton-card">
    <el-card>
      <!-- 图片板块 -->
      <section class="card-image">
        <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" :lazy="true" />
      </section>
      <!-- 详情板块 -->
      <section class="card-detail">
        <p class="card-title">树状数组</p>
        <ul class="card-info">
          <li class="create-time">
            <el-tag type="info">
              <el-icon size="1rem"><Clock /></el-icon>
              <span>22-07-04</span>
            </el-tag>
          </li>
          <li class="duration">
            <el-tag type="info">
              <el-icon size="1rem"><AlarmClock /></el-icon>
              <span>1天</span>
            </el-tag>
          </li>
          <li class="authority">
            <el-tag type="danger">私有赛</el-tag>
            <el-tag type="success">公开赛</el-tag>
          </li>
          <li class="member-number">
            <el-tag type="info">
              <el-icon size="1rem"><User /></el-icon>
              <span>17</span>
            </el-tag>
          </li>
        </ul>
      </section>
      <!-- 状态板块 -->
      <section class="card-status">
        <el-button type="info">未开始</el-button>
        <el-button type="success">进行中</el-button>
        <el-button type="danger">已结束</el-button>
      </section>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="competitionCard"></script>

<style lang="scss" scoped>
.competiton-card {
  margin: 10px 0;
  cursor: pointer;
  :deep(.el-card__body) {
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    .card-title {
      color: var(--el-color-primary);
    }
    .el-image {
      transform: scale(1.05);
    }
  }

  /* 图片板块 */
  .card-image {
    .el-image {
      width: 80px;
      height: 80px;
      border-radius: var(--el-border-radius-base);
      overflow: hidden;
      transition: transform 0.3s;
    }
  }

  /* 详情板块 */
  .card-detail {
    margin-left: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-title {
      margin-top: 10px;
      @extend .single-line;
      font-size: var(--el-font-size-large);
      font-weight: bold;
      transition: color 0.3s;
    }

    .card-info {
      display: flex;

      > li {
        margin-right: 10px;
      }
      .el-tag {
        // icon与文本对齐
        :deep(.el-tag__content) {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  /* 状态板块 */
  .card-status {
    display: flex;
    align-items: center;
  }
}
</style>
