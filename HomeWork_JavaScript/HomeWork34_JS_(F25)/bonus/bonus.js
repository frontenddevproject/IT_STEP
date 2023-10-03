window.addEventListener("load", () => {
   let textButton = "Button";
   for(let i = 0; i < 5; i++) {
      $("#pract").append(`<button class="btn text-btn${i}" style="margin-right:10px"></button>`);
      $(`.text-btn${i}`).text(textButton);
      textButton = textButton.slice(0, -1);
   }
});   