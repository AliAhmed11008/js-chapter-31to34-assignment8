// //q 1
// var todayDate = new Date()
// document.write(todayDate + "</br>"); 

// //q2
// var months = [
// "January", "February", "March", "April",
// "May", "June", "July", "August",
// "September", "October", "November", "December"
// ];

// var currentDate = new Date();
// var currentMonth = months[currentDate.getMonth()];

// document.write(currentMonth);

// //q3 
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var today = new Date();
// var dayName = days[today.getDay()];
// var shortDay = dayName.slice(0, 3);

// document.write("Today is " + shortDay)  ;

// //q4 
// var today = new Date();
// var day = today.getDay();

// if (day === 0 || day === 6) {
// document.write("It’s Fun day");
// }

// //q5
// var today = new Date();
// var date = today.getDate(); 

// if (date < 16) {
//     document.write("First fifteen days of the month");
// } else {
//    document.write("Last days of the month"); }

// //q6

// var now = new Date();
// minutesSinceEpoch = Math.floor(now.getTime() / (1000 * 60));

// console.log(minutesSinceEpoch);


// //q7
// var currentTime = new Date();
// var hours = currentTime.getHours();

// if (hours < 12) {
//   alert("Its AM");
// } else {
//   alert("its PM");
// }


// //q8
// var laterDate = new Date(2020, 11, 31);


// //q9
// var ramadanStart = new Date("June 18, 2015");
// var today = new Date();
// var diffTime = today.getTime() - ramadanStart.getTime();
// var daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// console.log(daysPassed + " days have passed since 1st Ramadan, 2015");

// //q10
// var referenceDate = new Date();
// var beginning2015 = new Date("January 1, 2015");

// var diffMilliseconds = referenceDate.getTime() - beginning2015.getTime();
// var diffSeconds = Math.floor(diffMilliseconds / 1000);

// document.write(
//   "Seconds elapsed between January 1, 2015 and now: " + diffSeconds
// );

// //q11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();

// currentDate.setHours(currentHours + 1);

// document.write("Updated Date & Time: " + currentDate);

// //q12
// var currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date 100 years back: " + currentDate);

// //q 13
// var age = prompt("Enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;

// document.write("Your birth year is: " + birthYear);
