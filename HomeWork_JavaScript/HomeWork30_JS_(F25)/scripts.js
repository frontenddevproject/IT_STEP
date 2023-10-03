class A {
   constructor (a) {
      this.a = "Hello, I'm class A";
   }
}

class B {
   constructor (b) {
      this.b = "Hello, I'm class B";
   }
}
class C {
   constructor (c) {
      this.c = "Hello, I'm class C";
   }
}

class Factory {
   static checkString = (obj) => {
      let result = false;
      for (let key in obj) {
         if (typeof obj[key] === "string") {
            result = true;
         } else {
            result = false;
            return result;
         }
      }
      return result;
    }

   constructor (obj) {

      if (obj.a) {
         return new A(obj);
      }

      if (Factory.checkString(obj)) {
         return new B(obj);
      }
      
      if (!obj.a && !Factory.checkString(obj)) {
         return new C(obj);
      }
   }
}

const user = {
   a: "Alex",
   b: 36
}
const value = new Factory(user);
console.log(value);
