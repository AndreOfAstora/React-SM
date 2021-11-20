import React, { useEffect } from "react";
import Preloader from "../commons/Preloader/Preloader";
import FollowBtn from "./FolowBtn/FollowBtn";

import UserItem from "./Item/UsersItem";
import PageIndicatorsList from "./PageIndicatorsList/PageIndicatorsList";
import styles from './Users.module.scss';

// TODO:

// 2) Оюъеденить вывод пользователей в UsersList.jsx.
// 3) Do something with overwhelming number of props






const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersNumber/props.pageSize); 
    
    useEffect( () => {
        props.getUsersThunkAC(props.currentPage, props.pageSize)
        .then( usersCount => {
            props.setTotalUsersNumber(usersCount);
        });

    }, [] )

    
    const openPage = (pageIndex) => {
        props.getUsersThunkAC(pageIndex)
        .then( () => {
            props.setCurrentPage(pageIndex); 
        });
    }
    

    return(
        <div className = { styles.container }>
            <Preloader isLoading = { props.isLoading }/>
            <div className = { styles.page_indicators }>
                <PageIndicatorsList 
                    openPage = { openPage }
                    pagesCount = { pagesCount }
                    currentPage = { props.currentPage }
                />                
            </div>

            {props.users.map( (u) =>

                <UserItem 
                    key = { u.id }                    
                    user = { u }
                >
                    <FollowBtn
                        id = { u.id }
                        followed = { u.followed }
                        follow = { props.followThunkAC }
                        unfollow = { props.unfollowThunkAC }
                    />  
                </UserItem>
            ) }
        </div>
    )
}

export default Users;