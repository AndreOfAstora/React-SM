import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersNumberAC, setUsersAC, unfollowAC } from "../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followAC(userId)),
    unfollowUser: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersNumber: (totalUsersNumber) => dispatch(setTotalUsersNumberAC(totalUsersNumber)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage))

    
  }

}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;