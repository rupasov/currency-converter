import {
  LOAD_SYMBOLS,
  CHANGE_TARGET_CURRENCY,
  CHANGE_AMOUNT,
  SAVE_CURRENT_RATE,
  CONVERT
} from '../constants';

const initState = {
  symbols: [],
  baseCurrency: 'EUR',
  targetCurrency: 'USD',
  amount: 1,
  currentRate: '',
  convertedValue: ''
};

const currency = (state = initState, action) => {
  switch (action.type) {
    case LOAD_SYMBOLS:
      return {
        ...state,
        symbols: action.symbols
      };
    case CHANGE_TARGET_CURRENCY:
      return {
        ...state,
        targetCurrency: action.targetCurrency
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };
    case SAVE_CURRENT_RATE:
      return {
        ...state,
        currentRate: action.currentRate
      };
    case CONVERT:
      return {
        ...state,
        convertedValue: state.currentRate * state.amount
      };
    default:
      return state;
  }
};

export default currency;
