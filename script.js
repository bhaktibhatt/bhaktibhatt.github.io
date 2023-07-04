// const nav =  document.querySelector('.navbar')
// fetch('/navbar.html') // fetch api
// .then(res=>res.text()) //convert response of promise to text
// .then(data=>{
//     nav.innerHTML = data
// })
const hamMenu = document.querySelectorAll('.ham');
const mobileMenu = document.querySelectorAll(".mobile-nav");
hamMenu.addEventListener('click',function (){
    mobileMenu.classList.toggle('is-active');
})
