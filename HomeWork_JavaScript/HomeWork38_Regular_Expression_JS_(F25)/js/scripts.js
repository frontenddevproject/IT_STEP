// Task 1
const stringWithoutNumber = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos voluptatem nam esse iste temporibus incidunt. Magni maiores distinctio rem."
const stringWithNumber = "Lorem ipsum dolor sit2 amet consectetur adipisicing elit. Doloribu3s quos voluptatem nam esse is5te temporibus incidunt. Magni maiores distinctio rem5555."

const regexp = new RegExp(/\d/);
console.log(regexp.test(stringWithoutNumber),"There aren't any numbers in the string");
console.log(regexp.test(stringWithNumber),"There are numbers in the string");

// Task 2

function checkString (str) {
   const regexp2 =/[a-zа-я]/;
   const handleStr = str.split(".").join(" ").split(" ").join("").split("");
   handleStr.some(((letter) => regexp2.test(letter) === false)) 
      ? console.log("There are uppercase letters in the string") 
      : console.log("There are all letters in lowercase in the string");
   }
const str1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos voluptatem nam esse iste temporibus incidunt. Magni maiores distinctio rem."
const str2 = "all words in lowercase";
const str3 = "используем кириллицу"

checkString(str1);
checkString(str2);
checkString(str3);

//  Task 3

const checkPalindrome = (str) => {
   const strToArr = str.split("");
   !strToArr.every((el, i, arr) => el.toLowerCase() == arr.at(-(i + 1)).toLowerCase()) ? console.log(`"${str}" isn't a palindrome`) : console.log(`"${str}" is a palindrome`)
}
checkPalindrome("Anna");