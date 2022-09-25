<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 21:09:19
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div>
    <!-- <h1 v-loading.fullscreen.lock="true" :element-loading-spinner="svg" element-loading-svg-view-box="0, 0, 1024, 1024" element-loading-background="rgba(122, 122, 122, 0.8)">index</h1> -->
    <div class="index-body">
      <div class="index-body-content">
        <!-- 瀑布流(左边) -->
        <div class="content-left">
          <div class="content-left-content">
            <olp-banner-card />
          </div>
        </div>

        <!-- 瀑布流(右边) -->
        <div class="content-right">
          <div class="content-right-content">
            <olp-search-card />
            <olp-race-card />
            <olp-ac-ranking />
            <olp-support-platform-card />
          </div>
        </div>
      </div>
      <!-- <router-link :to="{ name: 'notFound', params: { cause: 404 } }"> 404 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 403 } }"> 403 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 500 } }"> 500 </router-link>
      <router-link to="/markdownTest">markdownTest</router-link> -->
      <olp-footer-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import OlpBannerCard from './components/OlpBannerCard/OlpBannerCard.vue';
import OlpSearchCard from './components/OlpSearchCard/OlpSearchCard.vue';
import OlpRaceCard from './components/OlpRaceCard/OlpRaceCard.vue';
import OlpAcRanking from './components/OlpAcRankingCard/OlpAcRankingCard.vue';
import OlpSupportPlatformCard from './components/OlpSupportPlatformCard/OlpSupportPlatformCard.vue';
// const svg = `
// <path d="M1016.057791 124.92321l-22.64677 221.938351a28.081995 28.081995 0 0 1-30.799608 25.364383l-221.938351-22.646771a28.081995 28.081995 0 0 1-14.946869-49.822895l76.546085-62.505086a394.053807 394.053807 0 1 0-45.293541 588.816034 58.881603 58.881603 0 1 1 70.657924 94.210565 511.817014 511.817014 0 1 1 65.675634-757.760942l76.99902-62.505087a28.081995 28.081995 0 0 1 45.746476 24.911448z" fill="#41b882" p-id="3274"></path>`;
</script>

<style lang="scss" scoped>
.index-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  width: 100%;
  // background-color: rgb(247, 248, 250);
  // height: 100vh;
  .index-body-content {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 80%;

    // 瀑布流左边样式
    .content-left {
      display: flex;
      justify-content: center;
      width: 70%;
      // background-color: #fff;
      .content-left-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
      }
    }

    // 瀑布流右边样式
    .content-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      // background-color: #b7b7b7;
      .content-right-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
      }
    }
  }
}
</style>
