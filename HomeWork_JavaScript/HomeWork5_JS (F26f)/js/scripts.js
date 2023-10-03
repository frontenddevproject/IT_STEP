//--------------------------------------Task 1------------------------------------------------------------------------------------------------------

const obj = {};
const fn = (key, value) => { 
   obj[key] = value; 
   return obj;
};
fn("name", "Alex");
console.log(fn("age", 36));

//------------------------------------------Task 2--------------------------------------------------------------------------------------------------
const items = {
   a: 10,
   b: 20,
   c: 30
};
let sum = 0;
for (let key in items) {
   if (typeof items[key] === "number") { 
   sum = sum + items[key];
   };
};
console.log(`The sum of the elements of the object is ${sum}`);