import axios from 'axios'
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
    console.log('params: ' + params.betDate)
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Cache-Control': 'no-cache',
            'Accept': '*/*'
        }
    }
    axios({
        url: `${BASE_URL}/addBet`,
        method: 'post',
        data: { hello: 'world'},
        options: options
        })
        .then(resp => {
            console.log('ok')
        })
        .catch(error => {
            console.log(error)
        })

    return {
        type: 'TEMP'
    }
}