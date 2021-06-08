import { getUserData } from "./dataquery.js";

const form = document.getElementById("form");

const content = document.getElementById("content");
const mobMenu = document.getElementById("mobile-menu");
const spinner = document.getElementById("waiter");
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
if (data.errors) {
      spinner.style.display = "none"
      spinner.innerHTML = 'block'
      content.innerText = data.errors[0].message
      content.classList.add("error-msg")
      content.style.display = 'block'
} else {
      spinner.style.display = "none"
      content.style.display = 'flex'
      dispatchData(data)


}

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
                <span class="stars"><svg class="octicon octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg><p>${ele.node.stargazerCount}</p></span>
                <span class="forks"> <i class="fas fa-code-branch"></i><p>${ele.node.forkCount}</p></span>
                 
              </span>
            </div>
            <div class="repo-status">
              <button><svg class="octicon button-star octicon-star mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> Star</button>
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

