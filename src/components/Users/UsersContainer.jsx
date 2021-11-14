import { connect } from "react-redux";
import { follow, setCurrentPage, setIsLoading, setTotalUsersNumber, setUsers, unfollow } from "../../redux/usersReducer";
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

        setUsers,
        setTotalUsersNumber,
        setCurrentPage,
        
        setIsLoading
    })(UsersAPIComponent);

export default UsersContainer;