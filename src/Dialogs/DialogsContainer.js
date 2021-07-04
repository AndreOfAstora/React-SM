import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';
import StoreContext from '../storeContext';
import Dialogs from './Dialogs';


// function DialogsContainer (props) {

  

//   return (
//     <StoreContext.Consumer>{
//       (store)=>{
//         let state = store.getState().dialogsPage;  

//         let send = () => {
//           store.dispatch(sendMessageCreator());      
//         }
      
//         let onMessageChange = (text) => {
//           store.dispatch(updateNewMessageBodyCreator(text));
//         }        
//         return(
//           <Dialogs  messageData = {state.messageData}
//                     dialogsData = {state.dialogsData}
//                     newMessageBody = {state.newMessageBody}
//                     sendMessage = {send}
//                     updateNewMessageBody = {onMessageChange}/>
//         )
//       }
//     }</StoreContext.Consumer>);
// }




const mapStateToProps = (state) => {
  return ({
    messageData: state.dialogsPage.messageData,
    dialogsData: state.dialogsPage.dialogsData,
    newMessageBody: state.dialogsPage.newMessageBody
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: (text) => dispatch(updateNewMessageBodyCreator(text))
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     sendMessage: () => sendMessageCreator(),
//     updateNewMessageBody: (text) => updateNewMessageBodyCreator(text)
//   })
// }



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;