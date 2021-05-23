import { getUserData } from "./dataquery.js";
const form = document.getElementById("form");

const mobMenu = document.getElementById("mobile-menu");
const repoList = document.getElementById("repo-list");

const navImage = document.getElementById("nav-profile-image");
const bioImage = document.getElementById("bio-profile-image");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const name = document.getElementById("name");
const inuptedUsername = localStorage.getItem("user")

const repoNames = ['👩', '👨', '🧑', '👧', '👦', '👶', '🧒', '👵', '👴', '🧓', '👩‍🦰', '👨‍🦰', '👩‍🦱', '👨‍🦱', '👨‍🦲', '👳‍♂️', '🙆‍♀️', '🙆‍♂️', '🧏‍♀️', '🧏‍♂️', '💁‍♀️', '💁‍♂️', '🙋‍♀️', '🙋‍♂️']

createRepoList(repoNames)

dispatchData()
// fetch data and put it in a variable
// assign the various data to their respective container through their variable => Executed by dispatch data
// collect the repos array and put it in a variable that will replace the repoNames variable
//
function dispatchData() {
      console.log(bioImage.src)
      console.log(navImage.src)
      console.log(username.innerText)
      console.log(name.innerText)
      console.log(bio.innerText)
}

function createRepoList(listofRepos) {
      setTimeout(() => {
            listofRepos.forEach(eleme => {
                  const repo = document.createElement('div')
                  repo.classList.add('repository')
                  const repoMarkup = `<div class="repo-desc">
              <h3 class="repo-name"><a href="#">${eleme}</a></h3>
              <span>
                <div class="lng-color"></div>
                <span class="lng-name">TypeScript</span>
                <span class="last-updated">Updated 3 days ago</span>
              </span>
            </div>
            <div class="repo-status">
              <button>Star</button>
            </div>`

                  repo.innerHTML = "";
                  repo.innerHTML = repoMarkup;
                  repoList.appendChild(repo);
            })
      }, 2000);
}

form.value = inuptedUsername


mobMenu.addEventListener('click', e => {
      console.log('mobile');
      document.querySelector('#menu').classList.toggle('active');
})


