<!--
 * @Author: ND_LJQ
 * @Date: 2022-06-30 16:26:44
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 21:11:25
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="main-footer">
    <div class="main-footer-content">
      <el-row :gutter="5">
        <el-col :span="6">
          <h1>HUNAU</h1>
        </el-col>
        <el-col :span="6">
          <div class="footer-box">
            <h2>服务</h2>
            <p><a href="">系统队列</a></p>
            <p><a href="">测试信息</a></p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footer-box">
            <h1>开发</h1>
            <p><a href="">开源</a></p>
            <p><a href="">API</a></p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="footer-box">
            <h1>支持</h1>
            <p>
              <a href=""
                ><el-icon><Warning /></el-icon>关于</a
              >
            </p>
            <p>
              <a href=""
                ><el-icon><Phone /></el-icon>帮助</a
              >
            </p>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <div class="main-footer-box">
            <a href="">备案号</a>
            <span style="margin-left: 5px">Powered by</span>
            <a
              href="https://gitee.com/vegetable-dog-development-team/online-learning-platform"
              style="margin-left: 5px"
              >HANUOI</a
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-footer {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  // background-color: #fff;
  /*去除a标签下划线*/
  a {
    text-decoration: none;
    color: inherit;
  }
  .main-footer-content {
    width: 100%;
    margin: 30px 0;
    .main-footer-box {
      margin-top: 20px;
    }
  }
  .footer-box {
    p {
      margin: 10px 0;
    }
  }
}
</style>
