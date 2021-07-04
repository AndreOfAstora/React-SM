const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { link: "https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png", text: "Traversing programming documentation is hard, use copybook and mind maps to make it easy.", color: '#308816' },
    { link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png', text: "Here's how simple rest and frequent breaks have an NZT effect on human brain.", color: 'red' }
  ],
  newPostText: ''
}

export const addPostActionCreator = () => ( { type: ADD_POST } );

export const updateNewPostTextActionCreator = (text) => 
        ({ type: UPDATE_NEW_POST_TEXT, newText: text });

const profileReducer = (state = initialState, action) =>{

    // To work properly with connect() state should remain immutable   

    switch (action.type) {
        case ADD_POST:{                        
            let newPost = {
                link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png',
                text: state.newPostText,
                color: '#308816'
            };
            return {
              ...state,
              postData: [...state.postData, newPost],
              newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
              ...state,
              newPostText: action.newText
            }
        }
        default:
            return state;
    }
    
} 

export default profileReducer;