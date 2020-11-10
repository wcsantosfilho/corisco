import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/getBets`)
    return {
        type: 'REGISTRO_APOSTA_FETCHED',
        payload: request
    }
}

export function create(values) {
    var params = JSON.parse(JSON.stringify(values))
    axios.post(`${BASE_URL}/addBet`, params)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!')
        })
        .catch(e => {
            if (e.response) {
                const errorMessage = e.response.data.message
                toastr.error('Erro', errorMessage )
            }
        })
    return {
        type: 'TEMP'
    }
}