
// ----------------------------Task 2 --------------------------------------------------------
const arr = [1,5,6,7];
let i = 0;
let sum = 0;
while (i <arr.length) {
	sum += arr[i];
	i++;
}
alert(`The sum of the array elements [${arr}] is ${sum}.`);
// ----------------------------Task 1---------------------------------------------------------
class UserInterface {
	   static greetings = ["hola", "hello"];
	   static scenarios = {
	     "add_greeting": () => {
	       const newGreeting = prompt("Enter greeting");
	       if (UserInterface.greetings.find((el) => el === newGreeting )) {
	         return alert("This greeting is already here");
	       }
	       UserInterface.greetings.push(newGreeting);
	       UserInterface.greetings.forEach((el, i, arr) => arr[i] = el + "!");
	       console.log("greetings", UserInterface.greetings);
	       alert(UserInterface.greetings);
	     },
	     "greetings": () => {
	       const msg = prompt("Enter greeting");
	       if (UserInterface.greetings.includes(msg)) {
	         alert("Greetings");
	       }
	     },
	     "remove_greetings": () => {
	       const wordToRemove = prompt("Enter word to remove");
	       UserInterface.greetings = UserInterface.greetings.filter((e) => e !== wordToRemove );
	       alert("Word removed");
	     },
		  "replace_greeting": () => {
				const oldGreeting = prompt("Enter greeting to replace");
				if (UserInterface.greetings.includes(oldGreeting)){
					const newGreeting = prompt("Enter new greeting");
					UserInterface.greetings = UserInterface.greetings.filter((e) => e !== oldGreeting );
					UserInterface.greetings.push(newGreeting);
					alert ("The greeting replaced successfuly");
				}
					else {
						alert ("This greeting isn't in");
					}
		  },
		  "break": () => {
		  }
	   };
	   constructor () {
	     this.command(true);
	   }
	   command (isRecursive = false) {
	     this.command = prompt("Enter command");
	     const action = UserInterface.scenarios[this.command];
	     if (action) {
	       action();
	     }
	     if (isRecursive) {
	       new UserInterface();
	     }
	   }
	 }
	 new UserInterface();


