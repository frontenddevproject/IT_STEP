//--------------------------------------Task 1------------------------------------------------------------------------------------------------------
console.log("Task 1");
let obj = {};
const fn = function (f1, f2) {
	return obj = {
			result1: f1(),
			result2: f2()
         };
};
fn(() => String.fromCodePoint(0x1F63A), () => String.fromCodePoint(0x1F464));

// У якості value тут виводяться емоджи, які вказані в умові у дужках. Одразу не зрозумів, що можна було просто написати "res1" та "res2" :)

console.log(obj);
console.log("");

//-------------------------------------Task 2--------------------------------------------------------------------------------------------------------
console.log("Task 2");
const a = +prompt("Enter first number. \nIf you don't enter the number it will be 0");
const b = +prompt("Enter second number. \nIf you don't enter the number it will be 0");

const sum = (num1, num2) => String(num1).length + String(num2).length;

!isNaN(a) && !isNaN(b) ? console.log(`The sum of lengths of the numbers is ${sum(a, b)}.`) : console.log("Not everything that you entered is numbers.\nPlease check if the numbers are entered correctly");


