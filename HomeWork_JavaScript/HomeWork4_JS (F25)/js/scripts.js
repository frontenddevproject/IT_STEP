//--------------------------------------Task 1------------------------------------------------------------------------------------------------------

const num1 = +prompt("Task 1. Determination of the arithmetic mean of five numbers. \nEnter first number");
const num2 = +prompt("Enter second number");
const num3 = +prompt("Enter third number");
const num4 = +prompt("Enter fourth number");
const num5 = +prompt("Enter fifth number");
if (isNaN (num1) || isNaN (num2) || isNaN (num3) || isNaN (num4) || isNaN (num5))  {
   alert("Not everything that you entered is numbers.\nPlease check if the numbers are entered correctly");
}
   else {    
      const average = (num1, num2, num3, num4, num5) => (num1 + num2 + num3 + num4 + num5) / 5;
      alert(`The arithmetic mean of the numbers ${num1}, ${num2}, ${num3}, ${num4}, ${num5} is ${average(num1, num2, num3, num4, num5).toFixed(3)}`);
   }

//--------------------------------------Task 2---------------------------------------------------------------------------------------------------------

const x = +prompt("Task 2. Сalculating the square of a number. \nEnter the number");
if (isNaN (x))  {
   alert("Please check if the numbers are entered correctly");
}
   else {    
      const squareNum = (x) => (x * x);
      alert(`The square of the number ${x} is ${squareNum(x)}`);
   }

//--------------------------------------Task 3---------------------------------------------------------------------------------------------------------

const str = prompt("Task 3. Remove all hashtag in a string. \nEnter any string with #") || "#This str#ing was with# ##### hashtag.";
const noHashtag = (anyString) => anyString.replaceAll("#","");
alert(`Result: ${noHashtag(str)}`);