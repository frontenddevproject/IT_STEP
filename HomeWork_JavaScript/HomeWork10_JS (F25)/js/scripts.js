//------------------------------------Task 1--------------------------------------------

class SuperrArray extends Array {
	constructor (arr) {
		super(...arr);
		};
	
	myAt(index){
		const obj = {};

		if (index >= 0){
				obj.element = this[index];			
			}	
			else{
					obj.element = this.reverse()[Math.abs(index) - 1];		
			}
		obj.array = this;

		return obj;	
	}

	myCopy (arr) {
		const copyArr = [];
		if (Array.isArray(arr)){
			for (let i = 0; i < arr.length; i = i + 1) {
				copyArr[i] = arr[i];
			// arr.forEach(el => copyArr.push(el)); ------ 2-nd method instead of for loop
			}
		} 
				else{
					console.log("It's not array");
				}
		return copyArr;
	}
}

const newObj = new SuperrArray([1,2,3]);
console.log(newObj.myAt(-1), "method At");
console.log(newObj.myCopy([1,2,3]), "method Copy");


//--------------------------------------Task 2----------------------------------------------------

class Human{
	#age;
	
	get age() {
		return this.#age
	}

	constructor (name, age){
		this.name = name;
		this.#age = age;
	}

	unprivate(variableName) {
		return this[variableName];
	}
}

const human = new Human("Alex",45);
console.log("age", human.unprivate("age"));

