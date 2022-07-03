<template>
  <main id="teamDetail">
    <!-- 标签页 -->
    <header class="team-tab">
      <el-card :body-style="{ padding: '1px 20px' }">
        <el-tabs v-model="currentTab" @tab-click="changeTag">
          <el-tab-pane label="主页" name="index" />
          <el-tab-pane label="题目" name="problem" />
          <el-tab-pane label=" 比赛" name="competition" />
          <el-tab-pane label="评测" name="evaluating" />
          <el-tab-pane label="讨论" name=" discussion " />
          <el-tab-pane label="成员" name="member" />
          <el-tab-pane label="排名" name="rank" />
        </el-tabs>
      </el-card>
    </header>

    <el-row :gutter="20">
      <!-- 团队板块 -->
      <el-col :sm="16" :md="18">
        <el-card>
          <aside class="team-section">
            <router-view />
          </aside>
        </el-card>
      </el-col>

      <!-- 介绍板块 -->
      <el-col :sm="8" :md="6" class="hidden-xs-only">
        <el-card>
          <aside class="team-introduction">
            <!-- 团队头像 -->
            <header class="team-image">
              <el-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" :lazy="true" />
            </header>
            <!-- 团队信息 -->
            <main class="team-info">
              <ul class="info-list">
                <li class="info-item" v-for="p in teamInfo" :key="p.title">
                  <p class="info-title">{{ p.title }}</p>
                  <span class="info-content" :title="p.content">{{ p.content }}</span>
                </li>
              </ul>
            </main>
            <!-- 团队操作 -->
            <footer>
              <template v-if="isInTeam">
                <el-button type="primary" @click="joinTeam">申请加入团队</el-button>
              </template>
              <template v-else>
                <el-button type="danger" @click="leaveTeam">申请退出团队</el-button>
              </template>
            </footer>
          </aside>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<script setup lang="ts" name="teamDetail">
/* 标签页 */

const currentTab = ref('index');
const changeTag = () => {
  return;
};

/* /标签页 */

/* 团队信息 */

const teamInfo = reactive([
  { title: '团队名称', content: '测试测试测试测试测试测试测试测试测试' },
  { title: '团队队长', content: 'TEST' },
  { title: '团队权限', content: '' },
  { title: '创建时间', content: '22-07-02' },
  { title: '团队编号', content: '10086' },
]);

/* /团队信息 */

/* 团队操作 */

const isInTeam = ref(false);
const joinTeam = () => {
  return;
};
const leaveTeam = () => {
  return;
};

/* /团队操作 */
</script>

<style lang="scss" scoped>
#teamDetail {
  @include body-padding($body-padding-list);
  margin-top: 30px;

  /* 标签页 */
  .team-tab {
    margin-bottom: 20px;

    // 修改el-tabs样式
    :deep(.el-tabs__header) {
      margin: 0;
      .el-tabs__nav-wrap {
        &::after {
          display: none;
        }
      }
    }
  }

  /* 团队板块 */
  .team-section {
  }
  /* 介绍板块 */
  .team-introduction {
    > * {
      display: flex;
      justify-content: center;
    }
    // 团队头像
    .team-image {
      .el-image {
        width: 100px;
        height: 100px;
        border-radius: var(--el-border-radius-circle);
        overflow: hidden;
      }
    }
    // 团队信息
    .team-info {
      margin: 20px 0;
      .info-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        .info-item {
          margin: 5px 0;
          display: flex;
          justify-content: space-between;

          .info-title {
            margin-right: 20px;
            color: var(--el-text-color-secondary);
            white-space: nowrap;
          }

          .info-content {
            @extend .single-line;
          }
        }
      }
    }
  }
}
</style>
