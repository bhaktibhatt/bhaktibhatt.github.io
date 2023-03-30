const nav =  document.querySelector('.navbar')
fetch('/navbar.html')
.then(res=>res.text()) //convert response of promise to text
.then(data=>{
    nav.innerHTML = data
})