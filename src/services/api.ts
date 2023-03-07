import axios, { Axios } from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 60000,
})

export default api