const data = [
	{
		"name": "Abraham Marsh",
		"phone": "1-843-901-9977",
		"email": "morbi@google.org"
	},
	{
		"name": "Isabella Mcgowan",
		"phone": "1-874-933-8532",
		"email": "ac.feugiat@protonmail.couk"
	},
	{
		"name": "Leandra Levy",
		"phone": "(482) 150-2683",
		"email": "vitae.dolor@hotmail.couk"
	},
	{
		"name": "Shana Byrd",
		"phone": "1-134-348-2696",
		"email": "sit.amet@hotmail.edu"
	},
	{
		"name": "Victoria Vazquez",
		"phone": "(676) 677-3028",
		"email": "mauris.magna@yahoo.ca"
	}
];

const usersDataSection = document.getElementById("data");

function renderUsers (users) {
  usersDataSection.innerHTML = "";

  users.forEach(({name, phone, email}) => usersDataSection.innerHTML += `<div class="user-card">
    <p>${name}</p>
    <span>phone: ${phone}</span>
    <span>email: ${email}</span>    
  </div>`);
}

const promise = new Promise((resolve, reject) => {
  resolve(data)
}).then((obj) => {
  setTimeout(() => {
    renderUsers(obj);
  }, 5000)
});

