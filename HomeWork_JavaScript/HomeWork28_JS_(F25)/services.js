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

// ------------POSTS---------------------------------------------------------
const postService = new PostService("https://jsonplaceholder.typicode.com/posts");

postService.getRequest().then((data) => console.log(data));
postService.postRequest({
   body: "my custom body",
   id: 102,
   title: "Title",
   userId: 11
}).then((data) => console.log(data, "POST request for Post"));

postService.updateRequest("PUT", 1, {
   id: 1,
   title: "Title change",
   body: "body",
}).then(({payload, methodOfUpdateRequest}) => console.log(payload, `update post - method ${methodOfUpdateRequest}`))

postService.deleteRequest(1).then((data) => console.log(data, "post deleted"))


// --------------------USERS-----------------------------------------------------

const userService = new UserService("https://jsonplaceholder.typicode.com/users");
userService.getRequest().then((data) => console.log(data));
userService.postRequest({
   body: "my custom body",
   id: 102,
   title: "Title",
   userId: 11
}).then((data) => console.log(data, "POST request for User"));

userService.updateRequest("PATCH", 1, {
   id: 1,
   title: "Title change",
   body: "body",
}).then(({payload, methodOfUpdateRequest}) => console.log(payload, `update user - method ${methodOfUpdateRequest}`))

userService.deleteRequest(1).then((data) => console.log(data, "user deleted"))

// --------------------TODOS-------------------------------------------------------

const todoService = new TodoService("https://jsonplaceholder.typicode.com/todos")

todoService.getRequest().then((data) => console.log(data));
todoService.postRequest({
   completed: false,
   id: 202,
   title: "Title",
   userId: 11
}).then((data) => console.log(data, "POST request for Todo"));

todoService.updateRequest("PUT", 1, {
   completed: true,
   id: 202,
   title: "Title",
   userId: 11
}).then(({payload, methodOfUpdateRequest}) => console.log(payload, `update todo - method ${methodOfUpdateRequest}`))

todoService.deleteRequest(1).then((data) => console.log(data, "todo deleted"));