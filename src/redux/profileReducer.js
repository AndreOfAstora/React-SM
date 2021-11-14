const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

let initialState = {
  postData: [
    { link: "https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png", text: "Traversing software documentation is hard, use copybook and mind maps to make it easy.", color: '#308816' },
    { link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png', text: "Here's how simple rest and frequent breaks have an NZT effect on human brain.", color: 'red' }
  ],
  newPostText: '',

  profileInfo: null
}



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

        case SET_PROFILE_INFO: {
            return {
                ...state,
                profileInfo: {...action.profileInfo}
            }
        }

        default:
            return state;
    }
    
} 


export const addPostActionCreator = () => ( { type: ADD_POST } );

export const updateNewPostTextActionCreator = (text) => 
        ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export const setProfileInfo = (profileInfo) => ( { type: SET_PROFILE_INFO, profileInfo } );


export default profileReducer;
