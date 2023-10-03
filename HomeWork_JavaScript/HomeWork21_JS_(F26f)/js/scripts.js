
function MyClass (a, privateArguments) {
   this.a = a;
   
	function checkArguments (arrayArguments) {
		let acc = [];
		let newArr = [];
		arrayArguments.forEach((el, i) => {
			let data = Object.keys(el).join();
			if (!acc.includes(data)) {
				acc.push(data); 
				newArr.push(el)
			} 
			return  newArr
		})
		privateArguments = newArr
		return  privateArguments
	}
	
	checkArguments(privateArguments)

   privateArguments.forEach((obj) => {
     const key = Object.keys(obj)[0];
     const value = Object.values(obj)[0];
     Object.defineProperty(this, key, {value: value, enumerable: false, writable: false});
   }) 
   return this;

}

const instanceClass = new MyClass(10, [{private: "private2"}, {private: "private1"}, {private3: "private"}]);

console.log(instanceClass, "instance");