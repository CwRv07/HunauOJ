<template>
  <div id="team">
    <!-- 团队筛选器 -->
    <header class="team-select">
      <el-card>
        <!-- 题目名称 -->
        <el-autocomplete
          class="team-name-select"
          v-model="teamNameSelect"
          clearable
          placeholder="团队搜索"
          prefix-icon="Search"
        />
        <!-- /题目名称 -->
      </el-card>
    </header>
    <!-- 团队展示框 -->
    <main class="team-display">
      <el-row :gutter="20">
        <el-col v-for="p in 12" :key="p" :md="8" :sm="12" :xs="24">
          <team-card />
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script setup lang="ts" name="team">
import TeamCard from './components/teamCard.vue';
/* 筛选器 */

// 标题筛选
const teamNameSelect = ref('');

/* /筛选器 */
</script>

<style lang="scss" scoped>
#team {
  @include body-padding($body-padding-list);
  margin-top: 30px;
  /* 团队筛选器 */
  .team-select {
    margin-bottom: 10px;
  }
  /* 团队展示框 */
  .team-display {
  }
}
</style>
