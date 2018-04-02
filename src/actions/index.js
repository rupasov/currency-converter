import { LOAD_SYMBOLS } from '../constants';
import { getSymbols } from '../utils/requests';

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

export const loadSymbols = symbols => ({
  type: LOAD_SYMBOLS,
  symbols
});
