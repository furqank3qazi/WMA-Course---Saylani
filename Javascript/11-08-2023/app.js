// var gender = prompt("Enter your gender","Male")
// var message;

// if(gender === "Male") {
//     alert("Hello Sir")
// }

// if(gender === "Female") {
//     alert("Hello Sister")
// }

// ---------------- 2nd Example ----------------------

// var gender = prompt("Enter your gender","Male")
// var message = "Not match";

// if(gender === "Male") {
//     message = "Hello Sir"
// }

// if(gender === "Female") {
//     message = "Hello Sister"
// }

// alert(message)

// ---------------- 3rd Example ----------------------


// var education = prompt("Enter your education");

// if(education !== "matric") {
//     alert("Eligible");
// }

// ---------------- 4th Example ----------------------


// var age = prompt("Enter your age");

// var message = "";

// if(age > 20){
//     alert("Eligible");
// }
// else {
//     alert("Not Eligible")
// }

// ---------------- 5th Example ----------------------

// var lanaKyaHai = prompt("Kia Mil raha hai")

// if(lanaKyaHai === "Dahi"){
//     alert("Le ana")
// }

// if(lanaKyaHai === "Doodh"){
//     alert("Haan yaad se Le ana")
// }

// if(lanaKyaHai === "Bread"){
//     alert("Zaroor Le ana")
// }

// if(lanaKyaHai === "Paratha"){
//     alert("Yummy, Le ana")
// }

// else {
//     alert("mujhe samajh nhe aarha kuch b le ana")
// }

// document.write(lanaKyaHai)

// ---------------- 6th Example ----------------------


var num1 = +prompt("Enter Value 1 for Addition Operation")
var num2 = +prompt("Enter Value 2 for Addition Operation")
var add = num1 + num2

var number1 = +prompt("Enter Value 1 for Subtract Operation")
var number2 = +prompt("Enter Value 2 for Subtract Operation")
var subtract = number1 - number2

var value1 = +prompt("Enter Value 1 for Multiply Operation")
var value2 = +prompt("Enter Value 2 for Multiply Operation")
var multiply = value1 * value2

var amount1 = +prompt("Enter Value 1 for Division Operation")
var amount2 = +prompt("Enter Value 2 for Division Operation")
var divide = amount1 / amount2

document.write(
    "<table border=1px>"+
    "<tr>"+
    "<th>"+"ADDITION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+add+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+"SUBTRACTION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+subtract+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+"MULTIPLICATION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+multiply+"</td>"
    +"</tr>"+

    "<tr>"+
    "<th>"+"DIVISION"+"</th>"
    +"</tr>"+
    "<tr>"+
    "<td>"+divide+"</td>"
    +"</tr>"

    +"</table>"
)

if(add > (subtract,multiply,divide)){
    document.write("Addition value is the highest value in the above table")
}

if(subtract > (add,multiply,divide)){
    document.write("Subtraction value is the highest value in the above table")
}

if(multiply > (add,subtract,divide)){
    document.write("Multiplication value is the highest value in the above table")
}

if(divide > (add,subtract,multiply)){
    document.write("Division value is the highest value in the above table")
}
    