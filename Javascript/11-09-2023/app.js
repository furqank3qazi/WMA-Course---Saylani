// function abc (){
//     console.log("Hello");
// }

// abc();
// abc();
// abc();
// abc();
// _---------------------------------------- //---------------------------------
// function abc(name){
//     console.log(name);
// }

// abc("Furqan Qazi");
// abc("Safeer");

// _---------------------------------------- //---------------------------------

// function myPush (name, fatherName, gender){
//     console.log(gender);
//     console.log(fatherName);
// }
// myPush("Furqan Qazi", "Abdul Qadir Qazi", "Male");

// _---------------------------------------- //---------------------------------

// function abc(a,b){
//     var output = a * b;
//     return output;
// }
// console.log(abc(5,5));
// console.log(abc(5,5)+3);

// _---------------------------------------- //---------------------------------

// var number = prompt("Enter any number");

// if (number < 0) {
//     console.log("The Fictorial for Negative Number does not exist");
// }
// else if (number === 0){
//     console.log("The Fictorial for 0 is 1");
// }
// else {
//     let fact = 1;
//     for (i = 1; i<= number; i++){
//         fact *= +1;
//         console.log(fact *=i);
//     }
// }


// _---------------------------------------- //---------------------------------

// var duplicatevaluesArray = ["furqan", "safeer", "annan", "furqan"];

// if (duplicatevaluesArray[0] === duplicatevaluesArray[1] || duplicatevaluesArray[0] === duplicatevaluesArray[2] || duplicatevaluesArray[0] === duplicatevaluesArray[3])
// {
//     duplicatevaluesArray.shift()
// }


// console.log(duplicatevaluesArray);

// _---------------------------------------- //---------------------------------

var duplicatevaluesArray = ["furqan", "safeer", "safeer", "safeer", "furqan", "hannan", "furqan", "furqan", "anees", "furqan"];

for (i = 0; i <= duplicatevaluesArray.length; i++)
    {
        for (j = 0; j <= duplicatevaluesArray.length; j++)
        {
            if (duplicatevaluesArray[i] === duplicatevaluesArray[j] && i !== j){
                duplicatevaluesArray.splice(j, 1);
            }
        }
   
        }
    



console.log(duplicatevaluesArray);
