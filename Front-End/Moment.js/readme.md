# Moment.js  


http://momentjs.com/docs/

Moment was designed to work both in the browser and in Node.js.


Moment.js 2.17.1

Parse, validate, manipulate, and display dates in JavaScript.


$ npm install moment --save   # npm


http://momentjs.com/downloads/moment.js

http://momentjs.com/downloads/moment-with-locales.js




## Format Dates

moment().format('MMMM Do YYYY, h:mm:ss a'); // February 5th 2017, 7:25:17 pm
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Feb 5th 17
moment().format('YYYY [escaped] YYYY');     // 2017 escaped 2017
moment().format();                          // 2017-02-05T19:25:17+08:00

## Relative Time

moment("20111031", "YYYYMMDD").fromNow(); // 5 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 5 years ago
moment().startOf('day').fromNow();        // 19 hours ago
moment().endOf('day').fromNow();          // in 5 hours
moment().startOf('hour').fromNow();       // 25 minutes ago

## Calendar Time

moment().subtract(10, 'days').calendar(); // 01/26/2017
moment().subtract(6, 'days').calendar();  // Last Monday at 7:25 PM
moment().subtract(3, 'days').calendar();  // Last Thursday at 7:25 PM
moment().subtract(1, 'days').calendar();  // Yesterday at 7:25 PM
moment().calendar();                      // Today at 7:25 PM
moment().add(1, 'days').calendar();       // Tomorrow at 7:25 PM
moment().add(3, 'days').calendar();       // Wednesday at 7:25 PM
moment().add(10, 'days').calendar();      // 02/15/2017

## Multiple Locale Support

moment.locale();         // en
moment().format('LT');   // 7:25 PM
moment().format('LTS');  // 7:25:17 PM
moment().format('L');    // 02/05/2017
moment().format('l');    // 2/5/2017
moment().format('LL');   // February 5, 2017
moment().format('ll');   // Feb 5, 2017
moment().format('LLL');  // February 5, 2017 7:25 PM
moment().format('lll');  // Feb 5, 2017 7:25 PM
moment().format('LLLL'); // Sunday, February 5, 2017 7:25 PM
moment().format('llll'); // Sun, Feb 5, 2017 7:25 PM


*******************************************************************************
# timezone


http://momentjs.com/timezone/


https://github.com/moment/moment-timezone/


Timezone support for moment.js 

Parse and display dates in any timezone.


$ npm install moment-timezone --save



http://momentjs.com/downloads/moment-timezone.js

http://momentjs.com/downloads/moment-timezone-with-data-2010-2020.js

http://momentjs.com/downloads/moment-timezone-with-data.js





## Format Dates in Any Timezone

var jun = moment("2014-06-01T12:00:00Z");
var dec = moment("2014-12-01T12:00:00Z");

jun.tz('America/Los_Angeles').format('ha z');  // 5am PDT
dec.tz('America/Los_Angeles').format('ha z');  // 4am PST

jun.tz('America/New_York').format('ha z');     // 8am EDT
dec.tz('America/New_York').format('ha z');     // 7am EST

jun.tz('Asia/Tokyo').format('ha z');           // 9pm JST
dec.tz('Asia/Tokyo').format('ha z');           // 9pm JST

jun.tz('Australia/Sydney').format('ha z');     // 10pm EST
dec.tz('Australia/Sydney').format('ha z');     // 11pm EST

## Convert Dates Between Timezones

var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");

newYork.format();    // 2014-06-01T12:00:00-04:00
losAngeles.format(); // 2014-06-01T09:00:00-07:00
london.format();     // 2014-06-01T17:00:00+01:00











*******************************************************************************





