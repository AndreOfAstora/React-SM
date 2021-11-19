import { connect } from "react-redux";
import { follow, 
        followThunkAC, 
        getUsersThunkAC, 
        setCurrentPage, 
        setIsLoading, 
        setTotalUsersNumber, 
        setUsers, 
        unfollow, 
        unfollowThunkAC} from "../../actions/usersActions";

import UsersAPIComponent from "./UsersAPIComponent";
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
    })(UsersAPIComponent);

export default UsersContainer;