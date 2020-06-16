const initialState = {
  chatMessages: [],
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_RECEIVED": {
      return {
        ...state,
        users: [...action.payload]
      };
    }
    case "MESSAGES_RECEIVED": {
      return {
        ...state,
        chatMessages: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
