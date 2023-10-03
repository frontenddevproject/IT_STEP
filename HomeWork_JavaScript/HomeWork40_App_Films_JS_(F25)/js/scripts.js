class App {
   static API_KEY = "7f9451dc34msh40dd5dba6adf75ep15ee18jsn6a82f7114f0d";
   static SEARCH_URL = "https://online-movie-database.p.rapidapi.com/auto-complete?q=";

   static DEFAULT_HEADERS = {
		'X-RapidAPI-Key': App.API_KEY,
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	};

   static searchBtn = document.getElementById("search-btn");
   static inputFilm = document.getElementById("input-field");
   static output = document.getElementById("output");
   

   constructor (data = [], watchList = []) {
      this.data = data;
      this.watchList = watchList;

      App.searchBtn.onclick = () => this.onButtonClick();
   }

   onButtonClick() {
      this.getDataBySearch(App.inputFilm.value).then(() => {
         App.inputFilm.value = "";
         console.log(this.data, "Data");

         this.renderData(this.data, App.output);
      });
   }

   async getDataBySearch(filmName = "") {
      try{
      const response = await fetch (App.SEARCH_URL + filmName, {
         headers: App.DEFAULT_HEADERS
      });
      const data = await response.json();
      this.data = data.d ? data.d : [];
      } catch (e) {
         alert ("Query is invalid"); 
      }
   }

   addWatchListData(film) {
      const oldWatchList = JSON.parse(localStorage.getItem("watchList") || "[]");
      localStorage.setItem("watchList", JSON.stringify([...oldWatchList, film]));
   }

   renderData(dataToRender, outputElement = App.output) {
      outputElement.innerHTML = "";

      dataToRender.forEach((film) => {
         const { id, l: title, q, qid, rank, s: actors, y: year, i: imageData } = film;
         const { imageUrl, width, height } = imageData 
            || { imageUrl: "https://static.vecteezy.com/system/resources/previews/007/160/087/original/video-icon-video-symbol-play-video-sign-free-vector.jpg",
                 width:350,
                 height:350 };

         outputElement.innerHTML += `<div class="film-elem">
            <div class="card-content">
               <div class= "img-container">
                  <img src="${imageUrl}">
               </div>
               <h3>${title}</h3>
               <span>${rank}</span>
               <span>${actors}</span>
               <span>${year || "unknown"}</span>
            </div>
            <div class="card-button">
               <button class="add-watchlist-btn" id="button-${id}">Add to WatchList</button>
            </div>
         </div>`

         const filmsBtn = document.querySelectorAll(".add-watchlist-btn");
         [...filmsBtn].forEach((btn, i) => {
            btn.onclick = () => {
               this.addWatchListData(dataToRender[i]);
            }
         })
      });
   }

   renderWatchList() {}

}

new App();