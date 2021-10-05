import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setIsLoadingAC, setIsLoadingFalse, setIsLoadingTrue, setTotalUsersNumberAC, setUsersAC, unfollowAC } from "../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";


// TODO: 

// 1) Remove unnecessary imports


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
  }

}


let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followAC(userId)),
    unfollowUser: (userId) => dispatch(unfollowAC(userId)),

    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersNumber: (totalUsersNumber) => dispatch(setTotalUsersNumberAC(totalUsersNumber)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    
    setIsLoading: (isLoading) => dispatch( setIsLoadingAC(isLoading) )
  }

}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;