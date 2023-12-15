// var cleanestcountries = ["Pakistan","India","Bangladesh","Iran","Turkey","Indonesia"]

// var countryytoCheck = prompt("Type your country Name?");

// var flag = false;

// for (var i = 0; i <=cleanestcountries.length; i++) {
//     if (countryytoCheck === cleanestcountries[i]){
//      flag = true;
//      alert("Your entered country is one of the cleanest Country")

        
//     }
// }

// if (flag === false){
//      alert("Your entered country is not the cleanest Country")
// }

//-------------//--------------------

// var passedRollnumbers = [52001, 52004, 52005, 52009, 52010, 52014, 52015, 52018, 52020]
// var checkRollnumber = +prompt("Enter you Roll Number here to check result (from 52000 to 52020)")

// var flag = false;

// for (var i = 0; i < passedRollnumbers.length; i++){
//     if (checkRollnumber === passedRollnumbers[i]){
//         flag = true;
//         alert("Roll Number found. You are Passed.")
//     }
// }
//       if (flag === false){
//         alert("Roll Number not found. You are Failed.")
//       }

//------//---------//-------------

// var firstNames = ["Furqan","Salman","Sheharyar","Imran"]
// var lastNames = ["Qazi","Khan","Ali","Memon"];
// var fullNames = [];

// // for (var i = 0; i < firstNames.length; i++){
// //     for (var j = 0; j < lastNames.length; j++){
// //         fullNames.push(firstNames[i] + lastNames[j])
// //     }
// // }

// // console.log(fullNames)

// var itemName = ["BOPP Self Adhesive Tape"]
// var colorName = ["Clear", "Tan", "Printed"]
// var micronName = ["38 Micron", "40 Micron", "42 Micron", "43 Micron", "45 Micron"]
// var productDetails = [];

// for (var i = 0; i < itemName.length; i++){
//     for (var j = 0; j < colorName.length; j++){
//         for (var k = 0; k < micronName.length; k++){
//             document.write(itemName[i] + colorName[j] + micronName[k] + "<br>")
           
//         }
//             }
//     }

//--------//---------------//


// for (var i = 0; i < firstNames.length; i++){
//     fullNames.push(firstNames[i] + " " + lastNames[i])
//     }


// console.log(fullNames)


// var text = "To be or not to be.";
// var segIndex = text.indexOf("be");

// if (segIndex !== -1){
//     text = text.slice(0, segIndex) + "WOW" + text.slice(segIndex + 2)
// }

// console.log(text)

// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");

// console.log(segIndex)

// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var theDate = rightNow.getDate();

// console.log(theDate)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// var theMonth = now.getMonth();
// var theHours = now.getHours();
// var theMinutes = now.getMinutes();
// var theSeconds = now.getSeconds();
// var theMiliseconds = now.getMilliseconds();
// var theTime = now.getTime();

// console.log(nameOfToday);
// console.log(theMonth);
// console.log(theHours);
// console.log(theMinutes);
// console.log(theSeconds);
// console.log(theMiliseconds);
// console.log(theTime);

//moment JS --> date time library

// var now = new Date();
// var birthDay = new Date("February 25, 2024");

// var diff = birthDay - now;

// var daysdiff = diff / 1000 / 60 / 60 / 24 / 30;

// console.log(daysdiff);

// var d = new Date();
// d.setFullYear(2001);

// console.log(d);

// var s = new Date();
// s.setSeconds(45);

// console.log(s);

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("time: " + theHr + ":" + theMin);


// function tellTime() {
//     var now = new Date();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();
//     console.log("time: " + theHr + ":" + theMin);

// }

// tellTime()



// function greetUser() {
//     var greeting = "Welcome"
//     console.log(greeting)
// }

// greetUser()

// function greetUser(greeting) {
//     console.log(greeting);
// }

// greetUser("Hello, there")


// function calcTot(merchTot) {
//      var orderTot;
//      if (merchTot >= 100) {
//      orderTot = merchTot;
//      }
//      else if (merchTot < 50.01) {
//      orderTot = merchTot + 5;
//      }
//      else {
//     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }
//     return orderTot;
// }

//      var totalBill = calcTot(+prompt("enter your amount"));

//      alert(totalBill)


// var dayOfWk = prompt("Enter Day")

// switch(dayOfWk) {
//       case "Sat" :
//       console.log("Whoopee");
//       break;
//       case "Sun" :
//       console.log("Whoopee");
//       break;
//       case "Fri" :
//       console.log("TGIF!");
//       break;
//       default :
//       console.log("Shoot me now!");
//       }

// for (var i = 0; i <= 3; i++) {
//       alert(i);
//       }

// var i = 0;
//  while (i <= 3) {
//  console.log(i);
//  i++;
//  }

// var i = 0;
//  do {
//  alert(i);
//  i++;
//  } while (i <= 3);

// ------//----//


// function greetUser(name) {
//      alert("Furqan Qazi");
//      }

//      greetUser(name)

// ------//----//

//  var i = 0;
//  while (i < 0) {
//  alert(i);
//  i++;
//  }
// It does not run a single time according to the condition set
////--------////-----

