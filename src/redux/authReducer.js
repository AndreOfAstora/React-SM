const SET_DATA = "SET_DATA";

let initialState = {
    id: null,
    login: null,
    email: null,
    isLoggedIn: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                ...action.data,
                isLoggedIn: true
            }
        }
        
        default:
            return state;
    }    
}

export const setData = (data) => ({
    type: SET_DATA, 
        data: {
            id: data.id, 
            login: data.login, 
            email: data.email
        }
})

export default authReducer;