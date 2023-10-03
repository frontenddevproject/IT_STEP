//----------------------------Task 1-------------------------------------
console.log("Task 1");

const arr = [1, 2, 4, "I am not a number", "Hello", 100, 45];

const sum = arr.reduce((acc, el) => {
		if ( typeof el === "number") {
			acc = acc + el;
		}
	return acc;
}, 0);
console.log(arr, "source array");
console.log(`The sum of the array elements, which are numbers, is ${sum}`);
console.log("");


//----------------------------Task 2---------------------------------------
console.log("Task 2");

const arr2 = [{city: "lviv"}, {city: "Kyiv"}, {city: "dnipro"}];
const correctArr = [];
const incorrectArr = [];

arr2.forEach((obj) => {
	if (obj.city[0] === obj.city[0].toUpperCase()) {
		correctArr.push(obj);
	}
		else{
			incorrectArr.push(obj);	
		}
});
console.log(arr2, "source array");
incorrectArr.length > 0 ? console.log("Not all cities are capitalized") : console.log("All cities are spelled correctly");
console.log("These cities are written with a small letter\n", incorrectArr);
console.log("These cities are written correctly\n", correctArr);
console.log("");


//---------------------------Task 3-------------------------------------------
console.log("Task 3");

const arr3 = [];
new Array(6).fill("").reduce((acc) => {
	acc = Math.floor(Math.random()*100);
	return arr3.push(acc);
}, 0);

console.log(arr3);
