import * as axios from "axios";
import React from "react";
import Item from "./Item/UsersItem";
import PageIndicator from "./PageIndicator/PageIndicator";
import styles from './Users.module.scss';



// В классе есть методы, один из которых конструктор который присваивает полям значения.

// В классовой компоненте реакта обязательным являеться только метод render(). 
const API = 'https://social-network.samuraijs.com/api/1.0';

console.log(styles);


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

   

    componentDidMount() {  //Mispronunciation of any lifecycle method name wil result in a bug
        axios.get(this.composeRequest(this.props.currentPage))
            .then(response =>{ 
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersNumber(response.data.totalCount);

            });

        window.testSetTPN = (n) => {
            this.props.setTotalPageNumber(n);
            console.log(window.store.getState().usersPage.totalPageNumber === n, ' ', n)
            return null
        }

        window.testSetPI = (n) => {
            this.props.setPageIndex(n);
            console.log(window.store.getState().usersPage.pageIndex === n, ' ', n)
            return null
        }

        // Interactions with DOM, running side effects, scheduling updates should be done here.
    }

    openPage(pageIndex) { 
        this.composeRequest(pageIndex);
        axios.get(this.composeRequest(pageIndex))
            .then(response =>{ 
                this.props.setUsers(response.data.items);
            });
        this.props.setCurrentPage(pageIndex);      
    }

    composeRequest(pageIndex){
        return(API+'/users'+'?'+'page='+parseInt(pageIndex)+'&'+'count='+parseInt(this.props.pageSize))
        
    }

    getIndicators(){
        let indicators = [];
        for (let i = 1; i<=this.props.totalPageNumber; i++){
            indicators = [
                ...indicators, 
                <PageIndicator 
                    openPage = {this.openPage.bind(this)} 
                    number = {i} 
                    active = {(i===this.props.pageIndex) ? true : false}/>
            ];
        }
        return indicators
    }
    
       
    render () {
        let pagesCount = Math.ceil(this.props.totalUsersNumber/this.props.pageSize);

        let pages = []; // And element of this array gets trapped inside a closure,
                        // it is the only reason why routing works.
                        // The first time, when closure was used intentionaly.

        for (let i = 1; i<=pagesCount; i++){
            pages.push(i);
        }

        return (
            <div className = {styles.container}> 
                <div className = {styles.page_indicators}>
                    {pages.map(p => <PageIndicator 
                        openPage = {() => this.openPage(p)} // Arrow function preserves this,
                                                            // and array element p gets trapped inside the closure,
                                                            //when props.openPage is called inside PageIndicator component. 
                        number = {p}                        
                        active = {(p === this.props.currentPage) ? true : false}/>)}
                </div>              
                
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