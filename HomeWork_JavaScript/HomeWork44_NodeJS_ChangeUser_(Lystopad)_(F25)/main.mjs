import { user } from "./utils.mjs";
// import data from "./data.json" assert {type: "json"}
import { getData } from "./filesOperations.mjs";
import fs from "fs";

function changeUser(newUserData, indexOfChangedUser) {
  if (0 <= indexOfChangedUser && indexOfChangedUser < this.length) {
    const changedUser = this[indexOfChangedUser];

    for (let newUserDataKey in newUserData) {
      changedUser[newUserDataKey] = newUserData[newUserDataKey];
    }

    fs.writeFileSync("data.json", JSON.stringify(this));

  } else {
    console.log("Please enter correct index of user");
  }
}

getData()
  .then((data) => changeUser.call(data, user, 9))
  .catch((e) => console.log(e, "Something is wrong"));
