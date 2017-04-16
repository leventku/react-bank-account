import * as types from '../actions/actionTypes'

const initialState = {
  started: false,
  authenticated: false,
  statement: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_STARTED:
      return { ...state, started: action.payload }
    default:
      return state;
  }
}