import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getProfileInfoThunkAC } from '../../actions/profileActions';
import Profile from './Profile';



class ProfileAPIComponent extends React.Component {


  componentDidMount() {

    let userId = this.props.match.params.userId;
    
    if (!userId) {
      userId = 2;
    }

    this.props.getProfileInfoThunkAC(userId);
  }


  render() {
    return (
      <Profile profileInfo = { this.props.profileInfo }/>            
    )
  }
}

const mapStateToProps = (state) => ( {
  profileInfo: state.profilePage.profileInfo
} )


let ProfileAPIComponentWRouter = withRouter(ProfileAPIComponent);


export default connect(mapStateToProps, {
  getProfileInfoThunkAC
})(ProfileAPIComponentWRouter);