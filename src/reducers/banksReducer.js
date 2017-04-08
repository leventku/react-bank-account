const initialState = {
  all: [
    {id: 0, name: 'barclays'},
    {id: 1, name: 'natwest'},
    {id: 2, name: 'loyds'},
    {id: 3, name: 'TSB'},
    {id: 4, name: 'Santender'}
  ],
  active: null,
  confirmed: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BANK_ACTIVATED':
      return { ...state, active: action.payload }
    case 'BANK_CONFIRMED':
      return { ...state, confirmed: action.payload }

    default:
      return state;
  }
}