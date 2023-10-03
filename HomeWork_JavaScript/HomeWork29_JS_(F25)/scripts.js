class Service{
   constructor (url) {
      this.url = url;
   }

   async getRequest() {
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
   }

   async postRequest(data) {
      const response = await fetch(this.url, {
         method: "POST",
         body: JSON.stringify(data),
         headers: {
            "Accept":"aplplication/json",
            "Content-type":"application/json; charset=UTF-8"
         }
      });
      const payload = await response.json();
      return payload
   }
   async updateRequest(methodOfUpdateRequest, id, data) {
      const response = await fetch( `${this.url}/${id}`, {
         method: methodOfUpdateRequest,
         body: JSON.stringify(data),
         headers: {
            "Accept":"aplplication/json",
            "Content-type":"application/json; charset=UTF-8"
         }
      });
      const payload = await response.json();
      return data = {payload, methodOfUpdateRequest}
   }

   async deleteRequest(id) {
      const response = await fetch(`${this.url}/${id}`, {
      method: "DELETE",
   })
   const status = await response.status;
   return status}
}


class PostService extends Service {
   constructor(url) {
      super(url)
   }
}

class UserService extends Service {
   constructor (url) {
      super (url);
   }
}

class TodoService extends Service {
   constructor (url) {
      super(url)
   }
}

class UserRealService extends Service {
   constructor (url) {
      super(url)
   }
}

class ProjectsRealServer extends Service{
   constructor (url) {
      super(url)
   }
}

// --------------------------USERS-------------------------------------------------------


const userRealService = new UserRealService("https://learning-server.onrender.com/users");

// ----------------------GET Users----------------------------------------------------------
userRealService.getRequest()
.then((data) => console.log(data, "Users from real server"))
.catch((err) => console.error(err));

// ---------------------POST User----------------------------------------------------------
userRealService.postRequest({
   name: "Alex",
   age: 36,
   location: "Avdiivka",
   salary: 3000,
   skills: ["HTML", "CSS"]
})
.then((data) => console.log(data,"Creating a new user on the real server"))
.catch((err) => console.error(err));

// ---------------------PATCH User----------------------------------------------------------

userRealService.updateRequest("PATCH", "64413f492a9adaf35be14379", {
   location: "Kyiv",
   skills: ["HTML", "CSS", "JavaScript"]
})
.then(({payload, methodOfUpdateRequest}) => console.log(payload, `update User - method ${methodOfUpdateRequest}`))
.catch((err) => console.error(err));;




// ------------------------------PROJECTS-----------------------------------------------------------------

const projectsRealServer = new ProjectsRealServer("https://learning-server.onrender.com/projects");

// ----------------------GET Projects------------------------------------------------------------

projectsRealServer.getRequest()
.then((data) => console.log(data, "Projects from real server"))
.catch((err) => console.error(err));


// -----------------------POST Project------------------------------------------------------------------

projectsRealServer.postRequest({
   name: "My Project (Lystopad Alex)",
   duration: 13140,
   users: ["6441484a216b1125d60c2b37", "6436a028597febb865f44a80"],
})
.then((data) => console.log(data, "Creating a new project on the real server"))
.catch((err) => console.error(err));