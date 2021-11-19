import { DISABLE,
        ENABLE, 
        FOLLOW, 
        SET_CURRENT_PAGE, 
        SET_IS_LOADING, 
        SET_TOTAL_USERS_NUMBER, 
        SET_USERS, 
        UNFOLLOW } from "../actions/actionTypes";
        
import { followAPI, usersAPI } from "../api/api";





export const getUsersThunkAC = (currentPage = 1, pageSize) => {
    return (dispatch) => {
        
        dispatch(setIsLoading(true));
        return usersAPI.getUsers(currentPage, pageSize)
            .then(data =>{ 
                dispatch(setUsers(data.items));
                dispatch(setIsLoading(false));
                return (data.totalCount)                
            });
    }
}

export const followThunkAC = (id) => (dispatch) => {    
    return followAPI.follow(id)
        .then(data => {
            if ( data.resultCode === 0 ) 
                dispatch( follow(id) );
            return data.resultCode
        })
}

export const unfollowThunkAC = (id) => (dispatch) => {    
    return followAPI.unfollow(id)
        .then(data => {
            if ( data.resultCode === 0 ) 
                dispatch( unfollow(id) );
            return data.resultCode
        })
}



export const follow = (userId) => ({ type: FOLLOW, userId})
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })



export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersNumber = (totalUsersNumber) => ({type: SET_TOTAL_USERS_NUMBER, totalUsersNumber})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})



export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading})



export const disable = (id) => ({type: DISABLE, id})
export const enable = (id) => ({type: ENABLE, id})