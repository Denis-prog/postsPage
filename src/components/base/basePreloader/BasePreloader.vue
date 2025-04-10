<template>
  <div inert ref="refHtml" class="preloader-wrapper" tabindex="-1"
    :class="{ 'preloader-wrapper_has_overlay': showOverlay }">
    <div class="preloader">
      <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="20" stroke="#3498db" stroke-width="4" fill="none" stroke-dasharray="31.4 31.4">
          <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s"
            repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
  inFocus: {
    type: Boolean,
    default: true,
  },
  showOverlay: {
    type: Boolean,
    default: true,
  },
});

const refHtml = ref<HTMLElement | null>(null);

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  props.inFocus && refHtml.value?.focus();
})
</script>

<style lang="scss" scoped>
.preloader-wrapper {
  display: flex;

  &_has_overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba($color: #797676, $alpha: 0.5);
    z-index: 6000;
  }
}

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  overflow: hidden;
}
</style>
