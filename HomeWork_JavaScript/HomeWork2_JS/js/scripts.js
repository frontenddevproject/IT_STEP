// ------------------------------------------Task 1-------------------------------------------------------------------------
let str1 = "Hello";
let str2 = "World";
let userLetter = prompt(`Task 1. \nPlease enter any letter(s) or symbol(s) that replace it by "*" in words "${str1}" and "${str2}". \nEnter characters according to
register`);

if (userLetter.length === 0){
   userLetter = prompt(`Please enter any character`);
   }

if (userLetter.length > 0) {
   if (str1.includes(userLetter) === true || str2.includes(userLetter) === true) {
      str1 = str1.replaceAll(userLetter, "*");
      str2 = str2.replaceAll(userLetter, "*");
      alert(`Result: "${str1}", "${str2}"`);
   }
      else{
         alert(`These words do not contain such character(s)`);
      }
}
   else {
      alert(`GoodBye!`);
   }

//--------------------------------------------Task 2----------------------------------------------------------------------

let num1 = +prompt("Task 2. Determination of the arithmetic mean of three numbers. \nEnter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");

if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
   alert("Not everything that you entered is numbers.\nPlease check if the numbers are entered correctly");
}
   else {
      let average = (num1 + num2 + num3) / 3;
      alert(`The arithmetic mean of the numbers ${num1}, ${num2}, ${num3} is ${average.toFixed(4)}`);
   }
   
//--------------------------------------------------------------------------------------------------------------------------