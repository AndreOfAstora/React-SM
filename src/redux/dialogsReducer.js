const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const dialogsReducer = (state, action) =>{ 
    switch (action.type) {
        case SEND_MESSAGE:
            let messageId = state.messageData.lenght + 1;
            let newMessage = {
                id: messageId,
                message: state.newMessageBody
            };
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage;
            return state;
        default:
            return state;

    }   
        
}

export default dialogsReducer;

  
