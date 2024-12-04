const circle = document.querySelector('.circle')
const play = document.querySelector('.btn')
const para = document.querySelector('.para')
const bahar = document.querySelector('.bahar')
const crossBtn = document.querySelector('.crossBtn')

let val=1;

play.addEventListener('click',()=>{
    circle.classList.add('ghumo')
    para.classList.add('andar')
    bahar.style.animation ="ghar 3s linear infinite"
    play.style.display="none"
    para.innerText="Started"
})

crossBtn.addEventListener('click',()=>{
    window.location.href="../relax.html"
})

let loading  = document.querySelector('#loading');
let body  = document.querySelector('body');
window.addEventListener("load",()=>{
    loading.style.display = "flex";
    body.style.overflowY = "hidden";
    setTimeout(() => {
        loading.style.display = "none";
        body.style.overflow = "unset";
    }, Math.floor(Math.random() * 1000)+3000);
})