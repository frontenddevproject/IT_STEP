console.log('Task №1');
   let myName = 'Oleksandr';
   let myAge = 36;
   let myProfession = 'pasteurization operator';
   console.log("Hi, my name's " + myName + ". " + "I'm " + myAge + " years old. " + "I'm a " + myProfession + " at a food industry company.");
   console.log('');

console.log('Task №2');
   console.log("x = (a + b + c) / d, a = 20, b = a / 5, c = 40, d = 50. Calculate x");
   let a = 20;
   let b = a / 5;
   let c = 40;
   let d = 50;
   let x = (a + b + c)  / d;
   console.log("x = " + x);
   console.log('');

console.log('Task №3');
   let str1 = "Hello";
   let str2 = "World!";
   let value = str1.length - str2.length;
   console.log("A string " + "'" + str1 + "'" + " consists of " + str1.length + " character(s).");
   console.log("A string " + "'" + str2 + "'" + " consists of " + str2.length + " character(s).");
   if (value > 0) {
      console.log("The length " + "'" + str1 + "' " + "longer than the length " + "'" + str2 + "' " + "by " + Math.abs(value) + " character(s)."); 
      }
      else if (value < 0) {
         console.log("The length " + "'" + str1 + "' " + "less than the length " + "'" + str2 + "' " + "by " + Math.abs(value) + " character(s).");
      }
         else {
         console.log("The length " + "'" + str1 + "' " + "equals the length " + "'" + str2 + "'");
         }
   console.log('');