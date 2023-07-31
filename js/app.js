const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const navbar = document.querySelector('#nav');
const date = document.querySelector('#date');

navBtn.addEventListener('click', function () {
  if (!sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.add('show-sidebar');
  }
});
closeBtn.addEventListener('click', function () {
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar');
  }
});

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.scrollY > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
})

// set year
date.innerHTML = new Date().getFullYear();








