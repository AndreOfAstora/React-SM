import { connect } from "react-redux";
import { disable, enable, follow, setCurrentPage, setIsLoading, setTotalUsersNumber, setUsers, unfollow } from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";





let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,

    isDisabled: state.usersPage.isDisabled,
    disabled: state.usersPage.disabled
  }

}



const UsersContainer = connect(mapStateToProps, {
    
        follow,
        unfollow,

        setUsers,
        setTotalUsersNumber,
        setCurrentPage,
        
        setIsLoading,

        disable,
        enable
    })(UsersAPIComponent);

export default UsersContainer;