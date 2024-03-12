const keys = [
  'ad-token',
  'session-token',
  'session-id'
];

function getValues() {
  const promises = keys.map(item => cookieStore.get(item));
  const values = Promise.all(promises).then((data) => {
    return data.reduce((acc, item) => {
      acc[item.name] = item.value;

      return acc;
    }, {});
  });

  return values;
}

getValues();
