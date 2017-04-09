const initialState = {
  started: false,
  selectedBank: null,
  authenticated: false,
  statement: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BANK_SELECTED': 
      return { ...state, selectedBank: action.payload }
    case 'USER_STARTED':
      return { ...state, started: action.payload }
    default:
      return state;
  }
}