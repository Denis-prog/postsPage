<template>
  <article class="post">
    <header class="post__header">
      <h2>{{ title }}</h2>
    </header>
    <section class="post__body">
      <p>{{ body }}</p>
    </section>
    <footer class="post__footer">
      {{ author }}
    </footer>
  </article>
</template>

<script lang="ts" setup>
import type { IPost } from './types.ts';

defineProps<IPost>();
</script>

<style lang="scss" scoped>
.post {
  border: var(--base-border);
  padding: 10px;
  background-color: #fff;
  overflow: hidden;

  &>*:not(:last-child) {
    margin-bottom: 10px;
  }

  &__header {
    color: #249ff1;
  }

  &__footer {
    color: #c5c4c4
  }
}
</style>
