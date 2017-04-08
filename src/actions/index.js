export const userStart = () => {
  return {
    type: 'USER_STARTED',
    payload: true
  }
}

export const confirmBank = () => {
  return {
    type: 'BANK_CONFIRMED'
  }
}

export const activateBank = (bankId) => {
  return {
    type: 'BANK_ACTIVATED',
    payload: bankId
  }
}