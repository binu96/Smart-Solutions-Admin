import axios from 'axios'
import {baseUrlDev} from './profile'

export function post(url, data) {
    return axios({
        method: 'POST',
        url: `${baseUrlDev}${url}`,
        data: data,
        auth: {
            username: "admin",
            password: "admin"
        },
        headers: {
            "X-BAASBOX-APPCODE": "1234567890",
            "Content-Type": "application/json"
        },
    })
}

export function get(url) {
    return axios({
        method: 'GET',
        url: `${baseUrlDev}${url}`,
        config: {
            headers: {
                'Content-Type': 'application/json'
            },

        }
    })
}

export function put(url, data) {
    return fetch(url, {
        method: "PUT",
        body: data
    })
}

export function del(url) {
    return fetch(url, {
        method: 'DELETE',
    })
}