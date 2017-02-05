

//## Format Dates in Any Timezone

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

//## Convert Dates Between Timezones

var newYork    = moment.tz("2014-06-01 12:00", "America/New_York");
var losAngeles = newYork.clone().tz("America/Los_Angeles");
var london     = newYork.clone().tz("Europe/London");

newYork.format();    // 2014-06-01T12:00:00-04:00
losAngeles.format(); // 2014-06-01T09:00:00-07:00
london.format();     // 2014-06-01T17:00:00+01:00


