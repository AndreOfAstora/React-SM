import { connect } from "react-redux";
import {followThunkAC, 
        getUsersThunkAC, 
        setCurrentPage,        
        setTotalUsersNumber,        
        unfollowThunkAC} from "../../actions/usersActions";
import Users from "./Users";


// TODO

// 1) Get rid of this component somehow, and abolish connect in general.





let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  }

}


const UsersContainer = connect(mapStateToProps, {
    
    followThunkAC,
    unfollowThunkAC,

    setTotalUsersNumber,
    setCurrentPage,
    
    getUsersThunkAC
})(Users);

export default UsersContainer;