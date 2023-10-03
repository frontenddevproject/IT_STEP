const cards = document.querySelectorAll(".country-card");

[...cards].forEach((card) => {
   card.onclick = () => {
      [...cards].forEach((card) => card.style.border = "1px solid black");
      card.style.border = "1px solid lime";

      console.log("Outer script_1 works - Change border's color of card");
   }
})