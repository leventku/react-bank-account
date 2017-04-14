import * as types from './actionTypes';
import logoBarclays from '../../Assets/Barclays.png';
import logoNatwest from '../../Assets/LogoNatwest.png';
import logoLloyds from '../../Assets/LogoLloyds.png';
import logoHSBC from '../../Assets/LogoHSBC.png';
import logoTSB from '../../Assets/LogoTSB.png';
import logoSantander from '../../Assets/LogoSantander.png';

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
      { id: 0, name: 'barclays', logo: logoBarclays, orient: 'h' },
      { id: 1, name: 'natwest', logo: logoNatwest, orient: 'h' },
      { id: 2, name: 'loyds', logo: logoLloyds, orient: 'v' },
      { id: 3, name: 'HSBC', logo: logoHSBC, orient: 'v' },
      { id: 4, name: 'TSB', logo: logoTSB, orient: 'v' },
      { id: 5, name: 'Santender', logo: logoSantander, orient: 'h' }
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