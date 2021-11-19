import React from "react";
import Users from "./Users";
import styles from './Users.module.scss';
import Preloader from "../commons/Preloader/Preloader";


// TODO:
// 1) Get rid of this component in favour of useEffect in Users.jsx.
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
        this.props.getUsersThunkAC(this.props.currentPage, this.props.pageSize)
        .then( usersCount => {
            this.props.setTotalUsersNumber(usersCount);
        });
        // Interactions with DOM, running side effects, scheduling updates should be done here.
    }


    openPage(pageIndex) {
        this.props.getUsersThunkAC(pageIndex, this.props.pageSize)
        .then( () => {
            this.props.setCurrentPage(pageIndex); 
        });
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

                        follow = {this.props.followThunkAC}
                        unfollow = {this.props.unfollowThunkAC}
                />
                
            </div>
        )
    }
    
}

export default UsersAPIComponent;