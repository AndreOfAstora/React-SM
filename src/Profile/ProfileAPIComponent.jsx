import axios from 'axios';
import React from 'react';
import Profile from './Profile';

window.response = {};

class ProfileAPIComponent extends React.Component {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => { window.response = {...response};
        });        
    }


    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}




export default ProfileAPIComponent;