import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import navReducer from "./navReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    sideNav: navReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer    
});

let store = createStore(reducers);

window.store = store;



export default store;