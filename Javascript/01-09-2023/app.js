
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//  var passwordLength = 8;
//  var password = "";

//  for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars[randomNumber];
//    }

//    console.log(password);

// ---------------------------------------------/////--------------------------

// var dob = prompt("Enter your Date of Birth");

// var today = new Date();

// document.write(today.getFullYear() - dob)

// -------------------------------------//------------------------------------------//

// var letterslist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numberslist = "0123456789";
// var symbolslist = "!@#$%^&*()";


//  var lettersLength = 3;
//  var numbersLength = 3;
//  var symbolsLength = 3;
//  var password = "";

//  for (var i = 0; i <= lettersLength; i++) {
//     var randomLetters = Math.floor(Math.random() * letterslist.length);
//     password += letterslist[randomLetters];

//    }

//    console.log(password);

// --------------// MOMENTJS.COM FOR BLACK TIMER DIFFERENT FORMATS OF DATE AND TIME ---------------------------------//

// -------------------------------------//------------------------------------------//

// var firstRamadan = new Date ("11 March 2024");
// var today = new Date();

// var diff = firstRamadan.getTime() - today.getTime();

// var days = diff / 86400000;
// var months = diff / 2592000000;

// console.log (days);
// console.log (months);

// -------------------------------------//------------------------------------------//

var date1 = moment().format("hh:mm A D/M/YYYY");
var date2 = moment().format('MMMM Do YYYY, h:mm:ss a');
var date3 = moment().format('dddd');
var date4 = moment("20220831", "YYYYMMDD").fromNow();
var date5 = moment().endOf('day').fromNow();
var date6 = moment().startOf('hour').fromNow();
var date7 = moment().calendar();
var date8 = moment().add(1, 'days').calendar();
var date9 = moment().add(10, 'days').calendar();
var date10 = moment().format('LLL');

console.log (date1);
console.log (date2);
console.log (date3);
console.log (date4);
console.log (date5);
console.log (date6);
console.log (date7);
console.log (date8);
console.log (date9);
console.log (date10);