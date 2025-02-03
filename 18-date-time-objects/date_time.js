// Date and Time Objects in JavaScript

// 1. Creating a Date Object
// You can create a Date object using the Date() constructor in various ways.

// 1.1 Current Date and Time
// Creates a Date object representing the current date and time in the system's local timezone.
const currentDate = new Date();
console.log(currentDate); // Output: Current date and time in ISO 8601 format (e.g., "2024-02-19T10:44:09.274Z")

// 1.2 From a Date String
// Creates a Date object from a date string, which can be in ISO format (e.g., "YYYY-MM-DDTHH:mm:ss.sssZ")
// or in other common formats like "Month DD, YYYY".
const dateFromString = new Date("2024-02-19T10:44:09.274Z");
console.log(dateFromString); // Output: Date object representing the specified date and time

// 1.3 Year and Month (0-based)
// Creates a Date object with the specified year and month. Note: months are 0-based (0 = January, 11 = December).
const date1 = new Date(2025, 11); // December 2025
console.log(date1); // Output: Date object representing December 1, 2025

// 1.4 Year, Month, and Day
// Creates a Date object with the specified year, month (0-based), and day of the month.
const date2 = new Date(2024, 1, 19); // February 19, 2024 (Note: 1 is February)
console.log(date2); // Output: Date object representing February 19, 2024

// 1.5 Year, Month, Day, and Hours
// Creates a Date object with the specified year, month (0-based), day, and hours.
const date3 = new Date(2024, 1, 19, 10); // February 19, 2024, 10:00:00
console.log(date3); // Output: Date object representing February 19, 2024, 10:00:00

// 1.6 Year, Month, Day, Hours, and Minutes
// Creates a Date object with the specified year, month (0-based), day, hours, and minutes.
const date4 = new Date(2024, 1, 19, 10, 44); // February 19, 2024, 10:44:00
console.log(date4); // Output: Date object representing February 19, 2024, 10:44:00

// 1.7 Year, Month, Day, Hours, Minutes, and Seconds
// Creates a Date object with the specified year, month (0-based), day, hours, minutes, and seconds.
const date5 = new Date(2024, 1, 19, 10, 44, 9); // February 19, 2024, 10:44:09
console.log(date5); // Output: Date object representing February 19, 2024, 10:44:09

// 1.8 Year, Month, Day, Hours, Minutes, Seconds, and Milliseconds
// Creates a Date object with all the specified components, including milliseconds.
const date6 = new Date(2024, 1, 19, 10, 44, 9, 274); // February 19, 2024, 10:44:09.274
console.log(date6); // Output: Date object representing February 19, 2024, 10:44:09.274

// 1.9 From Milliseconds
// Creates a Date object from a specific timestamp given in milliseconds since the Unix epoch (January 1, 1970).
const milliseconds = 1708334649274;
const dateFromMilliseconds = new Date(milliseconds);
console.log(dateFromMilliseconds); // Output: Date object representing the specified time

// 2. Getting Date Components
// You can extract individual components (year, month, day, etc.) from a Date object.

const currentDate2 = new Date();
// Getting the year from the current date object
const year = currentDate2.getFullYear();
// Getting the month (Note: months are 0-based, so 0 = January, 11 = December)
const month = currentDate2.getMonth();
// Getting the day of the month (1 to 31)
const date = currentDate2.getDate();
// Getting the day of the week (0 = Sunday, 6 = Saturday)
const day = currentDate2.getDay();
// Getting the hours (0-23)
const hours = currentDate2.getHours();
// Getting the minutes (0-59)
const minutes = currentDate2.getMinutes();
// Getting the seconds (0-59)
const seconds = currentDate2.getSeconds();
// Getting the milliseconds (0-999)
const milliseconds = currentDate2.getMilliseconds();
// Getting the time in milliseconds since Unix epoch (January 1, 1970)
const time = currentDate2.getTime();

console.log(year, month, date, day, hours, minutes, seconds, milliseconds, time);

// 3. Setting Date Components
// You can modify specific components of a Date object using setter methods.

