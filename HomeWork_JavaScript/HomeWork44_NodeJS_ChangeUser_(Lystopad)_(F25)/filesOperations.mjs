import fs from "fs";

export async function getData() {
   const responseData = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await responseData.json();

   fs.writeFileSync("data.json",JSON.stringify(data));
   return data;
}
