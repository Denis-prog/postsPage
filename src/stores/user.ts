import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '@/api'
import type { IUser } from '@/api/models'

export const useUserStore = defineStore('user', () => {
  const list = ref<Array<IUser>>([])

  const getList = async () => {
    list.value = await api.User.getList()
  }

  return { list, getList }
})
