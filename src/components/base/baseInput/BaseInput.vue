<template>
  <div class="base-input" :class="$attrs.class" :style="$attrs.style as StyleValue">
    <div class="base-input__icon-box" v-if="$slots.prevIcon">
      <slot name="prevIcon" />
    </div>
    <input v-model="model" v-bind="inputAttrs" ref="inputHtmlRef" class="base-input__control" />

    <button v-if="isCanClear" @mousedown.prevent @click="clearInput" class="input-btn base-input__clear-btn">
      <IconClose />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  type PropType,
  ref,
  type StyleValue,
  useAttrs,
} from "vue";

import type { IBaseInput } from "./types";
import IconClose from "@/components/icons/IconClose.vue";

defineOptions({
  inheritAttrs: false
})

const emit = defineEmits(['action', 'clear']);

const props = defineProps({
  modelValue: {
    type: String as PropType<IBaseInput["modelValue"]>,
    default: "",
  },
  cleanable: {
    type: Boolean,
    default: true,
  },
});

const model = defineModel({ default: '' });

const inputHtmlRef = ref<HTMLInputElement | null>(null);
const attrs = useAttrs();

const isCanClear = computed(() => model.value.length && props.cleanable);

const inputAttrs = computed(() => {
  /* eslint-disable */
  const { style: styles, class: className, ...rest } = attrs;

  return rest;
});

const clearInput = () => {
  model.value = ''
  emit('clear');
}

</script>

<style lang="scss" scoped>
.base-input {
  position: relative;
  min-width: 70px;
  display: flex;
  border: var(--base-border);
  background-color: #fff;

  &:focus-within {
    border-color: #249ff1;
  }

  &__icon-box {
    display: flex;
    align-items: center;
    border-right: var(--base-border);
    padding: 2px 4px;
    color: #b1aeae;
  }

  &__control {
    outline: 0;
    width: 100%;
    height: 100%;
    font: inherit;
    padding: 5px 25px 5px 5px;
    background-color: transparent;
    cursor: default;
    border: none;
  }

  .input-btn {
    display: flex;
    background: transparent;
    cursor: pointer;
    color: #b1aeae;
    border: none;
    position: absolute;
    padding: 0;

    &:hover {
      color: #8a8a8a
    }
  }

  &__clear-btn {
    z-index: 1000;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);

  }
}
</style>
