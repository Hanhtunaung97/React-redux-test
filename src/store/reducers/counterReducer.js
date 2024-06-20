const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (state = state + action.payload);
      }
      return (state = state + 1);
    }
    case "decrease": {
      if (state > 0 && action.payload) {
        return (state = state - action.payload);
      } else if (state > 0) {
        return (state = state - 1);
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
