import fs from "fs";
import countryCodes from "country-codes-list";
import { HTMLConstructor } from "./htmlConstructor.mjs";

const data = JSON.parse(fs.readFileSync("./posts.json"));

function main(data) {
  const countriesLayouts = countryCodes
    .all()
    .map(
      (country) => `<div class="country-card">
        <p class="country-description">${country.countryNameEn}</p>
        <p class="country-description">${country.region}</p>
        <p class="country-description">${country.officialLanguageNameEn}</p>
    </div>`
    );

  const htmlConstructor = new HTMLConstructor(
    "countries",
    countriesLayouts.join(""),
    `
    body {
      width:100vw;
    }
    .card-wrapper{
      width:90%;
      margin:auto;
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap:10px;
      padding:10px;
      border: 2px solid black;
    }
    .card-wrapper:hover{
      box-shadow: 0 0 15px #000;
    }
    h1 {
      text-align:center;
      padding:20px;
      font-size:30px;
      text-transform: uppercase;
    }
      .country-card {
         border: 1px solid black;
         padding: 5px;
         height: 200px;
      }
    `,
    `const wrapper = document.querySelector(".card-wrapper");
    wrapper.onclick = () => console.log("Inner script works - Clicked on the card wrapper");`,
    "../../../js/script1.js",
    "../../../js/script2.js"
  );

  htmlConstructor.generateFile("html/files/basic");

}


main(data);