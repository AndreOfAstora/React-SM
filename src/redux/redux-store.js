import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import navReducer from "./navReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    sideNav: navReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,  
    auth: authReducer  
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;



export default store;