const user = {
   name: "Tom Hanks",
   age: 66,
 };
 
 function registerUser({ name, age, city, adress, email, password }) {
   if (!password) return console.log(`Password is bad`);
   console.log(`User registered: ${name} ${email}`);
 }
 
 function authUser({ email, password, name, age }) {
   console.log(`User auth: ${email} ${password}`);
 }
 
 function addAddress({ email, address }) {
   console.log(`User added adress: ${email} ${address}`);
 }
 
 async function dataToTheServer (data) {
    const response = await fetch("https://learning-server.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Accept":"aplplication/json",
          "Content-type":"application/json; charset=UTF-8"
         }
    });
    const payload = response.json();
    return (payload);
  }

 const connectionsOfForms = {
   registerForm: () => {
     const section = document.querySelector("#registration-section");
 
     const emailField = section.querySelector(".email-field");
     const passwordField = section.querySelector(".password-field");
     const cityField = section.querySelector(".city-field");
     const addressField = section.querySelector(".address-field");
 
     const button = section.querySelector("button");
 
     button.onclick = () => {
       const email = emailField.value;
       const password = passwordField.value;
       const city = cityField.value;
       const address = addressField.value;
 
       //cleaning fileds
       emailField.value = "";
       passwordField.value = "";
       cityField.value = "";
       addressField.value = "";
 
       const registerAdaptedUser = new UserAdapter(
         { ...user, email, password, city, address },
         "registration"
       );
       console.log(registerAdaptedUser, "registredAdaptedUser");
       registerUser(registerAdaptedUser);
     };
   },
 
   authForm: () => {
     const section = document.querySelector("#auth-section");
 
     const emailField = section.querySelector(".email-field");
     const passwordField = section.querySelector(".password-field");

     const button = section.querySelector("button");
 
     button.onclick = () => {
      const email = emailField.value;
      const password = passwordField.value;

       emailField.value = "";
       passwordField.value = "";
 
       const authAdaptedUser = new UserAdapter(
         { ...user, email, password },
         "auth"
       );
       console.log(authAdaptedUser, "authAdaptedUser");
       authUser(authAdaptedUser);
     };
   },

   addAdressForm: ()  => {
      const section = document.querySelector("#add-address-section");
      const emailField = section.querySelector(".email-field");
      const addressField = section.querySelector(".address-field");
      const button = section.querySelector("button");

      button.onclick = () => {
         const email = emailField.value;
         const address = addressField.value;
         emailField.value = "";
         addressField.value = "";

         const addressAdaptedUser = new UserAdapter (
            {...user, email, address},
            "add_address"
         );
         console.log(addressAdaptedUser, "addressAdaptedUser");
         addAddress(addressAdaptedUser);
      }

   },
   sendUserDataToTheServer: () => {
    const section = document.querySelector("#server-user-data-section");
    const addressField = section.querySelector(".address-field");
    const salaryField = section.querySelector(".salary-field");
    const skillsField = section.querySelector(".skills-field");
    const button = section.querySelector("button");

    button.onclick = () => {
      const location = addressField.value;
      const salary = salaryField.value;
      const skills = skillsField.value.trim().replaceAll(", ", ",").split(",");

      addressField.value = "";
      salaryField.value = "";
      skillsField.value = "";

      const serverAdapterUser = new UserAdapter (
        {...user, location, salary, skills},
        "send_server_user_data"
      )
      dataToTheServer(serverAdapterUser)
      .then((data) => console.log(data, "Creating the new user on the server"))
      .catch((err) => console.error(err));
    }
   }


 };
 
 connectionsOfForms.registerForm();
 connectionsOfForms.authForm();
 connectionsOfForms.addAdressForm();
 connectionsOfForms.sendUserDataToTheServer();
 
 class UserAdapter {
   static cases = {
     registration: (recivedData) => {
       const { name, age, password } = recivedData;
       recivedData.info = `${name} ${age}`;
       if (password.length < 4) return { ...recivedData, password: null };
 
       return recivedData;
     },
     auth: (recivedData) => {
         const {email, password} = recivedData;
         recivedData.info = `${email} ${password}`;

       return recivedData;
     },

     add_address: (recivedData) => {

       const {email, address} = recivedData;
       recivedData.info = `${email} ${address}`;
 
       return recivedData;
     },

     send_server_user_data: (recivedData) => {
      const {lacation, salary, skills} = recivedData;

      return recivedData
     }
   };
 

   constructor(data, adapterCase) {
     const adaptiveData = UserAdapter.cases[adapterCase]
       ? UserAdapter.cases[adapterCase](data)
       : {};
 
     return { ...data, ...adaptiveData };
   }
 }
 

