import { LOAD_SYMBOLS } from '../constants';

const initState = {
  symbols: []
};

const currency = (state = initState, action) => {
  switch (action.type) {
    case LOAD_SYMBOLS:
      return {
        ...state,
        symbols: action.symbols
      };
    default:
      return state;
  }
};

export default currency;
