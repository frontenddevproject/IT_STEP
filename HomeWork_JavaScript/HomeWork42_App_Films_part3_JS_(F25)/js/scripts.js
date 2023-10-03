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

   static watchListOutput = document.getElementById("watchList");
   static watchListSwitcher = document.getElementById("watch-list-switcher");
   static watchListRandomBtn = document.getElementById("random-film");
   static watchListButton = document.querySelector(".header-btn");


   constructor (data = [], watchList = []) {
      this.data = data;
      this.watchList = watchList;

      App.searchBtn.onclick = () => this.onButtonClick();
      App.watchListSwitcher.onclick = () => App.watchListSwitcher.checked === true ? this.renderWatchList() : this.renderMainPage();
      
      App.watchListRandomBtn.onclick = () => {
         [...document.querySelectorAll(".film-elem")].forEach((el) => {
            el.style.boxShadow = "none";
            if (this.checkIfWatchListContainsFilm(el.id)) {
               el.style.border = "2px solid greenyellow";
               
            } else {
               el.style.border = "2px solid white";
            }
         })
         const randomFilmData = 
            this.getRandomFilm(
               App.watchListSwitcher.checked === true
                  ? this.getWatchListData()
                  : this.data
            ) || null;
            
            if (!randomFilmData) return alert("There is no random film");

            const randomFilmElement = document.querySelector(`#${randomFilmData.id}`);
            randomFilmElement.style.border = "2px solid yellow";
            randomFilmElement.style.boxShadow = "0 0 20px yellow";

            randomFilmElement.scrollIntoView({behavior:"smooth", block:"center"})
      };
      
      App.inputFilm.oninput = (event) => App.watchListSwitcher.checked === true ? this.onInputChange(event) : null;
   }

   onInputChange(event) {
      const watchList = this.getWatchListData();
      const filterFilm = watchList.filter((film) => film.l.toLowerCase().includes(event.target.value));
      this.renderData(filterFilm, App.watchListOutput, true)
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

   getRandomFilm(films) {
      return films[Math.floor(Math.random() * films.length)];
   }

   getWatchListData() {
      return JSON.parse(localStorage.getItem("watchList") || "[]");
   }

   addWatchListData(film) {
      const oldWatchList = this.getWatchListData();
      localStorage.setItem("watchList", JSON.stringify([...oldWatchList, film]));
   }

   removeWatchListData(id) {
      const oldWatchList = this.getWatchListData();
      localStorage.setItem("watchList", JSON.stringify([...oldWatchList].filter((film) => film.id !== id)));
   }

   checkIfWatchListContainsFilm(id) {
      return this.getWatchListData().find((film) => film.id === id) ? true : false;
   }

   renderData(dataToRender, outputElement = App.output, isUsingAsWatchList = false) {
      outputElement.innerHTML = "";

      dataToRender.forEach((film) => {
         const { id, l: title, q, qid, rank, s: actors, y: year, i: imageData } = film;
         const { imageUrl, width, height } = imageData 
            || { imageUrl: "https://static.vecteezy.com/system/resources/previews/007/160/087/original/video-icon-video-symbol-play-video-sign-free-vector.jpg",
                 width:350,
                 height:350 };

         const isFilmAddedToWatchList = this.checkIfWatchListContainsFilm(id);

         outputElement.innerHTML += `<div id="${id}" class="film-elem ${isFilmAddedToWatchList
            ? "watch-list-film" 
            : ""
         }">
            <div class="card-content">
               <div class= "img-container">
                  <img src="${imageUrl}">
               </div>
               <h3>${title}</h3>
               <div class="film-description">
                  <span>Rating:${rank}</span>
                  <span>Actors:${actors}</span>
                  <span>Year:${year || "unknown"}</span>
               </div>
            </div>
            <div class="card-button">
               <button class="btn add-watchlist-btn" id="button-${id}">${isFilmAddedToWatchList 
                  ? "Delete from WatchList" 
                  : "Add to WatchList"}</button>
            </div>
         </div>`

         const filmsBtn = document.querySelectorAll(".add-watchlist-btn");
         const renderedFilms = document.querySelectorAll(".film-elem");
         [...filmsBtn].forEach((btn, i) => {
            btn.onclick = (event) => {
               const currentFilm = dataToRender[i] || null;
               if(this.checkIfWatchListContainsFilm(currentFilm.id)) {
                  this.removeWatchListData(currentFilm.id);
                  isUsingAsWatchList && this.renderData(this.getWatchListData(), App.watchListOutput, true);
                  btn.textContent = "Add to WatchList";
                  const buttonFromMain = App.output.querySelector(`#${btn.id}`);
                  const buttonFromWatchList = App.watchListOutput.querySelector(`#${btn.id}`);

                  if (buttonFromMain) buttonFromMain.textContent = "Add to WatchList";
                  if (buttonFromWatchList) buttonFromWatchList.textContent = "Add to WatchList"
               } else {
                  this.addWatchListData(currentFilm);
                  if (!isFilmAddedToWatchList) renderedFilms[i].classList.add("watch-list-film");
                  btn.textContent = "Delete from WatchList";
                  const buttonFromMain = App.output.querySelector(`#${btn.id}`);
                  const buttonFromWatchList = App.watchListOutput.querySelector(`#${btn.id}`);

                  if (buttonFromMain) buttonFromMain.textContent = "Delete from WatchList";
                  if (buttonFromWatchList) buttonFromWatchList.textContent = "Delete from WatchList"
               }

               
            }
         })
      });
   }

   renderWatchList() {
      App.output.style.display = "none";
      App.watchListOutput.style.display = "flex"
      const watchListData = this.getWatchListData();
      App.watchListButton.textContent = "Go to main page";

      App.inputFilm.value = "";
      App.searchBtn.style.display = "none"
      
      this.renderData(watchListData, App.watchListOutput, true);

   }
   renderMainPage() {
      App.output.style.display = "flex";
      App.watchListOutput.style.display = "none"
      App.searchBtn.style.display = "inline-block"
      App.watchListButton.textContent = "Go to watchlist";
   }
};

new App();