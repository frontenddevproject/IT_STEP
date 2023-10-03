//--------------------------------------Task 1-----------------------------------------------------
const a = 20;
const b = 30;
const c = 0;
Boolean(a) && Boolean(b) && Boolean(c) ? alert("Falsy not detected") : alert("Falsy detected");

//--------------------------------------Task 2-----------------------------------------------------

const str1 = prompt("Task 2 \nEnter first string");
const str2 = prompt("Enter second string");
function biggestString (str1, str2) {
   if (str1.length > str2.length){
      return str1;      
   }
      else if (str1.length < str2.length) {
         return str2;   
      }
}
biggestString (str1, str2) === undefined ? alert("The strings have an equal length") : alert(`The biggest string is "${biggestString (str1, str2)}"`);
