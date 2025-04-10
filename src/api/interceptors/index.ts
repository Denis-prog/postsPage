import type { AxiosInstance } from 'axios'

import { useAppStore } from '@/stores'

export const loaderInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const app = useAppStore()
    app.setLoad(true)

    return config
  })

  instance.interceptors.response.use(
    (response) => {
      const app = useAppStore()
      app.setLoad(false)
      return response
    },
    (error) => {
      const app = useAppStore()
      app.setLoad(false)
      return Promise.reject(error)
    },
  )
}
