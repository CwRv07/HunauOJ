<!--
 * @Author: ND_LJQ
 * @Date: 2022-06-30 11:10:29
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-06-30 11:24:04
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
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
</template>

<script lang="ts" setup>
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
.search-box {
  width: 100%;
  border: 0;
  // overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.1);
  > input {
    border-radius: 8px;
  }
  :deep(.el-autocomplete) {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
