<!--
 * @Author: ND_LJQ
 * @Date: 2022-06-30 16:06:27
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-30 18:50:15
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-card class="support-platform">
    <template #header>
      <div class="card-header">
        <h3>支持的远程评测平台</h3>
      </div>
    </template>
    <div>
      <el-row :gutter="10">
        <el-col :span="12" class="lightgreen-box" v-for="(item, index) in platformList" :key="index">
          <el-tooltip :content="item.plaName" placement="top">
            <a :href="item.plaSrc">
              <div style="margin-bottom: 10px; display: flex; justify-content: center; align-items: center; border-radius: 3px; border: 1px rgb(65, 184, 130) solid">
                <el-image style="width: 8rem; height: 3rem" :src="item.plaImgSrc" :initial-index="4" fit="contain" />
              </div>
            </a>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
interface platItem {
  plaName: string;
  plaSrc: string;
  plaImgSrc: string;
}
const platformList: Array<platItem> = reactive([
  {
    plaName: 'HDU',
    plaSrc: 'http://acm.hdu.edu.cn/',
    plaImgSrc: 'https://hdoi.cn/assets/img/hdu-logo.0e0a2705.png',
  },
  {
    plaName: 'POJ',
    plaSrc: 'http://poj.org/',
    plaImgSrc: 'https://hdoi.cn/assets/img/poj-logo.6fca2f40.png',
  },
  {
    plaName: 'Codeforces',
    plaSrc: 'https://codeforces.com/',
    plaImgSrc: 'https://hdoi.cn/assets/img/codeforces-logo.24fde478.png',
  },
  {
    plaName: 'GYM',
    plaSrc: 'https://codeforces.com/gyms',
    plaImgSrc: 'https://hdoi.cn/assets/img/gym-logo.c7688e05.png',
  },
  {
    plaName: 'AtCoder',
    plaSrc: 'https://atcoder.jp/',
    plaImgSrc: 'https://hdoi.cn/assets/img/atcoder-logo.45ace824.png',
  },
  {
    plaName: 'SPOJ',
    plaSrc: 'https://www.spoj.com/',
    plaImgSrc: 'https://hdoi.cn/assets/img/spoj-logo.7889f75a.png',
  },
]);
</script>

<style lang="scss" scoped>
.support-platform {
  margin-top: 15px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
