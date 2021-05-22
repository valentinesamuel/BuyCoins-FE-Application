const mobMenu = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

mobMenu.addEventListener('click', e => {
      console.log('mobile');
      // menu.style.visibility="visible"
      document.querySelector('#menu').classList.toggle('active')
})
