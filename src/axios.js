import Axios from 'axios'
import React from 'react'
import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.jikan.moe/v3',
})
export default instance