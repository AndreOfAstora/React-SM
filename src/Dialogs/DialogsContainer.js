import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';


function DialogsContainer (props) {

  let state = props.store.getState().dialogsPage;

  

  let send = () => {
    props.store.dispatch(sendMessageCreator());

  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyCreator(text));
  }

  return (<Dialogs  messageData = {state.messageData}
                    dialogsData = {state.dialogsData}
                    newMessageBody = {state.newMessageBody}
                    sendMessage = {send}
                    updateNewMessageBody = {onMessageChange}
  />);
}

export default DialogsContainer;