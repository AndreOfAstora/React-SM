import React from "react";

import Item from "./Item/UsersItem";
import PageIndicatorsList from "./PageIndicatorsList/PageIndicatorsList";
import styles from './Users.module.scss';

// TODO:
// 1) Сделать вывод небольшого числа индикаторов страниц.
// 2) Оюъеденить вывод пользователей в UsersList.jsx.




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

                <Item id={u.id}
                    name={u.name}  // Если свойство в API называеться по другому,
                                    // либо меняем имя на фронте, либо делаем Data Access Layer (не сейчас)
                                    // Если свойства в АПИ нет, просим бэкэндщиков добавить, удаляем его или как-то помечаем (например берем все его вызовы в кавычки), чтоб исправить потом 
                    followed={u.followed}
                    location={"u.location"}
                    status={u.status}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    photos={u.photos}
                />)}
        </div>
    )
}

export default Users;