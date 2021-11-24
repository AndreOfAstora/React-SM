
import axios from "axios";
import { baseURL } from "../utils/apiURL";
import { API_KEY } from "../utils/constantsAuth";


// TODO:

// 1) upgrade remaining HTTP request  code to axios instance calls in this file.

const usersInst = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

const profileInst = axios.create({
    baseURL: baseURL
})

const followInst = axios.create({
    baseURL: baseURL,
    withCredentials: true,    
    headers: {
        'API-KEY': API_KEY
    }
})


export const profileAPI = {
  getProfileInfo(id){
    return profileInst.get('/profile/' + id)
      .then(response => response.data); 
  }
}

export const usersAPI = {
    getUsers(pageIndex = 1, pageSize = 5){
        return usersInst.get( 
            '/users?page='+parseInt(pageIndex)+'&count='+parseInt(pageSize),        
        ).then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return followInst.post(
            '/follow/'+id,
            {}            
        ).then(response => response.data)
    },

    unfollow(id) {
        return followInst.delete(
            '/follow/'+id 
        ).then(response => response.data)
    }
}

