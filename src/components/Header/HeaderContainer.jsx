import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setData } from "../../redux/authReducer";
import Header from "./Header";

// TODO:

// 1) Move common constants into a separate file, in this case -- API string.

const API = 'https://social-network.samuraijs.com/api/1.0';




class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get(API+'/auth/me', { withCredentials: true })
            .then(response => {
                debugger;
                this.props.setData(response.data.data)
            })
    }

    render(){
        return(
            <Header 
                id = {this.props.id} 
                login = {this.props.login}
                email = {this.props.email}/>
        )
    }
}



const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
})

const mapDispatchTOProps = (dispatch) => ({
    setData: (data) => dispatch(setData(data))
})


export default connect(mapStateToProps, mapDispatchTOProps)(HeaderContainer);

