const formReducer = (state = {}, action) => {
    // captures input data and holds in redux state
    console.log("state", state);
    if (action.type === "SELF_GOAL") {
        return{ ...state, selfgoal: action.payload}
    } else if (action.type === "CONNECTION_NAME"){
        return{ ...state, connectionname: action.payload}
    } else if (action.type === "CONNECTION_PHONE_NUMBER"){
        return{ ...state, connectionphonenumber: action.payload}
    } else if (action.type === "SOBRIETY_START_DATE"){
        return{ ...state, sobrietystartdate: action.payload}
    } else if (action.type === "MONEY_SAVED"){
        return{ ...state, moneysaved: action.payload}
    } else if (action.type === "TIME_SAVED"){
        return{ ...state, timesaved: action.payload}
    } else if (action.type === "CLEAR_FORM"){
        return {};
    }
    return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default formReducer;