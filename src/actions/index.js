import {
  LOAD_SYMBOLS,
  CHANGE_TARGET_CURRENCY,
  CHANGE_AMOUNT,
  SAVE_CURRENT_RATE,
  CONVERT,
  SAVE_HISTORICAL_DATA
} from '../constants';
import { getSymbols, getRate, getHistoricalRate } from '../utils/requests';
import { getDays } from '../utils/date';
import { format } from 'date-fns';

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

export const getGraph = targetCurrency => async dispatch => {
  try {
    const historicalData = await Promise.all(
      getDays().map(day => getHistoricalRate(targetCurrency, day))
    );
    dispatch(
      saveHistoricalData(
        historicalData.map(data => ({
          x: format(new Date(data.date), 'D-MMM-YY'),
          y: data.rates[targetCurrency]
        }))
      )
    );
  } catch (e) {
    console.error(e);
  }
};

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

export const saveHistoricalData = historicalData => ({
  type: SAVE_HISTORICAL_DATA,
  historicalData
});
