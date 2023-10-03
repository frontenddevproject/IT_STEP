const context = {title: "I am context"};
const functions = [
	function a () {console.log("THIS FROM A", this)}, 
	function b () {console.log("THIS FROM B", this)}, 
	function c () {console.log("THIS FROM C", this)}, 
];

const arr = functions.map((el) => (typeof el === "function") ? el.bind(context)() : console.log (`${el} isn't function`));
	
