import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setProfileInfo } from '../../redux/profileReducer';
import Profile from './Profile';



class ProfileAPIComponent extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;
        
        if (!userId) {
            userId = 2;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
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


let ProfileAPIComponentWRouter = withRouter(ProfileAPIComponent);


export default connect(mapStateToProps, {
    setProfileInfo
})(ProfileAPIComponentWRouter);