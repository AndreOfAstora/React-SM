
import axios from "axios";
import { API } from "../utils/apiURL";

const baseURL = API;



export const getUsers = (pageIndex = 1, pageSize = 5) => {
    return axios.get( 
        baseURL+'/users?page='+parseInt(pageIndex)+'&count='+parseInt(pageSize),
        {withCredentials: true}
    ).then(response => response.data)
}

