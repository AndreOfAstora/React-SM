import React from "react";
import Users from "./Users";
import styles from './Users.module.scss';
import Preloader from "../commons/Preloader/Preloader";

import { getUsers } from "../../api/api.js";



// TODO:
// 1) Объеденить метод composeRequest и отправку генерируемого им запроса в один метод, с возможностью забросить коллбэк, выполняемый после отправки запроса (могут понадобиться промисы).
// 3) Разбить папку src согласно правилам, например так: https://www.taniarascia.com/react-architecture-directory-structure/ 


// В классе есть методы, один из которых конструктор который присваивает полям значения.

// В классовой компоненте реакта обязательным являеться только метод render(). 



class UsersAPIComponent extends React.Component {
    
    //  Так выглядит конструктор по умолчанию(можно было и не писать его, просто чтоб знать, что он бывает)
    constructor(props) {
        super(props); // Пропсы доступны в конструкторе

        this.openPage = this.openPage.bind(this); // binding in constructor is superrior to arrow methods
                                                  // this should remain the same even if you pass this thing in via arrow function

                      // Во всех остальных местах компоненты
                      // к пропсам нужно обращятся на this.props,
                      // так как пропсы -- часть объекта генерируемого классом. 
    }

    // The Chad way of dealing with side effects
    // Fetch users after component mounts.
    // HTTP request is a side effect.

   

    componentDidMount() {  //Mispronunciation of any lifecycle method name wil result in a bug
        this.props.setIsLoading(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(userData =>{ 
                this.props.setUsers(userData.items);
                this.props.setTotalUsersNumber(userData.totalCount);
                this.props.setIsLoading(false);

            });

        // Interactions with DOM, running side effects, scheduling updates should be done here.
    }

    openPage(pageIndex) { 
        this.props.setIsLoading(true);
        getUsers(pageIndex, this.props.pageSize)
            .then(userData =>{ 
                this.props.setUsers(userData.items);
                this.props.setIsLoading(false);
            });
        this.props.setCurrentPage(pageIndex);      
    }

    

    toggleIsLoading = () => {
        // if  isloading  fallse, set isloading true
        // else if isloading true, set isloading fallse
    
        if (this.props.isLoading === true) {
            this.props.setIsLoading(false);
        } else if (this.props.isLoading === false) {
            this.props.setIsLoading(true);
        }
    }

    render () {
        
        return (
            <div className = {styles.container}>
                
                <Preloader isLoading = { this.props.isLoading }/>
                
                <Users  openPage = { this.openPage }

                        totalUsersNumber = {this.props.totalUsersNumber}
                        pageSize = {this.props.pageSize}
                        currentPage = {this.props.currentPage}
                        
                        users = {this.props.users}

                        follow = {this.props.follow}
                        unfollow = {this.props.unfollow}
                /> 

                
            </div>
        )
    }
    
}

export default UsersAPIComponent;