// var i = 0;
//  do {
//  alert(i);
//  i++;
//  } while (i < 0);

// It will run atleast once even despite of what ever condition is set 

///////---------------------------///

// var name = "Furqan"

// function greetUser(name) {
//      alert(name);
//      }

//      greetUser(name)


//-----------//

// function showMessage(m, string, num){
//  alert(m + string + num);
// }
//  var m = "November"

//  showMessage(m, "'s winner number is ", 23)

//-------------------//

// var theSum = addNumbers();

//  function addNumbers() {
//  var theSum = 2 + 2;
//  return theSum;
//  }

//  alert(theSum)



// function checkAddress(fieldId) {
//      if (document.getElementById(fieldId).value === "") {
//      alert("Email address required.");
//      }
//      }

// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "furqank3qazi@gmail.com") {
//     alert("This email already registered.");
  
//     }
//     }

// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//      case "60608" :
//      cityName = "Chicago";
//      break;
//     case "68114" :
//      cityName = "Omaha";
//      break;
//      case "53212" :
//      cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//      }


// function expandLoris() {
//      var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
//      }

// var par = document.getElementsByTagName("p");

// par[1].innerHTML = "yes"

// for (var i = 0; i < par.length; i++){
//      par[i].style.backgroundColor = "yellow";
// }


// var liElements = document.getElementsByTagName("li");

// var howManyli = liElements.length;

// for (var i = 0; i < howManyli; i++){
//      if (liElements[i].innerHTML === "") {
//           liElements[i].innerHTML = "Coming Soon";
//      }
// }

// var nodeToAdd = document.createElement("p");


// nodeToAdd = "My name is Furqan"


// document.write(nodeToAdd)

// var boppTape = {
//       name: "23 MM X 72 Yards",
//       price: 82,
//       micron: 40,
//       color: "clear",
//       print: "Unilever"
//       };

// var boppTape = {
//       name: "48 MM X 72 Yards",
//       price: 160,
//       micron: 40,
//       color: "clear",
//       print: "Unilever"
//       };

      
// var boppTape = {
//      name: "69 MM X 72 Yards",
//      price: 225,
//      micron: 40,
//      color: "clear",
//      print: "Unilever"
//      };

// var maskingTape = {
//       name: "48 MM X 20 Yards",
//       price: 100,
//       micron: 45,
//       color: "milkywhite",
//       };

// var clearTape = {
//       name: "69 MM X 72 Yards",
//       price: 190,
//       micron: 40,
//       color: "clear",
//       };

// var stretchFilm = {
//       name: "500 MM X 300 Meter",
//       price: 750,
//       micron: 20,
//       grade: "Food Grade"
//       };

// stretchFilm.elongization = "12 mm"
// stretchFilm.price = 800
// delete stretchFilm.grade

// console.log("grade" in stretchFilm)
// console.log("micron" in stretchFilm)


// console.log(boppTape)

// console.log(stretchFilm)

// var plan1 = {
//       name: "Basic",
//       price: 5,
//       space: 100,
//       transfer: 1000,
//       pages: 10,
//       discountMonths: [10, 11]
//       };

// function calcAnnual(){
//      var bestPrice = plan1.price;
//      var currDate = new Date();
//      var thisMonth = currDate.getMonth();
//      for (var i = 0; i < plan1.discountMonths.length; i++){
//           if (plan1.discountMonths[i] === thisMonth){
//                bestPrice = plan1.price * .8;
//                break;
//           }
//      }
//      return bestPrice * 12
// }

// var annualPrice = calcAnnual();

// console.log(annualPrice)


// var plan1 = {
//      name: "Basic",
//      price: 5,
//      space: 100,
//      transfer: 1000,
//      pages: 10,
//      discountMonths: [10, 11]
//      };

// function calcAnnual(percentIfDisc){
//     var bestPrice = plan1.price;
//     var currDate = new Date();
//     var thisMonth = currDate.getMonth();
//     for (var i = 0; i < plan1.discountMonths.length; i++){
//          if (plan1.discountMonths[i] === thisMonth){
//               bestPrice = plan1.price * percentIfDisc;
//               break;
//          }
//     }
//     return bestPrice * 12
// }

// var annualPrice = calcAnnual(.85);

// console.log(annualPrice)


// var plan1 = {
//       name: "Basic",
//       price: 5,
//       space: 100,
//       transfer: 1000,
//       pages: 10,
//       discountMonths: [10, 11],
//       calcAnnual: function(percentIfDisc) {
//       var bestPrice = plan1.price;
//       var currDate = new Date();
//       var thisMo = currDate.getMonth();
//       for (var i = 0; i < plan1.discountMonths.length; i++) {
//       if (plan1.discountMonths[i] === thisMo) {
//       bestPrice = plan1.price * percentIfDisc;
//       break;
//       }
//       }
//       return bestPrice * 12;
//       }
//       };

// var annualPrice = plan1.calcAnnual(.90)

// console.log(annualPrice)

