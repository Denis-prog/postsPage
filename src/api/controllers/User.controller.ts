import type { AxiosInstance } from 'axios'
import type { IUser } from '../models'

class UserController {
  private client: AxiosInstance = null!

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async getList(): Promise<Array<IUser>> {
    const res = await this.client.get(`/users`)
    return res.data
  }
}

export default UserController
