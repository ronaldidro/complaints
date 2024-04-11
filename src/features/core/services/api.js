import axios from 'axios'

const apiConfig = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const request = (options = {}) => apiConfig.request(options)
