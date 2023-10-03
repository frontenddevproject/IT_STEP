// ---------------------------PRIMITIVES------------------------------------------------
console.log("PRIMITIVES");
// ---------------------------Task 1-------------------------------------------------------
console.log("Task 1");

const searchSubstring = (str, substr) => str.includes(substr);

console.log(searchSubstring("hello", "ll"));
console.log(searchSubstring("hello", "t"));

// ----------------------------Task 2-----------------------------------------------------
console.log("");
console.log("Task 2");

const diff = (number1, number2) => (number1 >= number2) ? (number1 - number2) : (number2 - number1);

console.log (diff(100, 50));
console.log (diff(-65, 125));
console.log (diff(100, 100));

// ---------------------------FUNCTION-----------------------------------------------------
// ---------------------------Task 3-------------------------------------------------------
console.log("");
console.log("FUNCTION");
console.log("Task 3");

const fn = function (a, b) {
	this.a = a;
  	this.b = b;

 	return this;
}

const fn2 = function (...arguments) {
	fn.apply(this, arguments);
}

Object.defineProperty(fn2.prototype, 'constructor', {
	value: fn2, enumerable: false, writable: true 
});
fn2.prototype = Object.create(fn.prototype);


const user = new fn2("name", "Alex");
console.log(user);

// -------------------------------ARRAY------------------------------------------------------------------
// ------------------------------Task 4--------------------------------------------------------------------
console.log("");
console.log("ARRAY");
console.log("Task 4");

const arr = [101, 88, 77, 200, 300, -96];
const moreThan100 = arr.filter((el) => el > 100);
console.log(moreThan100);

// ----------------------------------Task 5---------------------------------------------------------------
console.log("");
console.log("Task 5");

const reverseArray = (arr) => arr.length % 2 === 0 ? arr.reverse() : arr;

const array1 = [101, 88, 77, 200, 300, -96]; 
const array2 = [101, 88, 77, 200, 300];

console.log(reverseArray(array1), "even number of array elements");
console.log(reverseArray(array2), "odd number of array elements");


// ----------------------------------------CLASSES---------------------------------------------------------
// -------------------------------Task 6--------------------------------------------------------------------
console.log("");
console.log("CLASSES");
console.log("Task 6");

class YamahaSound {
	constructor (name, type, sensitivity, maxAmplifierPower, material, price){
		this.name = name;
		this.type = type;
		this.sensitivity = sensitivity;
		this.maxAmplifierPower =maxAmplifierPower;
		this.material = material;
		this.price = price;
	}
	showInfo() {
		console.table(this);
	}
}

class YamahaNS777 extends YamahaSound {
	constructor(name, type, sensitivity, maxAmplifierPower, numberSpeakerUnits,material, price) {
		super(name, type, sensitivity, maxAmplifierPower,material, price);

		this.numberSpeakerUnits = numberSpeakerUnits;
	}

	showInfo() {
		console.log(this);
	}
}

const yamahaNSf51 = new YamahaSound("Yamaha NS-F51", "column", [89,"db"],[240, "W"], "Wood", [200, "euro per unit"] );
const yamahaNS777 = new YamahaNS777("Yamaha NS-777", "column", [89,"db"],[250, "W"], 4, "Wood", [460, "euro per unit"] );
yamahaNSf51.showInfo();
yamahaNS777.showInfo();