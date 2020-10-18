import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`{BASE_URL}/getBets`)
    return {
        type: 'REGISTRO_APOSTA_FETCHED',
        payload: request
    }
}