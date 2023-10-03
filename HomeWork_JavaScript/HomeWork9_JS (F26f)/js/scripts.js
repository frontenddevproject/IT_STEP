//----------------------------Task 1--------------------------------------------------
const arr = ["Hello", "some", "words", "Hey", "HHH"];

console.log("Task 1\n1st version\n");
const newArr = [];
for (let word of arr) {
	if (word[0] === "H") {
		newArr.push(word);
	}
}
console.log(newArr);

console.log("");

console.log("2nd version\n")
let arr2 = [...arr];
for (let i = 0; i < arr2.length; i = i + 1) {
	if (arr2[i][0] != "H") {
		delete(arr2[i]);
	}
}
const newArr2 = arr2.filter(() => true);
console.log(newArr2);



//----------------------------Task 2-------------------------------------------------
console.log("\nTask 2");
function myPush (arr, ...arguments) {
	let newArr3 = arr.concat(...arguments);
	return newArr3;
}

console.log(myPush([1,4,5,9], "any", 23, "string", {name: "John"}, [1,56,87]));