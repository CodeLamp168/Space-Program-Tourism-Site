//nav btn for responsive layout
const navArea = document.querySelector('.nav-js')
const navOpenBtn = document.querySelector('.nav-open-btn')
const navCloseBtn = document.querySelector('.nav-exit-btn')

navOpenBtn.addEventListener('click', () => navArea.classList.add('mobile-nav-active'))
navCloseBtn.addEventListener('click', () => navArea.classList.remove('mobile-nav-active'))

