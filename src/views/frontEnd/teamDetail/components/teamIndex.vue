<template>
  <section id="teamIndex">
    <div class="title">团队描述</div>
    <div class="description">{{ teamData?.tDescription }}</div>
  </section>
</template>

<script lang="ts" setup name="teamIndex">
import { TeamAPI } from '@/network';
import { TeamData } from '@/utils/type/data';
import { useRoute } from 'vue-router';

const route = useRoute();
// onMounted(async () => {});
const teamData: TeamData | undefined = inject('teamData');
</script>

<style lang="scss" scoped>
#teamIndex {
  .title {
    margin-bottom: 20px;
    font-size: var(--el-font-size-large);
    color: var(--el-text-color-secondary);
  }
}
</style>
