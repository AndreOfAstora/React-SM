import profileReducer, { addPost, updateNewPostText } from './profileReducer.js';

// TODO:

// 1) move initialState out of it().

// 2) split tests with multiple expectationts, so they do one thing.


it('Post with text from newPostText should be added, newPostText is cleared', () => {
    // 1) initial data :
    //  - test string;
    //  - initial state;
    //  - action;
    let testString = 'Hello test';

    let initialState = {
        postData: [
          { link: "https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png", text: "Я как паравозик Томас", color: '#308816' },
          { link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png', text: "Из за леса из-за гор, показал мужик топор, и не просто показал...", color: 'red' }
        ],
        newPostText: testString       
      }

    let action = addPost();
    

    // 2) Perfoem an action: add post
    
    let newState = profileReducer(initialState, action);

    // 3) Verify expectations: 
    //  - third post to contain test string
    //  - newPostText to become empty string

    expect(newState.postData[2].text).toBe(testString);

    expect(newState.newPostText).toBe('');

});


it('Empty post should be added', () => {
    // 1) initial data
    let action = addPost();
    let intitialState = {
        postData: [
            { link: "https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png", text: "Я как паравозик Томас", color: '#308816' },
            { link: 'https://www.freeiconspng.com/uploads/gucci-logo-hd-picture-free-download-0.png', text: "Из за леса из-за гор, показал мужик топор, и не просто показал...", color: 'red' }
        ]
    };

    // 2) performing an action

    let newState = profileReducer(intitialState, action); 
    
    // 3) verify expectations

    expect(newState.postData.length).toBe(3);
});

it('newPostText should be updated', () => {
    // 1) Init. data
    let character = 'R';

    let action = updateNewPostText(character);

    let initialState = {        
        newPostText: ''
    }

    // 2) perform an action

    let newState = profileReducer(initialState, action);

    // 3) verify expectation
    expect(newState.newPostText).toBe(character);

});

