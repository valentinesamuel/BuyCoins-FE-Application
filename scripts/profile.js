import { getUserData } from "./dataquery.js";

const form = document.getElementById("form");

const mobMenu = document.getElementById("mobile-menu");
const repoList = document.getElementById("repo-list");

const navImage = document.getElementById("nav-profile-image");
const bioImage = document.getElementById("bio-profile-image");
const username = document.getElementById("username");
const totalRepoCount = document.getElementById("total-repo")
const bio = document.getElementById("bio");
const name = document.getElementById("name");
const queriedRepo = document.getElementById("queried-repo");

const inuptedUsername = localStorage.getItem("user")

const repoNames = ['👩', '👨', '🧑', '👧', '👦', '👶', '🧒', '👵', '👴', '🧓', '👩‍🦰', '👨‍🦰', '👩‍🦱', '👨‍🦱', '👨‍🦲', '👳‍♂️', '🙆‍♀️', '🙆‍♂️', '🧏‍♀️', '🧏‍♂️', '💁‍♀️', '💁‍♂️', '🙋‍♀️', '🙋‍♂️']


var data = await getUserData(inuptedUsername)
dispatchData(data)

async function dispatchData(UserData) {
      bioImage.src = UserData.data.user.avatarUrl;
      navImage.src = UserData.data.user.avatarUrl;
      username.innerText = UserData.data.user.login;
      name.innerText = UserData.data.user.name;
      bio.innerText = UserData.data.user.bio;
      totalRepoCount.innerText = UserData.data.user.repositories.totalCount;
      queriedRepo.innerText = UserData.data.user.repositories.edges.length;
      createRepoList(UserData.data.user.repositories)
}

function createRepoList(repos) {
      repos.edges.forEach(ele => {
            const repoLanguage = ele.node.languages.nodes
            if (ele.node.languages.nodes.length === 0) {
                  const madecolor = { color: "white", name: "no-color" }
                  ele.node.languages.nodes.push(madecolor)
            } else {
            }

            const repo = document.createElement('div')
            repo.classList.add('repository')
            const repoMarkup = `<div class="repo-desc">
              <h3 class="repo-name"><a href="${ele.node.url}"  target="_blank">${ele.node.name}</a></h3>
              <span class="repo-description">${ele.node.description == null ? "" : ele.node.description}</span>
              <span>
                <div class="lng-color"style="background-color:${repoLanguage[0].color};"></div>
                <span class="lng-name">${repoLanguage[0].name}</span>
                <span class="last-updated">Updated ${getLastUpdated(ele.node.updatedAt)} days ago</span>
                <span class="stars"><i class="far fa-star"></i><p>${ele.node.stargazerCount}</p></span>
                <span class="forks"> <i class="fas fa-code-branch"></i><p>${ele.node.forkCount}</p></span>
                 
              </span>
            </div>
            <div class="repo-status">
              <button><i class="far fa-star"></i>Star</button>
            </div>`

            repo.innerHTML = "";
            repo.innerHTML = repoMarkup;
            repoList.appendChild(repo);
      })



}

form.value = inuptedUsername


mobMenu.addEventListener('click', e => {
      console.log('mobile');
      document.querySelector('#menu').classList.toggle('active');
})



function getLastUpdated(rawTime) {
      rawTime = rawTime.split("T").join(",").toString().replace(/-/g, "/").replace(/Z/g, "")
      rawTime = new Date(rawTime)
      let currentDate = new Date()
      let time_difference = currentDate.getTime() - rawTime.getTime();
      let result = time_difference / (1000 * 60 * 60 * 24);
      return Math.round(result);
}

