import {
  LOAD_SYMBOLS,
  CHANGE_TARGET_CURRENCY,
  CHANGE_AMOUNT,
  SAVE_CURRENT_RATE,
  CONVERT
} from '../constants';
import { getSymbols, getRate } from '../utils/requests';

export const fetchSymbols = () => dispatch =>
  getSymbols()
    .then(res =>
      dispatch(
        loadSymbols(
          Object.entries(res.symbols).map(([k, v]) => ({
            value: k,
            label: `${k} - ${v}`
          }))
        )
      )
    )
    .catch(e => console.log(`Something went wrong: ${e}`));

export const calcRate = targetCurrency => dispatch =>
  getRate(targetCurrency)
    .then(res => dispatch(saveCurrentRate(res.rates[targetCurrency])))
    .then(res => dispatch(convert()))
    .catch(e => console.log(`Something went wrong: ${e}`));

export const loadSymbols = symbols => ({
  type: LOAD_SYMBOLS,
  symbols
});

export const changeTargetCurrency = targetCurrency => ({
  type: CHANGE_TARGET_CURRENCY,
  targetCurrency
});

export const changeAmount = amount => ({
  type: CHANGE_AMOUNT,
  amount
});

export const saveCurrentRate = currentRate => ({
  type: SAVE_CURRENT_RATE,
  currentRate
});

export const convert = () => ({
  type: CONVERT
});
