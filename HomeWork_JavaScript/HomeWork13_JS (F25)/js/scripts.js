//----------------------------Task 1-------------------------------------
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.onclick = () => {
	alert("If you see this message task 1 is completed :)\nBelow the button you can see how the span function works.");
};

//----------------------------Task 2-------------------------------------
const createSpan = (spanContent) => {
	const span = document.createElement("span");
	span.textContent = spanContent;
	document.body.appendChild(span);
};

createSpan("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos hic reprehenderit autem aliquid ex, vel, excepturi eum eveniet provident perferendis fugiat soluta facilis laudantium!");
createSpan("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quos hic reprehenderit autem aliquid ex, vel, excepturi.");
createSpan("Lorem ipsum dolor sit amet consectetur adipisicing elit. ");