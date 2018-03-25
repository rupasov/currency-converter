export const getCountries = () =>
  fetch(
    "http://data.fixer.io/api/symbols?access_key=dd172c8fd7d17ffbe9bbc7b890ea5fc0"
  )
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
