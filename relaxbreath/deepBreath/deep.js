const circle = document.querySelector('.circle')
const play = document.querySelector('.play')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const bahar = document.querySelector('.bahar')
const crossBtn = document.querySelector('.crossBtn')

let val=1;

play.addEventListener('click',()=>{
    circle.classList.add('ghumo')
    play.style.display="none";
    one.style.display="flex"
    bahar.style.animation="ghar 3s linear infinite"

    setInterval(()=>{
        if(val === 1){
            setTimeout(()=>{
                one.style.display="none";
                two.style.display="flex"
                val++;
            },1000)
        }
        else if(val === 2){
            setTimeout(()=>{
                two.style.display="none";
                three.style.display="flex"
                val++;
            },3000)
        }
        else if( val === 3){
            setTimeout(()=>{
                three.style.display="none";
                one.style.display="flex"
                val=1;
            },1000)
        }
    },1000)
    
})

crossBtn.addEventListener('click',()=>{
    window.location.href="../relax.html";
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