window.addEventListener("load", () => {

const prevBtn = document.querySelector("#previous");
const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const nextBtn = document.querySelector("#next");
let minCount = document.querySelector("#minutes");
let secCount = document.querySelector("#seconds");
const trackName = document.querySelector(".track-name");
const vizualBlock = document.querySelector(".music-visualization");
const canvas = document.querySelector("#canvas");

let audioSource = [];
let analyser;
let barHeigth =[];
let currentTrackIndex = 0;
const playList = [
   {
      name: "01. Aerosmith - Crazy.mp3",
   },
   {
      name: "02. Creedence - Have You Ever Seen The Rain.mp3",
   },
   {
      name: "03. Metallica - Nothing Else Matters.mp3",
   },
   {
      name: "04. Ozzy Osbourne - I Just Want You.mp3",
   },
   {
      name: "05. Red Hot Chili Peppers - Californication.mp3",
   },
];

const tracks = playList.map((el) => new Audio(`./tracks/${Object.values(el)}`));
let track = tracks[currentTrackIndex];

const audioContext = new AudioContext();
analyser = audioContext.createAnalyser();
analyser.fftSize = 64;
analyser.connect(audioContext.destination);

for (let i = 0; i < tracks.length; i++) {
   audioSource[i] = audioContext.createMediaElementSource(tracks[i]);
   audioSource[i].connect(analyser);
}
canvas.width = vizualBlock.offsetWidth;
canvas.heigth = vizualBlock.offsetHeight * 2;
const ctx = canvas.getContext("2d");


function renderName () {
   trackName.innerHTML = "";
   trackName.innerHTML = `
   <marquee  scrollamount="3">${Object.values(playList[currentTrackIndex])}</marquee>
   `  
}
renderName();
renderTime();
playBtn.onclick = () => {
   track.play()
   .then(() => {  
      playBtn.classList.add("btn-content-press");
      pauseBtn.classList.remove("btn-content-press");
      stopBtn.classList.remove("btn-content-press");
      !tracks[currentTrackIndex] ? renderName() : null ;
      // renderTime();
      })
   .then(() => {
      const bufferLength = analyser.frequencyBinCount;
      let dataArray = new Uint8Array(bufferLength);
      const barWidth = canvas.width / bufferLength;
      let x;
      let barHeigthArray = [];
      function animate () {
            x = 0
            ctx.clearRect(0, 0, canvas.width, canvas.heigth);
            analyser.getByteFrequencyData(dataArray);          
            for (let i = 0; i < bufferLength; i++) {
            barHeigth[i] = dataArray[i] / 1.5;
            ctx.fillStyle = "black";
            ctx.fillRect(x, canvas.heigth - barHeigth[i], barWidth, barHeigth[i]);
            x += barWidth;
            };
            requestAnimationFrame(animate);
         }
      animate();
      track. addEventListener("ended", () => {
         changeTrack.nextTrack();
         renderName();
      })
   });  
}
const changeTrack = {
   "nextTrack": function () {
                  track.currentTime = 0;
                  currentTrackIndex++;
                  if (tracks[currentTrackIndex]) {
                     track = tracks[currentTrackIndex];
                  } else {
                     currentTrackIndex = 0;
                     track = tracks[currentTrackIndex];
                  }
                  renderName();
               },

   "prevTrack": function () {
                  track.currentTime = 0;
                  currentTrackIndex--;
                  if (tracks[currentTrackIndex]) {
                  track = tracks[currentTrackIndex];
                  } else {
                  track = tracks.at(-1);
                  currentTrackIndex = tracks.length - 1;
                  }
                  renderName();
            }
};
nextBtn.onclick = () => {
   if (!track.paused || track.ended) {      
      track.pause();
      changeTrack.nextTrack();
      track.play();
      stopBtn.classList.remove("btn-content-press");
      playBtn.classList.add("btn-content-press");
   } else {
         changeTrack.nextTrack();
         renderName();
      };
};
prevBtn.onclick = () => {
   if (!track.paused) {
      track.pause();
      changeTrack.prevTrack();
      track.play();
      stopBtn.classList.remove("btn-content-press");
      playBtn.classList.add("btn-content-press");
   } else {
         changeTrack.prevTrack();
         renderName();
      }

};

pauseBtn.onclick = (animate) => {
   track.pause();
   playBtn.classList.remove("btn-content-press");
   pauseBtn.classList.add("btn-content-press");
   cancelAnimationFrame(animate);
}

stopBtn.onclick = (animate) => {
   track.currentTime = 0;
   track.pause();
   playBtn.classList.remove("btn-content-press");
   pauseBtn.classList.remove("btn-content-press");
   stopBtn.classList.add("btn-content-press");
   cancelAnimationFrame(animate);
}
  



function renderTime () {
   let seconds = 0;
   let minutes = 0;
   secCount.textContent = `${seconds}`;
   minCount.textContent = `${minutes}`;
   // setInterval (() => {
   //    secCount.textContent = `${seconds}`
   //    if (seconds > 59) {
   //       seconds = 0;
   //       secCount.textContent = `${seconds}`
   //       minutes++;
   //       minCount.textContent = `${minutes}`;    
   //    }
      
   //    seconds++;
      
   // }, 1000);
   // return secCount, minCount
}

}); 


