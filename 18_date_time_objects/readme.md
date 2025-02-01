## Date and Time Objects

JavaScript provides the `Date` object to work with dates and times. This guide covers the creation of `Date` objects, methods to get and set date/time components, and useful utilities for working with dates.

---

### **1. Creating a Date Object**

The `Date` object is created using the `new Date()` constructor. There are **9 ways** to create a `Date` object:

#### **Syntax**
```javascript
new Date() // Current date and time
new Date(dateString) // From a date string
new Date(year, month) // Year and month (0-based)
new Date(year, month, day) // Year, month, and day
new Date(year, month, day, hours) // Year, month, day, and hours
new Date(year, month, day, hours, minutes) // Year, month, day, hours, and minutes
new Date(year, month, day, hours, minutes, seconds) // Year, month, day, hours, minutes, and seconds
new Date(year, month, day, hours, minutes, seconds, ms) // Year, month, day, hours, minutes, seconds, and milliseconds
new Date(milliseconds) // From milliseconds since Unix epoch (January 1, 1970)
```

---

#### **1.1 `new Date()`**
Creates a `Date` object representing the current date and time.

```javascript
const currentDate = new Date();
console.log(currentDate);
// Output: Current date and time in ISO 8601 format (e.g., "2024-02-19T10:44:09.274Z")
```

- **Note**: The output is in **ISO 8601 format**, where `T` separates the date and time, and `Z` indicates UTC.

---

#### **1.2 `new Date(dateString)`**
Creates a `Date` object from a date string.

```javascript
const dateFromString = new Date("2024-02-19T10:44:09.274Z");
console.log(dateFromString);
// Output: Date object representing "2024-02-19T10:44:09.274Z"
```

- **Supported Formats**:
  - `"2024-02-19"` (Year-Month-Day)
  - `"February 19, 2024"` (Month Day, Year)

---

#### **1.3 `new Date(year, month)`**
Creates a `Date` object with the specified year and month.

```javascript
const date1 = new Date(2025, 11); // December 2025 (month is 0-based)
console.log(date1);
// Output: Date object representing December 1, 2025
```

- **Note**: Months are **0-based** (0 = January, 11 = December).

---

#### **1.4 `new Date(year, month, day)`**
Creates a `Date` object with the specified year, month, and day.

```javascript
const date2 = new Date(2024, 1, 19); // February 19, 2024
console.log(date2);
// Output: Date object representing February 19, 2024
```

---

#### **1.5 `new Date(year, month, day, hours)`**
Creates a `Date` object with the specified year, month, day, and hours.

```javascript
const date3 = new Date(2024, 1, 19, 10); // February 19, 2024, 10:00:00
console.log(date3);
// Output: Date object representing February 19, 2024, 10:00:00
```

---

#### **1.6 `new Date(year, month, day, hours, minutes)`**
Creates a `Date` object with the specified year, month, day, hours, and minutes.

```javascript
const date4 = new Date(2024, 1, 19, 10, 44); // February 19, 2024, 10:44:00
console.log(date4);
// Output: Date object representing February 19, 2024, 10:44:00
```

---

#### **1.7 `new Date(year, month, day, hours, minutes, seconds)`**
Creates a `Date` object with the specified year, month, day, hours, minutes, and seconds.

```javascript
const date5 = new Date(2024, 1, 19, 10, 44, 9); // February 19, 2024, 10:44:09
console.log(date5);
// Output: Date object representing February 19, 2024, 10:44:09
```

---

#### **1.8 `new Date(year, month, day, hours, minutes, seconds, ms)`**
Creates a `Date` object with the specified year, month, day, hours, minutes, seconds, and milliseconds.

```javascript
const date6 = new Date(2024, 1, 19, 10, 44, 9, 274); // February 19, 2024, 10:44:09.274
console.log(date6);
// Output: Date object representing February 19, 2024, 10:44:09.274
```

---

#### **1.9 `new Date(milliseconds)`**
Creates a `Date` object from the number of milliseconds since the Unix epoch (January 1, 1970).

```javascript
const milliseconds = 1708334649274; // Example milliseconds
const dateFromMilliseconds = new Date(milliseconds);
console.log(dateFromMilliseconds);
// Output: Date object representing the specified time
```

---

### **2. Getting Date Components**

You can extract components (year, month, day, etc.) from a `Date` object using the following methods:

```javascript
const currentDate = new Date();

const year = currentDate.getFullYear(); // 4-digit year (e.g., 2024)
const month = currentDate.getMonth(); // Month (0-11, 0 = January)
const date = currentDate.getDate(); // Day of the month (1-31)
const day = currentDate.getDay(); // Day of the week (0-6, 0 = Sunday)
const hours = currentDate.getHours(); // Hours (0-23)
const minutes = currentDate.getMinutes(); // Minutes (0-59)
const seconds = currentDate.getSeconds(); // Seconds (0-59)
const milliseconds = currentDate.getMilliseconds(); // Milliseconds (0-999)
const time = currentDate.getTime(); // Milliseconds since Unix epoch

console.log(year, month, date, day, hours, minutes, seconds, milliseconds, time);
```

