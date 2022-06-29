<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 17:00:11
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-29 22:44:17
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
          </div>
        </div>

        <!-- 瀑布流(右边) -->
        <div class="content-right">
          <div class="content-right-content">
            <el-card class="search-box" :body-style="{ padding: 0 }">
              <el-autocomplete
                v-model="state"
                size="large"
                input-style="border-radius:8px;outline:none;"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please input"
                @select="handleSelect"
                prefix-icon="Search"
              />
            </el-card>

            <el-card class="race-box" :body-style="{ width: '95%' }">
              <div class="race-box-content">
                <div class="race-content-title"><h3>近期比赛</h3></div>
                <div class="race-item" v-for="(item, index) in raceList" :key="index">
                  <div class="item-title">
                    <div class="title-content">
                      <div class="race-title">
                        <h4>{{ item.raceName }}</h4>
                      </div>
                      <div class="race-type">
                        <el-button icon="Sunny" size="small" type="primary">进行中</el-button>
                      </div>
                    </div>
                    <div class="item-body">
                        
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <!-- <router-link :to="{ name: 'notFound', params: { cause: 404 } }"> 404 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 403 } }"> 403 </router-link>
      <router-link :to="{ name: 'notFound', params: { cause: 500 } }"> 500 </router-link>
      <router-link to="/markdownTest">markdownTest</router-link> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const svg = `
<path d="M1016.057791 124.92321l-22.64677 221.938351a28.081995 28.081995 0 0 1-30.799608 25.364383l-221.938351-22.646771a28.081995 28.081995 0 0 1-14.946869-49.822895l76.546085-62.505086a394.053807 394.053807 0 1 0-45.293541 588.816034 58.881603 58.881603 0 1 1 70.657924 94.210565 511.817014 511.817014 0 1 1 65.675634-757.760942l76.99902-62.505087a28.081995 28.081995 0 0 1 45.746476 24.911448z" fill="#41b882" p-id="3274"></path>`;

const raceList = reactive([
  {
    raceName: '树状数组',

  },
  {
    raceName: 'Tire字典树',
  },
]);

const state = ref('');

interface LinkItem {
  value: string;
  link: string;
}

const links = ref<LinkItem[]>([]);

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ];
};

let timeout: NodeJS.Timeout;
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 3000 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
  };
};

const handleSelect = (item: any) => {
  console.log(item);
};

onMounted(() => {
  links.value = loadAll();
});
</script>

<style lang="scss" scoped>
.index-body {
  display: flex;
  // align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(247, 248, 250);
  height: 100vh;
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
        .search-box {
          width: 100%;
          border: 0;
          // overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.1);
          > input {
            border-radius: 8px;
          }
        }
        :deep(.el-autocomplete) {
          width: 100%;
          border-radius: 8px;
        }

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
            .race-item{
              margin-top: 10px;
              border: 1px #19be6b solid;
              .item-title {
                display: flex;
                justify-content: center;
                width: 100%;
                .title-content {
                  width: 95%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin: 10px 10px;
                  .race-title {
                    color: #5eb95e;
                  }
                }
              }
            }
          }
        }
        //比赛卡片样式
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
