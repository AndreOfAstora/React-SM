import React from "react";

import Item from "./Item/UsersItem";
import PageIndicatorsList from "./PageIndicatorsList/PageIndicatorsList";
import styles from './Users.module.scss';

// TODO:

// 2) Оюъеденить вывод пользователей в UsersList.jsx.
// 3) Do something with overwhelming number of props




const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersNumber/props.pageSize);   
    

    return(
        <div className = { styles.container }>
            
            <div className = { styles.page_indicators }>
                <PageIndicatorsList 
                    openPage = { props.openPage }
                    pagesCount = { pagesCount }
                    currentPage = { props.currentPage }
                />                
            </div>

            {props.users.map((u) =>

                <Item 
                    key = { u.id }
                    id={ u.id }
                    name={ u.name }  
                    photos={ u.photos }
                    location={ "u.location" }
                    status={ u.status }
                    
                    followed={ u.followed }

                    follow={ props.follow }
                    unfollow={ props.unfollow }
                                  
                />)}
        </div>
    )
}

export default Users;