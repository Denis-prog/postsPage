<template>
  <main class="app-main">
    <PostListPage />
    <BasePreloader v-if="appStore.isLoad" />
  </main>
</template>

<script setup lang="ts">
import PostListPage from '@/views/PostListPage/PostListPage.vue';
import BasePreloader from '@/components/base/basePreloader/BasePreloader.vue';

import { useAppStore } from './stores';

const appStore = useAppStore();
</script>

<style scoped lang="scss">
.app-main {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
