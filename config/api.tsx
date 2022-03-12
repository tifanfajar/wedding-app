const axios = require('axios');

const base = 'http://localhost:10000'
const golangWedding = base + '/g/w/'

const get = (url:any, param: any) => { return axios.get(golangWedding + url + param) }

const postJson = (url: any, param: any, body: any) => {
   return axios.post(url + param, body)
}

export {get, postJson, golangWedding}