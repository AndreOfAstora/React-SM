import React from "react";

import Item from "./Item/UsersItem";
import PageIndicator from "./PageIndicatorsList/PageIndicator/PageIndicator";
import styles from './Users.module.scss';

// TODO:
// 1) Сделать вывод небольшого числа индикаторов страниц.
// 2) Объеденить вывод индикаторов страниц в PageIndicatorList.jsx. 
// 3) Оюъеденить вывод пользователей в UsersList.jsx.
// 4) См. строчку 33.


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersNumber/props.pageSize);

    let pages = []; // And element of this array gets trapped inside a closure,
                    // it is the only reason why routing works.
                    // The first time, when closure was used intentionaly.

    for (let i = 1; i<=pagesCount; i++){
        pages.push(i);
    }
    
    return(
        <div className={styles.container}> 
            <div className={styles.page_indicators}>
                {pages.map(p => 
                    <PageIndicator
                        openPage={props.openPage} // Arrow function preserves this, and array element p gets 
                                                  // trapped inside the closure, when props.openPage is called 
                                                  // inside PageIndicator component. 
                                                  // UPD: ignore the above, page indicator calls openPage like this: openPage(props.number), so closure is not done like it was said above.
                                                  // TODO: Investigate necessity of passing p via arrow function into openPage.
                        number={p}
                        active={(p === props.currentPage) ? true : false} />)}
            </div>

            {props.users.map((u) =>

                <Item id={u.id}
                    name={u.name}  // Если свойство в API называеться по другому,
                                    // либо меняем имя на фронте, либо делаем Data Access Layer (не сейчас)
                                    // Если свойства в АПИ нет, просим бэкэндщиков добавить, удаляем его или как-то помечаем (например берем все его вызовы в кавычки), чтоб исправить потом 
                    followed={u.followed}
                    location={"u.location"}
                    status={u.status}
                    followUser={props.followUser}
                    unfollowUser={props.unfollowUser}
                    photos={u.photos}
                />)}
        </div>
    )
}

export default Users;