const mobMenu = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");
// const repo = document.getElementById("repository");
const repoList = document.getElementById("repo-list");

mobMenu.addEventListener('click', e => {
      console.log('mobile');
      // menu.style.visibility="visible"
      document.querySelector('#menu').classList.toggle('active');
})
const repoNames = ['👩', '👨', '🧑', '👧','👦', '👶','🧒', '👵','👴', '🧓','👩‍🦰', '👨‍🦰','👩‍🦱', '👨‍🦱','👨‍🦲','👳‍♂️','🙆‍♀️','🙆‍♂️','🧏‍♀️','🧏‍♂️','💁‍♀️','💁‍♂️','🙋‍♀️','🙋‍♂️']

setTimeout(() => {
    repoNames.forEach(eleme => {
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