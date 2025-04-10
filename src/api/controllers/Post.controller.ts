import type { AxiosInstance } from 'axios'
import type { IPost } from '../models'

class PostController {
  private client: AxiosInstance = null!

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async getList(): Promise<Array<IPost>> {
    const res = await this.client.get(`/posts`)

    return res.data
  }
}

export default PostController
