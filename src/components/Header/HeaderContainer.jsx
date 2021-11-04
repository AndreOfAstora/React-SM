import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setData } from "../../redux/authReducer";
import { API } from "../../utils/apiURL";
import Header from "./Header";

// TODO:



// 2) Switch to action creator object instead of mdtp function

// 3) Add a preloader?

// 4) Nest insides of Header.jsx here? Do i need it? Why? -- to have less props per componnent

// 5) Fetch authed user profile info and put it into header. Fetching probably should occure inside then section of componentDidMount sideeffect promise. (see CDM() method for details)





class HeaderContainer extends React.Component {

    componentDidMount(){
        axios.get(
                API+'/auth/me', 
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.resultCode === 0)
                    this.props.setData(response.data.data)                // TODO sec 5)
            })
    }

    render(){
        return(
            <Header 
                id = {this.props.id} 
                login = {this.props.login}
                email = {this.props.email}
                isLoggedIn = {this.props.isLoggedIn}/>
        )
    }
}



const mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isLoggedIn: state.auth.isLoggedIn
})

const mapDispatchTOProps = (dispatch) => ({
    setData: (data) => dispatch(setData(data))
})


export default connect(mapStateToProps, mapDispatchTOProps)(HeaderContainer);

