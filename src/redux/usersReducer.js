import { DISABLE,
        ENABLE, 
        FOLLOW, 
        SET_CURRENT_PAGE, 
        SET_IS_LOADING, 
        SET_TOTAL_USERS_NUMBER, 
        SET_USERS, 
        UNFOLLOW } from "../actions/actionTypes";




let initialState = {
    users:[
        // { id: 1, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //    fullName: 'Dmitry',  followed: false, status:'UI-UX designer looking for job.',     location: {country:'Belarus',city:'Minsk'} },
        // { id: 2, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //   fullName: 'Nikolas', followed: true,  status:'Digital minimalist nomad.', location: {country:'Ukraine',city:'Kiev'} },
        // { id: 3, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //   fullName: 'Victor',  followed: false, status:'28lvl CNC machinist.', location: {country:'Russia',city:'Rostov'} }
    ],
    pageSize: 5,
    totalUsersNumber: 50,
    currentPage: 1,
    isLoading: false,

    isDisabled: false,
    disabled: []
}



const usersReducer = (state = initialState, action) =>{

    // To work properly with connect() state should remain immutable   

    switch (action.type) {
        case FOLLOW:{
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id===action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }         
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id===action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case DISABLE: {
            return {
                ...state,
                isDisabled: true,
                disabled: [...state.disabled, action.id]
            }
        }
        case ENABLE: {            
            let index = [...state.disabled].indexOf(action.id);
            return {
                ...state,
                isDisabled: false,
                disabled: [...state.disabled].splice(index+1, 1)
            }
        }


        case SET_USERS: {
            // return {
            //     ...state,
            //     users: [...state.users, ...action.users]
            // }
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_TOTAL_USERS_NUMBER: {
            return {
                ...state,
                totalUsersNumber: action.totalUsersNumber
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }



        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        
        default:
            return state;
    }
    
} 

export default usersReducer;


