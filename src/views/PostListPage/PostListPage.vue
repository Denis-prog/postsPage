<template>
  <section class="post-list-page">
    <div class="post-list-page__search">
      <BaseSearchInput v-model="postStore.searchValue" placeholder="filter by author" />
    </div>
    <BaseList class-list="post-list-page__grid" :list="postStore.filteredList" #default="props">
      <Post v-bind="props" />
    </BaseList>
  </section>
</template>

<script setup lang="ts">
import Post from '@/components/post/Post.vue';
import { BaseSearchInput, BaseList } from '@/components/base/index';

import { useUserStore, usePostStore } from '@/stores';

const userStore = useUserStore();
const postStore = usePostStore();

const loadData = async () => {
  userStore.getList();
  postStore.getList();
}

loadData()

</script>

<style lang="scss" scoped>
.post-list-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__search {
    width: 50%;
    margin-bottom: 30px;
  }

  :deep(.post-list-page__grid) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
    gap: 15px;
    justify-content: center;
  }
}
</style>
