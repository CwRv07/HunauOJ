<!--
 * @Author: ND_LJQ
 * @Date: 2022-06-30 11:09:35
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-30 11:18:48
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-card class="banner-card" :body-style="{ width: '95%' }">
    <div class="banner-body-content">
      <div class="banner-title">
        <h1>欢迎来到HUNAU</h1>
      </div>
      <div class="banner">
        <el-carousel>
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.banner-card {
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner-body-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .banner {
      width: 100%;
      margin-top: 20px;
      // height: 500px;
    }
  }
}
</style>
