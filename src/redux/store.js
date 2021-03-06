import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let placeHolders = {
  newPostText:'text'
};

let store = {
  
  _state: {

    profilePage: {
      postData: [
        { link: "https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png", text: "Traversing software documentation is hard, use copybook and mind maps to make it easy.", color: '#308816' },
        { link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png', text: "Here's how simple rest and frequent breaks have an NZT effect on human brain.", color: 'red' }
      ],
      newPostText: ''
    },

    dialogsPage: {
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
    },

    sideNav: {

      friendsData: [
        { name: 'Andrew' },
        { name: 'Alexander' },
        { name: 'Dimon' },
        { name: 'Kondratij' }
      ]
    }

  },

  _rerenderEntireTree() {
    alert('should be renering');
  },

  getState(){
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);  

    this._rerenderEntireTree(this._state);

  }

}

export default store;