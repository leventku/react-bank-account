import * as types from 'actions/actionTypes';

const initialState = {
  all: [],
  confirmed: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.BANKS_FETCHED:
      return { ...state, all: action.payload }
    case types.BANK_CONFIRMED:
      console.log(action.payload)
      return { ...state, confirmed: action.payload }

    default:
      return state;
  }
}