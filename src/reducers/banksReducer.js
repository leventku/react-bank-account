import * as types from '../actions/actionTypes';

const initialState = {
  all: [],
  active: null,
  confirmed: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BANKS_FETCHED:
      return { ...state, all: action.payload }
    case types.BANK_ACTIVATED:
      return { ...state, active: action.payload }
    case types.BANK_CONFIRMED:
      return { ...state, confirmed: action.payload }

    default:
      return state;
  }
}