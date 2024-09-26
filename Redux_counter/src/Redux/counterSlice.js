// Actions
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// Action Creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Initial State
const initialState = {
  value: 0,
};

// Reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};