
const btn = document.getElementById("btn");
const username = document.getElementById("search-name");
const warning = document.getElementById("warning");


btn.addEventListener('click', async (e) => {
      if (username.value == "") {
            warning.innerText = "* Please enter a username";
      } else {
            localStorage.setItem("user", username.value)
           window.location.href = "../profile.html"

      }
      console.log(username);
})

