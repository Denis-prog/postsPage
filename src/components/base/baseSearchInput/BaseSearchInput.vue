<template>
  <BaseInput :modelValue="localQuery" @update:model-value="onUpdate" @blur="onTriggerBlur" @clear="onTriggerBlur"
    class="base-search-input">
    <template #prevIcon>
      <IconSearch />
    </template>
  </BaseInput>
</template>

<script setup lang="ts">
import {
  type PropType,
  defineModel,
  defineProps,
  defineEmits,
  watch,
  ref,
  computed
} from "vue";

import { BaseInput } from '../baseInput';
import { SearchTriggerTypeEnum } from './types';
import IconSearch from "@/components/icons/IconSearch.vue";
import { debounce } from "@/utils";

const props = defineProps({
  searchTrigger: {
    type: String as PropType<SearchTriggerTypeEnum>,
    default: SearchTriggerTypeEnum.input,
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['search', 'blur'])

const model = defineModel({ default: '' });

const onSearch = (value: string) => {
  model.value = value;

  emit('search', value)
};

const onDebounceSearch = debounce(onSearch, 300);

const localQuery = ref(props.modelValue);

const isDiffValue = computed(() => localQuery.value !== model.value)

const checkSearchTrigger = (trigger: SearchTriggerTypeEnum) =>
  trigger === props.searchTrigger;

const onTriggerBlur = () => {
  if (isDiffValue.value && checkSearchTrigger(SearchTriggerTypeEnum.blur)) {
    onSearch(localQuery.value);
  }
};

const onUpdate = (v: string) => {
  localQuery.value = v;

  if (isDiffValue.value && checkSearchTrigger(SearchTriggerTypeEnum.input)) {
    if (!v) {
      onDebounceSearch.cancel();
      onSearch(v)
    } else {
      onDebounceSearch(v)
    }
  }
}

watch(() => props.modelValue, (newVal) => {
  localQuery.value = newVal
})

</script>
