import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const loaders = ref<Array<boolean>>([])

  const setLoad = (isLoad: boolean) => {
    if (isLoad) {
      loaders.value.push(isLoad)
      return
    }

    setTimeout(() => {
      loaders.value.pop()
    }, 400)
  }

  const isLoad = computed(() => !!loaders.value.length)

  return { isLoad, setLoad }
})
