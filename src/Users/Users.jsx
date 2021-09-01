import * as axios from "axios";
import React from "react";
import Item from "./Item/UsersItem";



// В классе есть методы, один из которых конструктор который присваивает полям значения.

// В классовой компоненте реакта обязательным являеться только метод render(). 


class Users extends React.Component {
    
    // Cosmetic removal of side effect
    constructor(props) {
        super(props);
        // Fetch users and add them to state. HTTP request is a side effect.
        this.confirmLoad = window.confirm("Load users via constructor ")
        if (this.confirmLoad){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items)); //Пропсы доступны в конструкторе
        }

    }
    getUsers = () => {
        if (this.props.users.length === 0){  //Fetch users and add them to state. HTTP request is a side effect.
        
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items));  // Пропсы теперь чать объекта, 
                                                                          // генерируемого классом
            // props.setUsers(users);
        }
    }
       
    render () {
        return (
            <div >
                {(this.confirmLoad) // Если юзеры загрузились в конструкторе, кнопку не показывать
                    ? null 
                    : <button onClick = {this.getUsers}>Get Users</button>} {/* getUsers теперь метод, часть объекта */}
                {this.props.users.map((u) =>       // Пропсы теперь чаcть объекта, 
                                                   // генерируемого классом
                    <Item   id = {u.id}
                            name = {u.name}        // Было fullName на фронте, в API это поле зоветься name
                                                   // либо меняем имя на фронте, либо делаем Data Access Layer
                            followed = {u.followed}
                            location = {"u.location"} // В API поля location нет, зовем воображаемых бэкендщиков 
                                                      // чтоб добавили, удаляем или все обращения берем в кавычки
                                                      // чтоб потом с ними разобраться
                            status = {u.status}
                            followUser = {this.props.followUser}
                            unfollowUser = {this.props.unfollowUser}
                            photos = {u.photos}     // photoUrl в API называется photos
                />)}
            </div>
        )
    }
    
}

export default Users;