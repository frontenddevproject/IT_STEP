const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitButton = document.getElementById("submit");
const userEmailOutput = document.getElementById("user-email");
const userPasswordOutput = document.getElementById("user-password");
const clearButton = document.getElementById("logout")

let user = localStorage.getItem("user") 
? JSON.parse(localStorage.getItem("user")) 
: undefined;

if (user) {
	const {email, password} = user;
	userEmailOutput.textContent = email;
	userPasswordOutput.textContent = password;

}

submitButton.onclick = () => {
	const email = emailField.value;
	const password = passwordField.value
	user = {email, password};

	userEmailOutput.textContent = email;
	userPasswordOutput.textContent = password;


	emailField.value = "";
	passwordField.value="";
	localStorage.setItem("user", JSON.stringify(user))
}

clearButton.onclick = () => {
	userEmailOutput.textContent = "";
	userPasswordOutput.textContent = "";
	localStorage.removeItem("user");
}