window.addEventListener("load", () => {
   //   const h1 = document.querySelector("h1");
   document.querySelectorAll("h2");
   //   h1.textContent = "New Text";
 
   document.querySelector("section").querySelector("h1").textContent = "TEXT";
 
   $("section > h1 > span").text("TEXT");
 
   const h2Collection = $("h2");
 
   [...h2Collection].forEach((el) => (el.textContent = "Updated text"));
 
   console.log([1, 2, 3, 4], h2Collection, "!!!!");
 
   $("body").on("click", () => {
     console.log("CLICKED");
     $(document.body.childNodes).fadeOut(1000).fadeIn(1000);
   });
 
  //  $("button").dblclick(function () {
  //    $(this).hide();
  //  });
 


   //   $("body").mousemove((e) => {
   //     $("h1").offset({ left: e.pageX, top: e.pageY });
   //   });
 
   //   $("h1").text("xxxxxxxxxxx").fadeOut(1000).fadeIn(1000);


 });

