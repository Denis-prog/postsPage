import axios from 'axios'
import Controllers from './controllers'
import { loaderInterceptors } from './interceptors'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

loaderInterceptors(instance)

const api = new Controllers(instance)

export default api
