console.log(new Intl.PluralRules('ar-EG').select(0));
// → 'zero'
console.log(new Intl.PluralRules('ar-EG').select(1));
// → 'one'
console.log(new Intl.PluralRules('ar-EG').select(2));
// → 'two'
console.log(new Intl.PluralRules('ar-EG').select(6));
console.log(new Intl.PluralRules('ar-EG').select(9));
// → 'few'
console.log(new Intl.PluralRules('ar-EG').select(18));
// → 'many'
