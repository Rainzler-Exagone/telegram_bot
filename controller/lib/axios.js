const axios = require('axios')


const MY_TOKEN = '6454793838:AAHm0Phn8A9LNE9vNoHbQ1Sdv103-0777SA'

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`

function getAxiosInstance() {
    return {
            get(methode,params){
               return axios.get(`/${methode}`,{
                baseURL : BASE_URL,
                params,
               })
            },
            post(methode,data){
                return axios.post({
                    methode:"post",
                    baseURL:BASE_URL,
                    url:`/${method}`,
                    data
                }
                )
            }
    }
}

module.exports = {axiosInstance : getAxiosInstance()}