import React from 'react';
import Profile from './Profile';


class ProfileAPIComponent extends React.Component {
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

export default ProfileAPIComponent;