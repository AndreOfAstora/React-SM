
import axios from "axios";
import { baseURL } from "../utils/apiURL";
import { API_KEY } from "../utils/constantsAuth";


// TODO:

// 1) upgrade remaining HTTP request  code to axios instance calls in this file.

const usersInst = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

const followInst = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    'API-KEY': API_KEY
})




export const usersAPI = {
    getUsers(pageIndex = 1, pageSize = 5){
        return usersInst.get( 
            '/users?page='+parseInt(pageIndex)+'&count='+parseInt(pageSize),        
        ).then(response => response.data)
    }
}