const dateToModify = new Date();
// Setting a specific year, month, day, etc.
dateToModify.setFullYear(2025); // Set year to 2025
dateToModify.setMonth(5); // Set month to June (0-based, so 5 = June)
dateToModify.setDate(15); // Set day of the month to 15
dateToModify.setHours(10); // Set hours to 10
dateToModify.setMinutes(30); // Set minutes to 30
dateToModify.setSeconds(45); // Set seconds to 45
dateToModify.setMilliseconds(500); // Set milliseconds to 500

console.log(dateToModify); // Output: Updated Date object

// 4. Useful Date Methods

// 4.1 toLocaleString()
// Converts the Date object to a localized string representation of both date and time.
// This method considers the local timezone and locale.
const dateToLocale = new Date();
console.log(dateToLocale.toLocaleString()); // Output: "2/19/2024, 4:30:00 PM" (locale-dependent)

// 4.2 toLocaleDateString()
// Returns a localized string representing only the date portion.
console.log(dateToLocale.toLocaleDateString()); // Output: "2/19/2024"

// 4.3 toLocaleTimeString()
// Returns a localized string representing only the time portion.
console.log(dateToLocale.toLocaleTimeString()); // Output: "4:30:00 PM"

// 4.4 Date.parse()
// Parses a date string and returns the number of milliseconds since the Unix epoch.
const dateString = "2024-02-19T16:30:00Z";
const parsedDate = Date.parse(dateString);
console.log(parsedDate); // Output: 1708360200000 (milliseconds)

// 5. Bonus: Date.now() vs new Date().getTime()

// Date.now() returns the current timestamp in milliseconds.
console.log(Date.now()); // Current timestamp

// new Date().getTime() also returns the timestamp for a specific Date object.
console.log(new Date().getTime()); // Timestamp of the current Date object

// 6. Practical Examples

// 6.1 Add Days to a Date
// Adds a specified number of days to a given date object.
const addDaysToDate = (date, extraDay) => {
  date.setDate(date.getDate() + extraDay);
  return date;
};

const dateToAddDays = new Date("2024-02-19");
// Adding 7 days to the date
const newDate = addDaysToDate(dateToAddDays, 7);
console.log(newDate.toLocaleDateString()); // Output: "2/26/2024"

// 6.2 Calculate Difference in Days Between Two Dates
// Calculates the difference between two Date objects in terms of the number of days.
const getDaysDifference = (d1, d2) => {
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
  const diff = Math.abs(d1 - d2); // Absolute difference in milliseconds
  return Math.round(diff / oneDay); // Difference in days
};

const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
// Calculating the difference in days between the two dates
console.log(getDaysDifference(date1, date2)); // Output: 11

// 9. Time Zones and UTC
// JavaScript Date objects are based on local time by default, but you can use UTC methods for working with UTC.

const dateForUTC = new Date();
// Getting UTC components (e.g., year, month, day) from the current Date object
console.log(dateForUTC.getUTCFullYear(), dateForUTC.getUTCMonth(), dateForUTC.getUTCDate(), dateForUTC.getUTCDay());

// Set UTC Components
// You can set the UTC components of a Date object using UTC setter methods.
const dateForUTCSet = new Date();
dateForUTCSet.setUTCFullYear(2025);
dateForUTCSet.setUTCMonth(5);
dateForUTCSet.setUTCDate(15);
dateForUTCSet.setUTCHours(10);
dateForUTCSet.setUTCMinutes(30);
dateForUTCSet.setUTCSeconds(45);
dateForUTCSet.setUTCMilliseconds(500);
// Outputting the date in ISO format (UTC time)
console.log(dateForUTCSet.toISOString()); // Output: "2025-06-15T10:30:45.500Z"

// 10. Date Formatting (Advanced)

// Using Intl.DateTimeFormat for custom formatting of a Date object.
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC'
});
console.log(formatter.format(dateForUTCSet)); // Output: "June 15, 2025 at 10:30:45 AM"

// Custom formatting without external libraries
// Manually formatting the date as "YYYY-MM-DD" (ISO 8601-like format)
const customFormattedDate = `${dateForUTCSet.getFullYear()}-${String(dateForUTCSet.getMonth() + 1).padStart(2, '0')}-${String(dateForUTCSet.getDate()).padStart(2, '0')}`;
console.log(customFormattedDate); // Output: "2025-06-15"

// End of the code