// var plan1 = {
//       name: "Basic",
//       price: 5,
//       space: 100,
//       transfer: 1000,
//      pages: 10,
//      discountMonths: [10, 11],
//      calcAnnual: function(percentIfDisc) {
//      var bestPrice = this.price;
//      var currDate = new Date();
//      var thisMo = currDate.getMonth();
//      for (var i = 0; i < this.discountMonths.length; i++) {
//      if (this.discountMonths[i] === thisMo) {
//      bestPrice = this.price * percentIfDisc;
//      break;
//  }
//  }
//      return bestPrice * 12;
//  }
//  };


// document.getElementById("netAmount").innerHTML = (plan1.calcAnnual(.70))

////-------------------//

// function makeInvisible() {
//     document.getElementById("furqanImage").style.display = "none";
// }


//-------------------------------//---------

// function Samosaroll(name, price, weight, made, expiry) {
//      this.name = name;
//      this.price = price;
//      this.weight = weight;
//      this.made = made;
//      this.expiry = expiry;
// }

// var chicken1 = new Samosaroll("Chicken Samosa", 30, "75gm", "Home Made", "within 3 Days")
// var chicken2 = new Samosaroll("Chicken BBQ Samosa", 40, "80gm", "Home Made", "within 3 Days")
// var chicken3 = new Samosaroll("Chicken Roll", 40, "100gm", "Home Made", "within 3 Days")

// document.write(chicken1.name, " Price is Rs.", chicken1.price, ". Its made is ", chicken1.made, ". Its weight is ", chicken1.weight, ". And it expires ", chicken1.expiry, ".")
// document.write("<br>")
// document.write(chicken2.name, " Price is Rs.", chicken2.price, ". Its made is ", chicken2.made, ". Its weight is ", chicken2.weight, ". And it expires ", chicken2.expiry, ".")
// document.write("<br>")
// document.write(chicken3.name, " Price is Rs.", chicken3.price, ". Its made is ", chicken3.made, ". Its weight is ", chicken3.weight, ". And it expires ", chicken3.expiry, ".")

//---------------------------///-------------------

// function Plan(name, price, space, transfer, pages, discountMonths) {
//      this.name = name;
//      this.price = price;
//      this.space = space;
//      this.transfer = transfer;
//     this.pages = pages;
//      this.discountMonths = discountMonths;
//      this.calcAnnual = function(percentIfDisc) {
//      var bestPrice = this.price;
//      var currDate = new Date();
//       var thisMo = currDate.getMonth();
//       for (var i = 0; i < this.discountMonths.length; i++) {
//       if (this.discountMonths[i] === thisMo) {
//       bestPrice = this.price * percentIfDisc;
//       break;
//       }
//       }
//       return bestPrice * 12;
//       };
//       }
//        var p1 = new Plan("Basic", 20, 100, 1000, 10, [6, 7]);
//        var p2 = new Plan("Premium", 30, 500, 5000, 50, [9, 10, 11]);
//        var p3 = new Plan("Ultimate", 40, 2000, 20000, 500, [4, 5]);

//        var annualPrice = p2.calcAnnual(.90);

//        console.log(annualPrice),
//        console.log(p1.calcAnnual(.90))
//        console.log("price" in p1)
//        console.log("location" in p1)


// var listOfProperties = [];
//  for (var name in p1) {
//  listOfProperties.push(name);
//  }

//  console.log(listOfProperties)

//------------------------//---------

// function checkForPopBlocker() {
//      var testPop = window.open("", "","width=100,height=100");
//      if (testPop === null) {
//      alert("Please disable your popup blocker.");
//      }
//      testPop.close();
//      }

//      checkForPopBlocker()

//----------------------------------//

// function checkForLastName() {
//      if (document.getElementById("lastNameField").value.length === 0) {
//      alert("Please enter your last name");
//      return false;
//      }
//      }

//---------------------//

// function checkForLastName() {
//      var targetField = document.getElementById("lastNameField");
//      if (targetField.value.length === 0) {
//      alert("Please enter your last name");
//      targetField.focus();
//      targetField.style.background = "yellow";
//      return false;
//      }
//      targetField.style.background = "white";
//      }

//----------------------//---------------//

// function checkForSelection() {
//      if (document.getElementById("states").selectedIndex === 0) {
//      alert("Please select a state.");
//      return false;
//     }
//      }

//-----------------------//----------------------

// function validateRadios() {
//      var radios = document.getElementsByName("r1");
//      for (var i = 0; i < radios.length; i++) {
//      if (radios[i].checked) {
//      return true;
//      }
//      }
//     alert("Please check one.");
//      return false;
//      }


//----------------------------------//--------------------------


// function generateRandomString(length) {
//  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//  let result = '';
//  for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * characters.length);
//   result += characters[randomIndex];
//  }
//  document.write(result)
//  return result;
 
// }

var mixedArray = [11,12,13,14,5,6,7,8];

var evenNumbers = [];

var oddNumbers = [];

for (i = 0; i < mixedArray.length; i++){
    if (mixedArray[i]%2){
        oddNumbers.push(mixedArray[i])
    }
    else{
        evenNumbers.push(mixedArray[i])
    }

}

console.log(oddNumbers)
console.log(evenNumbers)







