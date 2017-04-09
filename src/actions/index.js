import * as types from './actionTypes';

export const userStart = () => {
  return {
    type: types.USER_STARTED,
    payload: true
  }
}

export const fetchBanks = () => {
  return {
    type: types.BANKS_FETCHED,
    payload: [
      { id: 0, name: 'barclays' },
      { id: 1, name: 'natwest' },
      { id: 2, name: 'loyds' },
      { id: 3, name: 'HSBC' },
      { id: 4, name: 'TSB' },
      { id: 5, name: 'Santender' }
    ]
  }
}

export const confirmBank = () => {
  return {
    type: types.BANK_CONFIRMED
  }
}

export const activateBank = (bankId) => {
  return {
    type: types.BANK_ACTIVATED,
    payload: bankId
  }
}