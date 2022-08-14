const axios = require('axios');
const http = axios.create({
    baseURL: "https://webapi.xianniu.com",
    //withCredentials: true,
    timeout: 5000
})

function login(data) {
    return http({
        url: '/api/auth/login',
        method: 'post',
        data
    })
}

function suspend(data) {
    return http({
        url: '/api/member/suspend',
        method: 'post',
        data
    })
}

module.exports = {login, suspend}