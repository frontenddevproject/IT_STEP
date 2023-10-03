// //--------------------------------------Task 1------------------------------------------------------------------------------------------------------
// console.log("Task 1");
// const arr = [1, 2, 100, 7];
// let sum = 0;

// for (let el of arr) {
// 	sum = sum + el;
// }

// console.log(`The sum of numbers in an array [${arr}] is ${sum}.`);
// console.log("");

// //--------------------------------------Task 2------------------------------------------------------------------------------------------------------
// console.log("Task 2");
// let arr2 = [1,2,3,4,5];

// const fn = (arr, i, newElement) => {
// 	arr[i] = newElement;
// 	return arr;
// };

// console.log(fn(arr2, 2, "Hello"));



// const arr = [1, 2, 3, 4, 5];
// const names = ["Igor", "Olena", "Oleg"];
// const ages = [{age: 10}, {age: 20}, {age: 30}];
// const  arrOfString = arr.map((el, i) => el + 10);
// console.log (arrOfString);

// const updatesAges = ages.map((object, i) => {
// 	object.age += 1;
// 	object.name = names[i];
// 	return object;
// });
// console.log(updatesAges);

// const arr = ["2", "4", "5"];
// const numArr = arr.map((el) => Number(el));
// console.log(numArr);

// const arr = ["1", 1, "hello", 100];
// const result = arr.filter((el) => typeof el === "number");
// console.log(result);

// const arr = [{age: 1}, {age: 20}, {age: 30}];

// const result = arr.filter((object) => object.age >5);
// console.log(result);
 
// const newArr = result.map((object) => {
// object.age + 20;
// return object;
// });
// console.log(object);


const users = [
	{name: "Igor", age: 20},
	{name: "Oleg", age: 22, city: "Kharkiv"},
	{name: "Vasya", age: 25, city: "Kyiv"},
	{name: "Vasya", age: 40, city: "Poltava"},
	{name: "Vasya", age: 30, city: "Poltava"}
];
bigAge = users[0];
const result = users.filter((object) => object.city);
users.forEach((object) => {
	if (object.age > bigAge.age) {
		bigAge = object;
	};

});
console.log(result);
console.log(bigAge);