// const nav =  document.querySelector('.navbar')
// fetch('/navbar.html') // fetch api
// .then(res=>res.text()) //convert response of promise to text
// .then(data=>{
//     nav.innerHTML = data
// })
// const hamMenu = document.querySelectorAll('.ham');
// const mobileMenu = document.querySelectorAll(".mobile-nav");
// hamMenu.addEventListener('click',function (){
//     mobileMenu.classList.toggle('is-active');
// })
const hamBtn = document.querySelector(".ham");
const mobileMenu = document.querySelector(".mobile-nav");
const spaceCat = document.getElementById("space-cat");
console.log(spaceCat);
console.log(mobileMenu);
hamBtn.addEventListener('click', function(){
    console.log("ham clicked")
    mobileMenu.classList.toggle("is-active")
    if(mobileMenu.classList.contains('is-active')){
        console.log(mobileMenu.classList.contains('is-active'));
        spaceCat.style.position = "fixed";
    }
    else if (mobileMenu.classList) {
        console.log(mobileMenu.classList.contains('is-active'));
        spaceCat.style.position = "absolute";
    }
})

