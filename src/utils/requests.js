export const getSymbols = () =>
  fetch(
    'http://data.fixer.io/api/symbols?access_key=dd172c8fd7d17ffbe9bbc7b890ea5fc0'
  )
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));

export const getRate = targetCurrency =>
  console.log(targetCurrency) ||
  fetch(
    `http://data.fixer.io/api/latest?access_key=dd172c8fd7d17ffbe9bbc7b890ea5fc0&symbols=${targetCurrency}`
  )
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
