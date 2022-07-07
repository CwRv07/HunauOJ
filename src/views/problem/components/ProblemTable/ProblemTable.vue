<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-03 08:11:33
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-01 10:21:07
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <div id="problemTable">
    <!-- 筛选栏 -->
    <header class="box-header">
      <el-row>
        <el-col :span="24">
          <!-- 题目语言 -->
          <el-radio-group class="problem-language" v-model="language.active">
            <el-radio-button
              class="language-item"
              v-for="item in language.list"
              :key="item"
              :label="item"
            />
          </el-radio-group>
          <!-- /题目语言 -->
        </el-col>
        <el-col :span="24" class="problem-detail-condition">
          <aside class="left">
            <!-- 题目难度 -->
            <el-select
              class="problem-difficulty"
              clearable
              v-model="difficulty.active"
              placeholder="难度"
            >
              <el-option
                v-for="item in difficulty.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <!-- /题目难度 -->

            <!-- 题目标签 -->
            <el-select
              class="problem-tag"
              v-model="tag.active"
              multiple
              filterable
              collapse-tags
              collapse-tags-tooltip
              placeholder="标签"
            >
              <el-option
                v-for="item in tag.list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <!-- /题目标签 -->

            <!-- 题目名称 -->
            <el-autocomplete
              class="problem-title"
              v-model="title.active"
              :fetch-suggestions="title.querySearch"
              clearable
              placeholder="题目搜索"
              prefix-icon="Search"
            />
            <!-- /题目名称 -->
          </aside>
          <aside class="right">
            <!-- 随机一题 -->
            <el-button class="problem-random" round icon="MagicStick" size="large"
              >随机一题</el-button
            >
            <!-- /随机一题 -->
          </aside>
        </el-col>
      </el-row>
    </header>
    <!-- /筛选栏 -->

    <!-- 题目展示栏 -->
    <main class="box-main">
      <el-table :data="tableData" :highlight-current-row="false" stripe style="width: 100%">
        <el-table-column prop="id" label="题目ID" min-width="100px" />
        <el-table-column prop="name" label="题目" min-width="200px">
          <template #default="slotProps">
            <p class="table-problem-title" :title="slotProps.row.name">
              {{ slotProps.row.name }}
            </p>
          </template>
        </el-table-column>
        <el-table-column prop="difficulty" min-width="100px" label="难度" />
        <el-table-column prop="total" label="提交总数" min-width="100px" />
        <el-table-column prop="pass" label="AC通过率" min-width="150px">
          <template #default="slotProps">
            <el-progress
              :stroke-width="15"
              :show-text="false"
              :percentage="slotProps.row.pass"
              :color="passColorFunc"
              :format="passFormatFunc"
            />
          </template>
        </el-table-column>
      </el-table>
    </main>
    <!-- /题目展示栏 -->

    <!-- 分页栏 -->
    <footer class="box-footer">
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :background="true"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="pagination.currentChange"
      />
    </footer>
    <!-- /分页栏 -->
  </div>
</template>

<script setup lang="ts" name="problem-table">
/* 筛选栏 */

// 标题语言
const language = reactive({
  active: '全部语言',
  list: ['全部语言', 'C', 'C++', 'Java', 'Python'],
});
// /标题语言

// 题目难度
const difficulty = reactive({
  active: '',
  list: [
    { label: '简单', value: 'easy' },
    { label: '普通', value: 'default' },
    { label: '困难', value: 'hard' },
  ],
});
// /题目难度

// 题目标签
const tag = reactive({
  active: [],
  list: [
    { label: '贪心', value: 'greedy' },
    { label: '动态规划', value: 'dp' },
    { label: '分治', value: 'divide-and-conquer' },
  ],
});
// /题目标签

// 题目名称
const title = reactive({
  active: '',
  querySearch: (date: string, callback: (arg: any) => void) => {
    console.log(date);
    callback([]);
  },
  list: [],
});
// /题目名称

/* /筛选栏 */

/* 题目展示栏 */
const passColorFunc = (num: number) => {
  switch (Math.ceil(num / 10)) {
    case 0:
    case 1:
    case 2:
    case 3:
      return '#f56c6c';
    case 4:
    case 5:
    case 6:
      return '#e6a23c';
    case 7:
    case 8:
    case 9:
    case 10:
      return '#67c23a';
    default:
      return '#409eff';
  }
};
const passFormatFunc = (num: number) => {
  return num.toFixed(2) + '%';
};
const tableData = [
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
  {
    id: 'A1000',
    name: 'SPJ测试',
    difficulty: '入门',
    total: 205,
    pass: 52.2,
  },
];
/* /题目展示栏 */

/* 分页栏 */
const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 1000,
  currentChange: (data: number) => {
    console.log(data);
  },
});
/* /分页栏 */
</script>

<style lang="scss" scoped>
#problemTable {
  .box-header {
    margin-bottom: 15px;
    /* 题目语言 */
    .problem-language {
      margin-bottom: 15px;
      :deep(.language-item) {
        .el-radio-button__inner {
          margin-right: 10px;
          font-size: var(--el-font-size-large);
          border: 1px solid transparent;
          border-radius: 100px;
          background: var(--el-border-color-extra-light);
          transition: none;
        }
        &.is-active .el-radio-button__inner {
          background: var(--el-color-primary);
        }
      }
    }
    /* /题目语言 */

    .problem-detail-condition {
      display: flex;
      justify-content: space-between;
      align-items: center;

      // 题目筛选项左侧按钮样式
      .left {
        display: flex;
        align-items: center;
        > div {
          margin-right: 10px;
        }
        :deep(.el-input__wrapper) {
          background-color: var(--el-border-color-extra-light);
          box-shadow: none !important;
          // --el-input-border-color: transparent;
          // --el-input-hover-border-color: transparent;
          // --el-select-border-color-hover: transparent;

          &:hover {
            background-color: var(--el-border-color-light);
          }
        }

        /* 题目难度 */
        .problem-difficulty {
          width: 100px;
        }
        /* /题目难度 */

        /* 题目标签 */
        .problem-tag {
          width: 155px;
          z-index: 100;

          &:hover {
            --el-border-color-extra-light: var(--el-border-color-light);
          }
        }
        /* /题目标签 */

        /* 题目名称 */
        .problem-title {
        }
        /* /题目名称 */
      }

      // 题目筛选项右侧按钮样式
      .right {
        .problem-random {
          font-weight: bold;
          border: 1px solid transparent;
          background: var(--el-border-color-extra-light);
          &:hover {
            background-color: var(--el-button-hover-bg-color);
          }
        }
      }
    }
  }

  .box-main {
    :deep(.el-table__inner-wrapper) {
      th.el-table__cell {
        color: var(--el-text-color-primary);
      }
    }

    .table-problem-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .box-footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
