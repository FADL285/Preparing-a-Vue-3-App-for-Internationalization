const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary
console.log(date);

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('en-US').format(date));
// expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat('en-EG', {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(date)
);
// Expected output "Sunday, 20 December 2020 at 14:23:16 GMT+11"

const shortTime = new Intl.DateTimeFormat('en', {
  timeStyle: 'short'
});
console.log(shortTime.format(Date.now())); // "13:31 AM"

const shortDate = new Intl.DateTimeFormat('en', {
  dateStyle: 'short'
});
console.log(shortDate.format(Date.now())); // "07/07/20"

const mediumTime = new Intl.DateTimeFormat('en', {
  timeStyle: 'medium',
  dateStyle: 'short'
});
console.log(mediumTime.format(Date.now())); // "07/07/20, 13:31:55 AM"

// // -------------// //

const newDate = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(
  new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    hourCycle: 'h12',
    dayPeriod: 'short',
    timeZone: 'UTC'
  }).format(newDate)
);
// > 4 at night"  (same formatting in en-GB for all dayPeriod values)

console.log(
  new Intl.DateTimeFormat('fr', {
    hour: 'numeric',
    hourCycle: 'h12',
    dayPeriod: 'narrow',
    timeZone: 'UTC'
  }).format(newDate)
);
// > "4 mat."  (same output in French for both narrow/short dayPeriod)

console.log(
  new Intl.DateTimeFormat('fr', {
    hour: 'numeric',
    hourCycle: 'h12',
    dayPeriod: 'long',
    timeZone: 'UTC'
  }).format(newDate)
);
// > "4 du matin"
