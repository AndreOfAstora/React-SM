import { connect } from "react-redux";
import { follow, 
        getUsersThunkAC, 
        setCurrentPage, 
        setIsLoading, 
        setTotalUsersNumber, 
        setUsers, 
        unfollow } from "../../actions/usersActions";

import UsersAPIComponent from "./UsersAPIComponent";





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
    
        follow,
        unfollow,

        setTotalUsersNumber,
        setCurrentPage,
        
        getUsersThunkAC
    })(UsersAPIComponent);

export default UsersContainer;