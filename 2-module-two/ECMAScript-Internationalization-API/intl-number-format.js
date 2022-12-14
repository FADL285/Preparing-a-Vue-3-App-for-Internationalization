console.log(
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    123456.789
  )
);

console.log(
  Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    123456.789
  )
);

console.log(Intl.NumberFormat('en', { style: 'percent' }).format(123456.789));

console.log(
  Intl.NumberFormat('fr', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'name'
  }).format(25999.99)
);

console.log(
  Intl.NumberFormat('eg', {
    style: 'currency',
    currency: 'EGP',
    currencyDisplay: 'symbol'
  }).format(123459.99)
);

console.log(
  Intl.NumberFormat('eg', {
    style: 'currency',
    currency: 'EGP'
  }).formatToParts(99.99)
);

console.log(
  Intl.NumberFormat('eg', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  }).formatToParts(123459.99)
);

// -------------
