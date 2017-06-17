import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:8080/' : 'http://quantblitz.com/'

const axiosConfig = {
  baseURL,
  withCredentials: true
}
