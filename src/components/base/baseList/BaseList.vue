<template>
  <div :class="$attrs.class" class="base-list-container">
    <ul v-if="list.length" class="base-list" :class="classList">
      <li class="base-list__item" v-for="item of list" :key="getKey(item)">
        <slot v-bind="item" />
      </li>
    </ul>
    <div v-if="showEmpty && !list.length" class="base-list__empty">
      <slot name="emptyList">
        <div class="base-list__empty-title">Список пуст</div>
        <img class="base-list__empty-icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvklEQVR4nO3ZQQqDUBRD0beJX+r+d9QKLiedRPiIgpakWskB6aCD8OjFSaviv+Biz9dud8jZkEMov4gYkhYlLTEkLUpaYkhalLTEkLQoaYkhaVHSEkPSoqQlhqRFSUsMSYuSlhiSFiUtMSQtSloH3OYfK+x8RsWI09ZGq6oXv5uqanCMKK1tNOURWyNqy42mPmJtxKHfaI4jliMu84btiH7Ead54d58P14hT/4qdqurpHnE/tiN+ecjoyCnqRB97WEpei0LrCwAAAABJRU5ErkJggg=="
          alt="list-is-empty">
      </slot>
    </div>
  </div>

</template>

<script lang="ts" setup generic="T">
import type { PropType } from 'vue';

defineProps({
  list: {
    type: Array as PropType<Array<T>>,
    default: () => ([])
  },
  getKey: {
    type: Function as PropType<(item: T) => string | number>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (item: any) => item.id
  },
  showEmpty: {
    type: Boolean,
    default: true
  },
  classList: null
})
</script>

<style lang="scss">
.base-list-container {
  width: 100%;
}

.base-list {
  padding: 0;
  margin: 0;
  list-style: none;

  &__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  &__empty-title {
    margin-bottom: 10px;
  }

  &__empty-icon {
    width: 40px;
    height: 50px;
  }
}
</style>
