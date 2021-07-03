import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import StoreContext from '../storeContext';
import Dialogs from './Dialogs';


function DialogsContainer (props) {

  

  return (
    <StoreContext.Consumer>{
      (store)=>{
        let state = store.getState().dialogsPage;  

        let send = () => {
          store.dispatch(sendMessageCreator());      
        }
      
        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageBodyCreator(text));
        }        
        return(
          <Dialogs  messageData = {state.messageData}
                    dialogsData = {state.dialogsData}
                    newMessageBody = {state.newMessageBody}
                    sendMessage = {send}
                    updateNewMessageBody = {onMessageChange}/>
        )
      }
    }</StoreContext.Consumer>);
}

export default DialogsContainer;