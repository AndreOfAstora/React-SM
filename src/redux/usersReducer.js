const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
    users:[
        // { id: 1, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //    fullName: 'Dmitry',  followed: false, status:'UI-UX designer looking for job.',     location: {country:'Belarus',city:'Minsk'} },
        // { id: 2, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //   fullName: 'Nikolas', followed: true,  status:'Digital minimalist nomad.', location: {country:'Ukraine',city:'Kiev'} },
        // { id: 3, photoUrl: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
        //   fullName: 'Victor',  followed: false, status:'28lvl CNC machinist.', location: {country:'Russia',city:'Rostov'} }
    ]
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
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
    
} 

export const followAC = (userId) => {
    return({ type: FOLLOW, userId});
}

export const unfollowAC = (userId) => {
    return({ type: UNFOLLOW, userId });
}
export const setUsersAC = (users) =>({type:SET_USERS, users})


export default usersReducer;
