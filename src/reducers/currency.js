import {
  LOAD_SYMBOLS,
  CHANGE_TARGET_CURRENCY,
  CHANGE_AMOUNT,
  SAVE_CURRENT_RATE,
  CONVERT,
  SAVE_HISTORICAL_DATA
} from '../constants';

const initState = {
  symbols: [],
  baseCurrency: 'EUR',
  targetCurrency: 'USD',
  amount: 1,
  currentRate: '',
  convertedValue: '',
  historicalData: []
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
        amount: action.amount,
        convertedValue: ''
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
    case SAVE_HISTORICAL_DATA:
      return {
        ...state,
        historicalData: action.historicalData
      };
    default:
      return state;
  }
};

export default currency;
