const randomMeditationReducer = (state = [], action) => {
    console.log("state", state);
    console.log(action.payload);
    
    switch (action.type) {
        case 'RANDOM_MEDITATION':
            return action.payload;
        default:
            return state;
    }
  }
  
  // user will be on the redux state at:
  // state.user
  export default randomMeditationReducer;