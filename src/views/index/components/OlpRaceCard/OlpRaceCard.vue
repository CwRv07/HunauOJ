<!--
 * @Author: ND_LJQ
 * @Date: 2022-06-30 11:09:50
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-30 11:31:53
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-card class="race-box" :body-style="{ width: '95%' }">
    <div class="race-box-content">
      <div class="race-content-title"><h3>近期比赛</h3></div>
      <div
        class="race-item"
        v-for="(item, index) in raceList"
        :key="index"
        style="border-radius: 3px"
      >
        <div class="item-title">
          <div class="title-content">
            <div class="race-title">
              <h4>{{ item.raceName }}</h4>
            </div>
            <div class="race-type">
              <el-button icon="Sunny" size="small" type="primary"
                >进行中</el-button
              >
            </div>
          </div>
        </div>

        <div class="item-body">
          <div class="race-type-auth">
            <div class="type-content">
              <el-tooltip placement="top" v-if="item.raceType == 1">
                <template #content>比赛排名：以每题提交的最高得分计算</template>
                <el-button type="warning" round size="small" icon="Trophy"
                  >OI</el-button
                >
              </el-tooltip>
              <div class="acm-box" v-if="item.raceType == 0">
                <el-button color="#409eff" round size="small" icon="Trophy"
                  >ACM</el-button
                >
              </div>

              <el-tooltip
                placement="top"
                effect="light"
                v-if="item.racePermissionsLv == 1"
              >
                <template #content
                  >私有赛 - 用户需要密码才可查看与提交</template
                >
                <el-button
                  type="danger"
                  plain
                  size="small"
                  style="cursor: default"
                  >私有赛</el-button
                >
              </el-tooltip>

              <el-tooltip
                placement="top"
                effect="light"
                v-if="item.racePermissionsLv == 0"
              >
                <template #content>公开赛 - 所有用户可查看与提交</template>
                <el-button
                  type="success"
                  plain
                  size="small"
                  style="cursor: default"
                  >公开赛</el-button
                >
              </el-tooltip>
            </div>
          </div>
          <div class="race-info">
            <div class="info-content">
              <el-button
                type="info"
                round
                size="small"
                icon="Calendar"
                style="cursor: default"
                >{{ item.raceDate }}</el-button
              >
              <el-button
                type="success"
                round
                size="small"
                icon="AlarmClock"
                style="cursor: default"
                >{{ item.raceDuration }}天</el-button
              >
              <el-button
                plain
                round
                size="small"
                icon="User"
                style="cursor: default"
                >{{ item.raceMembers }}人</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
const raceList = reactive([
  {
    raceName: '树状数组',
    raceMembers: 6,
    racePermissionsLv: 0,
    raceDate: '06-25 14:38',
    raceDuration: 10,
    raceType: 0,
  },
  {
    raceName: 'Tire字典树',
    raceMembers: 10,
    racePermissionsLv: 1,
    raceDate: '06-25 14:38',
    raceDuration: 12,
    raceType: 1,
  },
]);
</script>

<style lang="scss" scoped>
//比赛卡片样式
.race-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.1);
  .race-box-content {
    width: 100%;
    // .race-content-title {
    //   color: #5eb95e;
    // }

    // 比赛item
    .race-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      border: 1px #19be6b solid;
      .item-title {
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom: 1px #19be6b solid;
        .title-content {
          width: 95%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
          .race-title {
            color: #5eb95e;
          }
        }
      }

      .item-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        // background-color: black;
        .race-type-auth {
          display: flex;
          width: 100%;
          margin: 10px 0;
          justify-content: center;
          align-items: center;
          .type-content {
            display: flex;
            .acm-box {
              margin-right: 10px;
              color: #fff;
              :deep(.el-button) {
                color: #fff;
              }
            }
          }
        }

        .race-info {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;
          // .info-content {
          // }
        }
      }
    }
    // /比赛item
  }
}
//比赛卡片样式
</style>
