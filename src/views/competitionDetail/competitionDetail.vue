<template>
  <main id="competition-detail">
    <!-- 比赛信息 -->
    <header class="competition-info">
      <el-card>
        <!-- 比赛标题与标签信息 -->
        <section class="info-main">
          <h1 class="title">树状数组</h1>
          <ul class="tag-list">
            <li class="tag-item">
              <el-tag type="danger">私有赛</el-tag>
            </li>
            <li class="tag-item">
              <el-tag type="info">
                <el-icon size="1rem"><User /></el-icon>
                <span>17</span>
              </el-tag>
            </li>
          </ul>
        </section>

        <!-- 比赛时间信息 -->
        <section class="info-time">
          <el-row justify="center">
            <el-col :md="12">
              <div class="time-start">
                <p>开始时间</p>
                <span>2022-06-25 14:38:00</span>
              </div>
            </el-col>
            <el-col :md="12">
              <div class="time-end">
                <p>结束时间</p>
                <span>2022-07-08 00:00:00</span>
              </div>
            </el-col>
            <el-col :sm="20" :span="24">
              <el-progress class="time-progress" :text-inside="true" :stroke-width="20" :percentage="75" status="warning">
                <span>-34:49:29</span>
              </el-progress>
            </el-col>
          </el-row>
        </section>
      </el-card>
    </header>

    <!-- 比赛列表 -->
    <main class="competition-box">
      <el-card>
        <header class="box-nav">
          <el-tabs v-model="currentTab" @tab-click="changeTab">
            <el-tab-pane label="简介" name="introduction" />
            <el-tab-pane label="题目" name="problem" />
            <el-tab-pane label="状态" name="status" />
            <el-tab-pane label="排名" name="ranking" />
            <el-tab-pane label="评论" name="comment" />
          </el-tabs>
        </header>
        <main class="box-display">
          <router-view />
        </main>
      </el-card>
    </main>
  </main>
</template>

<script setup lang="ts" name="competitionDetail">
/* 时间进度条 */
/* /时间进度条 */

/* 比赛详情页标签 */
const currentTab = ref('introduction');
const changeTab = () => {
  return;
};
/* /比赛详情页标签 */
</script>

<style lang="scss" scoped>
#competition-detail {
  @include body-padding($body-padding-list);
  margin-top: 30px;

  /* 比赛信息 */
  .competition-info {
    // 比赛标题和标签信息
    .info-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      .title {
        margin: 5px 0;
      }
      .tag-list {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    // 比赛时间信息
    .info-time {
      .time-item {
        display: flex;
        justify-content: center;
        color: var(--el-text-color-secondary);
        font-size: var(--el-font-size-small);
        margin-bottom: 8px;

        p {
          margin-right: 5px;
        }
      }
      .time-start {
        @extend .time-item;
      }

      .time-end {
        @extend .time-item;
      }

      .time-progress {
      }
    }
  }

  /* 比赛列表 */
  .competition-box {
    margin-top: 20px;
  }
}
</style>
