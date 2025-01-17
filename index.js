var hamburgerMenu = document.getElementById('hamburger');
var sideBar = document.getElementById('navlinks');

hamburgerMenu.addEventListener('click',()=>{
    sideBar.classList.toggle('active-sidebar')
    //hamburger classList..
    hamburgerMenu.classList.toggle('active-icon')
})


