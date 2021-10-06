import * as axios from "axios";
import React from "react";
import Users from "./Users";
import styles from './Users.module.scss';
import preloader from '../assets/Images/preloader.gif';



// TODO:
// 1) Объеденить метод composeRequest и отправку генерируемого им запроса в один метод, с возможностью забросить коллбэк, выполняемый после отправки запроса (могут понадобиться промисы). 
// 2) Создать папку commons/preloader, вынести прелоадер в отдельную компоненту, и поместить в упомянотую папку.
// 3) Разбить папку src согласно правилам, например так: https://www.taniarascia.com/react-architecture-directory-structure/ 


// В классе есть методы, один из которых конструктор который присваивает полям значения.

// В классовой компоненте реакта обязательным являеться только метод render(). 
const API = 'https://social-network.samuraijs.com/api/1.0';

console.log(styles);


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
        axios.get(
                this.composeRequest(this.props.currentPage)
            )
            .then(response =>{ 
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersNumber(response.data.totalCount);
                this.props.setIsLoading(false);

            });

        // Interactions with DOM, running side effects, scheduling updates should be done here.
    }

    openPage(pageIndex) { 
        this.props.setIsLoading(true);
        axios.get(this.composeRequest(pageIndex))
            .then(response =>{ 
                this.props.setUsers(response.data.items);
                this.props.setIsLoading(false);
            });
        this.props.setCurrentPage(pageIndex);      
    }

    composeRequest(pageIndex){
        return(API+'/users'+'?'+'page='+parseInt(pageIndex)+'&'+'count='+parseInt(this.props.pageSize))
        
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
                <div>
                    { (this.props.isLoading) ? <img src = {preloader}/> : null }

                    {/* <button onClick={this.toggleIsLoading}>value= 'toggle'</button> */}
                </div>
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