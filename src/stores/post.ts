import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'
import type { IPost } from '@/api/models'
import { useUserStore } from './user'

export const usePostStore = defineStore('post', () => {
  const list = ref<Array<IPost>>([])
  const searchValue = ref('')

  const getList = async () => {
    list.value = await api.Post.getList()
  }

  const listByPage = computed(() => {
    const userStore = useUserStore()

    if (!userStore.list.length) return []

    return list.value.map((post) => {
      const user = userStore.list.find((u) => u.id === post.userId)

      return {
        ...post,
        author: user ? user.name : '',
      }
    })
  })

  const filteredList = computed(() => {
    const userStore = useUserStore()

    if (!searchValue.value) {
      return listByPage.value
    } else {
      const users = userStore.list.filter(
        ({ name }) => ~name.toLowerCase().indexOf(searchValue.value.toLowerCase()),
      )

      if (!users.length) {
        return []
      }

      return listByPage.value.filter(({ userId }) => users.find(({ id }) => id === userId))
    }
  })

  return { list, getList, filteredList, listByPage, searchValue }
})
