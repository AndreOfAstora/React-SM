import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setProfileInfo } from '../redux/profileReducer';
import Profile from './Profile';



class ProfileAPIComponent extends React.Component {


    componentDidMount() {   
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setProfileInfo(response.data);
        });        
    }


    render() {
        return (
            <div>
                <Profile profileInfo = { this.props.profileInfo }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ( {
    profileInfo: state.profilePage.profileInfo
} )




export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileAPIComponent);