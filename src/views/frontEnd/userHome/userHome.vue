<!--
 * @Author: ND_LJQ
 * @Date: 2022-09-25 17:24:25
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 19:38:07
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="user-home-body">
    <div class="user-home-content">
      <el-row>
        <el-col>
          <user-home-header />
        </el-col>
        <el-col />
      </el-row>

      <el-row>
        <el-col>
          <user-info-card />
        </el-col>

        <el-col>
          <el-row>
            <el-col>
              <user-problem-solve-count-card />
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <user-submits-thermal-map-card />
            </el-col>
          </el-row>

          <el-row>
            <el-col>
              <user-problem-solve-card />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserHomeHeader from './components/userHomeHeader/userHomeHeader.vue';
import UserInfoCard from './components/userInfoCard/userInfoCard.vue';
import UserProblemSolveCountCard from './components/userProblemSolveCountCard/userProblemSolveCountCard.vue';
import UserSubmitsThermalMapCard from './components/userSubmitsThermalMapCard/userSubmitsThermalMapCard.vue';
import UserProblemSolveCard from './components/userProblemSolveCard/userProblemSolveCard.vue';
</script>

<style lang="scss" scoped>
.user-home-body {
  display: flex;
  justify-content: center;
}

.user-home-content {
  width: 80%;
}
</style>
