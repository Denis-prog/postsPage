import type { AxiosInstance } from 'axios'
import PostController from './Post.controller'
import UserController from './User.controller'

class Controllers {
  /** API client instance */
  client: AxiosInstance = null!
  Post: PostController
  User: UserController

  constructor(client: AxiosInstance) {
    this.client = client
    this.Post = new PostController(this.client)
    this.User = new UserController(this.client)
  }
}

export default Controllers
