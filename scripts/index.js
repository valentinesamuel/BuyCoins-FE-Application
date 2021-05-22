import { getout, getUserData } from "./dataquery.js";

const btn = document.getElementById("btn");
const username = document.getElementById("search-name");


btn.addEventListener('click', async (e) => {
      getout(username.value);
      // const user = await getUserData(username.value);
      // console.log(user);
      window.location.href = "../profile.html"

})