---

### **3. Setting Date Components**

You can modify the components of a `Date` object using the following methods:

```javascript
const date = new Date();

date.setFullYear(2025); // Set year to 2025
date.setMonth(5); // Set month to June (0-based)
date.setDate(15); // Set day of the month to 15
date.setHours(10); // Set hours to 10
date.setMinutes(30); // Set minutes to 30
date.setSeconds(45); // Set seconds to 45
date.setMilliseconds(500); // Set milliseconds to 500

console.log(date);
```

---

### **4. Useful Date Methods**

#### **4.1 `toLocaleString()`**
Returns a string representing the date and time in the current locale.

```javascript
const date = new Date();
console.log(date.toLocaleString());
// Output: "2/19/2024, 4:30:00 PM" (format depends on locale)
```

---

#### **4.2 `toLocaleDateString()`**
Returns a string representing the date portion in the current locale.

```javascript
const date = new Date();
console.log(date.toLocaleDateString());
// Output: "2/19/2024" (format depends on locale)
```

---

#### **4.3 `toLocaleTimeString()`**
Returns a string representing the time portion in the current locale.

```javascript
const date = new Date();
console.log(date.toLocaleTimeString());
// Output: "4:30:00 PM" (format depends on locale)
```

---

#### **4.4 `Date.parse()`**
Parses a date string and returns the number of milliseconds since the Unix epoch.

```javascript
const dateString = "2024-02-19T16:30:00Z";
const parsedDate = Date.parse(dateString);
console.log(parsedDate); // Output: 1708360200000 (milliseconds)
```

---

### **5. Bonus: `Date.now()` vs `new Date().getTime()`**

- **`Date.now()`**: Returns the current timestamp in milliseconds.
- **`new Date().getTime()`**: Returns the timestamp of a specific `Date` object.

```javascript
console.log(Date.now()); // Current timestamp
console.log(new Date().getTime()); // Timestamp of the current Date object
```

---

### **6. Practical Examples**

#### **6.1 Add Days to a Date**
```javascript
const addDaysToDate = (date, extraDay) => {
  date.setDate(date.getDate() + extraDay);
  return date;
};

const date = new Date("2024-02-19");
const newDate = addDaysToDate(date, 7);
console.log(newDate.toLocaleDateString()); // Output: "2/26/2024"
```

---

#### **6.2 Calculate Difference in Days Between Two Dates**
```javascript
const getDaysDifference = (d1, d2) => {
  const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in one day
  const diff = Math.abs(d1 - d2); // Absolute difference in milliseconds
  return Math.round(diff / oneDay); // Difference in days
};

const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2)); // Output: 11
```

---

### **7. Key Notes**
1. **Months are 0-based**: January = 0, December = 11.
2. **Dates are stored as milliseconds**: JavaScript stores dates as the number of milliseconds since January 1, 1970 (Unix epoch).
3. **Use `toLocaleString()` for human-readable formats**: This method adapts to the user's locale.

---

### **8. Interview Questions**

#### **8.1 Write a function to add days to a date.**
```javascript
const addDaysToDate = (date, extraDay) => {
  date.setDate(date.getDate() + extraDay);
  return date;
};
```

#### **8.2 Write a function to calculate the difference in days between two dates.**
```javascript
const getDaysDifference = (d1, d2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diff = Math.abs(d1 - d2);
  return Math.round(diff / oneDay);
};
```

---

### **9. Time Zones and UTC**

JavaScript `Date` objects are based on the **local time zone** of the browser or runtime environment. However, you can work with **UTC (Coordinated Universal Time)** using the following methods:

#### **UTC Methods**
```javascript
const date = new Date();

const utcYear = date.getUTCFullYear(); // UTC 4-digit year
const utcMonth = date.getUTCMonth(); // UTC month (0-11)
const utcDate = date.getUTCDate(); // UTC day of the month (1-31)
const utcDay = date.getUTCDay(); // UTC day of the week (0-6)
const utcHours = date.getUTCHours(); // UTC hours (0-23)
const utcMinutes = date.getUTCMinutes(); // UTC minutes (0-59)
const utcSeconds = date.getUTCSeconds(); // UTC seconds (0-59)
const utcMilliseconds = date.getUTCMilliseconds(); // UTC milliseconds (0-999)

console.log(utcYear, utcMonth, utcDate, utcDay, utcHours, utcMinutes, utcSeconds, utcMilliseconds);
```

