import * as axios from "axios";
import React from "react";
import Item from "./Item/UsersItem";



// В классе есть методы, один из которых конструктор который присваивает полям значения.

// В классовой компоненте реакта обязательным являеться только метод render(). 


class Users extends React.Component {
    
    //  Так выглядит конструктор по умолчанию(можно было и не писать его, просто чтоб знать, что он бывает)
    constructor(props) {
        super(props); // Пропсы доступны в конструкторе

                      // Во всех остальных местах компоненты
                      // к пропсам нужно обращятся на this.props,
                      // так как пропсы -- часть объекта генерируемого классом. 
    }

    // The Chad way of dealing with side effects
    // Fetch users after component mounts.
    // HTTP request is a side effect.

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => this.props.setUsers(response.data.items));

        // Interactions with DOM, running side effects, scheduling updates should be done here.
    }

    
       
    render () {
        return (
            <div >               
                {this.props.users.map((u) =>       

                    <Item   id = {u.id}
                            name = {u.name}  // Если свойство в API называеться по другому,
                                             // либо меняем имя на фронте, либо делаем Data Access Layer (не сейчас)
                                             // Если свойства в АПИ нет, просим бэкэндщиков добавить, удаляем его или как-то помечаем (например берем все его вызовы в кавычки), чтоб исправить потом 
                            followed = {u.followed}
                            location = {"u.location"} 
                            status = {u.status}
                            followUser = {this.props.followUser}
                            unfollowUser = {this.props.unfollowUser}
                            photos = {u.photos}     
                />)}
            </div>
        )
    }
    
}

export default Users;