let initialState = {

    friendsData: [
        { name: 'Andrew' },
        { name: 'Alexander' },
        { name: 'Dimon' },
        { name: 'Kondratij' }
    ]
};

const navReducer = (state = initialState, action) =>{ 
    switch (action.type) {
        
        default:
            return state;

    }   
        
}

export default navReducer;

  