#### **Setting UTC Components**
```javascript
const date = new Date();

date.setUTCFullYear(2025); // Set UTC year to 2025
date.setUTCMonth(5); // Set UTC month to June (0-based)
date.setUTCDate(15); // Set UTC day of the month to 15
date.setUTCHours(10); // Set UTC hours to 10
date.setUTCMinutes(30); // Set UTC minutes to 30
date.setUTCSeconds(45); // Set UTC seconds to 45
date.setUTCMilliseconds(500); // Set UTC milliseconds to 500

console.log(date.toISOString()); // Output in ISO 8601 format (UTC)
```

---

### **10. Date Formatting**

JavaScript provides several methods to format dates, but for more advanced formatting, libraries like **`Intl.DateTimeFormat`** or **`moment.js`** (deprecated) or **`date-fns`** are recommended.

#### **Using `Intl.DateTimeFormat`**
```javascript
const date = new Date();

const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC'
});

console.log(formatter.format(date)); // Output: "February 19, 2024 at 10:44:09 AM"
```

#### **Custom Formatting**
If you need custom formatting, you can manually construct the string:
```javascript
const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate); // Output: "2024-02-19 10:44:09"
```

---

### **11. Date Arithmetic**

#### **Adding/Subtracting Time**
You can add or subtract time by manipulating milliseconds:
```javascript
const date = new Date();

// Add 1 day
date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

// Subtract 2 hours
date.setTime(date.getTime() - 2 * 60 * 60 * 1000);

console.log(date);
```

#### **Calculating Time Differences**
To calculate the difference between two dates:
```javascript
const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");

const diffInMilliseconds = date2 - date1; // Difference in milliseconds
const diffInSeconds = diffInMilliseconds / 1000; // Difference in seconds
const diffInMinutes = diffInSeconds / 60; // Difference in minutes
const diffInHours = diffInMinutes / 60; // Difference in hours
const diffInDays = diffInHours / 24; // Difference in days

console.log(diffInDays); // Output: 11
```

---

### **12. Handling Edge Cases**

#### **Invalid Dates**
If you create a `Date` object with invalid values, it will return `Invalid Date`:
```javascript
const invalidDate = new Date("invalid-date-string");
console.log(invalidDate.toString()); // Output: "Invalid Date"
```

You can check for invalid dates using `isNaN()`:
```javascript
if (isNaN(invalidDate.getTime())) {
  console.log("Invalid Date");
}
```

#### **Leap Years**
JavaScript automatically handles leap years:
```javascript
const leapYearDate = new Date(2024, 1, 29); // February 29, 2024 (leap year)
console.log(leapYearDate.toLocaleDateString()); // Output: "2/29/2024"
```

---

### **13. Libraries for Advanced Date Manipulation**

While JavaScript’s built-in `Date` object is powerful, it can be cumbersome for complex use cases. Consider using libraries like:

- **`date-fns`**: A modern, lightweight library for date manipulation.
  ```javascript
  import { format, addDays } from 'date-fns';

  const date = new Date();
  console.log(format(date, 'yyyy-MM-dd')); // Output: "2024-02-19"
  console.log(addDays(date, 7)); // Add 7 days
  ```

- **`luxon`**: A powerful library for working with dates and times.
  ```javascript
  import { DateTime } from 'luxon';

  const date = DateTime.now();
  console.log(date.toISO()); // Output: "2024-02-19T10:44:09.274Z"
  console.log(date.plus({ days: 7 }).toISO()); // Add 7 days
  ```

---

### **14. Common Pitfalls**

1. **Month Indexing**: Months are 0-based (January = 0, December = 11). This can lead to off-by-one errors.
2. **Time Zone Confusion**: Always be mindful of time zones when working with dates, especially in global applications.
3. **Invalid Dates**: Always validate date inputs to avoid `Invalid Date` errors.
4. **Mutability**: `Date` objects are mutable. Use `new Date()` to create a copy if needed.

---

### **15. Advanced Use Cases**

#### **15.1 Countdown Timer**
```javascript
const targetDate = new Date("2024-12-31T23:59:59");

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
};

setInterval(updateCountdown, 1000);
```

#### **15.2 Age Calculator**
```javascript
const calculateAge = (birthDate) => {
  const now = new Date();
  const diff = now - birthDate;
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const birthDate = new Date("1990-01-01");
console.log(calculateAge(birthDate)); // Output: Age in years
```

---

### **16. Summary**

- Use `new Date()` to create date objects.
- Be mindful of **0-based months** and **time zones**.
- Use `toLocaleString()` for localized formatting.
- For advanced use cases, consider libraries like `date-fns` or `luxon`.
- Always validate dates to avoid errors.

---
