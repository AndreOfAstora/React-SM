const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
  dialogsData: [
    { id: 1, name: 'Dimon' },
    { id: 2, name: 'Sveta' },
    { id: 3, name: 'Jura' },
    { id: 4, name: 'Kostya' },
    { id: 5, name: 'Nastya' },
    { id: 6, name: 'Vasya' }
  ],
  messageData: [
    { id: 1, message: "Hola, what's new?" },
    { id: 2, message: "Hello, friend, i'v got a new family member, so to speak." },
    { id: 3, message: "Really? How did you call a baby? Is it a boy?" },
    { id: 4, message: "Well, it's not a baby, i've got a pet, an exotic one." },
    { id: 5, message: "Awesome, exotic? Tell me more." },
    { id: 6, message: "Male caracal kitten, we called him Floppa, he's bussy trashing my room right now i need to intervene." }
  ],
  newMessageBody: ''
}

export const sendMessageCreator = () => ( { type: SEND_MESSAGE } );

export const updateNewMessageBodyCreator = (text) =>
        ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

const dialogsReducer = (state = initialState, action) =>{ 
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

  
