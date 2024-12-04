const deepBtn = document.querySelector('.deepBtn')
const techBtn = document.querySelector('.techBtn')
const hamburgur = document.querySelector('.hamburgur')
const ham = document.querySelector('.ham')



let service = true;
ham.addEventListener('click',()=>{
    let one = document.querySelector(".one")
    let two = document.querySelector(".two")
    let three = document.querySelector(".three")
    if(service){
        hamburgur.style.transition = 'transform 1s ease';
        two.style.display="none"
        one.style.transition = 'transform 1s ease';
        three.style.transition = 'transform 1s ease';
        one.style.transform= "translateY(4px) rotate(-45deg)";
        three.style.transform= "translateY(-6px) rotate(45deg)";
        hamburgur.style.display="flex";
        service = false;
    }
    else {
        two.style.display="flex"
        one.style.transform = ' translateX(0)';
        three.style.transform = 'translateX(0)';
        hamburgur.style.display="none";
        service = true;
    }
})


let talk = document.querySelector('.chat')

talk.addEventListener('click', function(){
    setTimeout(()=>{
    // talk.setAttribute('')
     this.setAttribute('href','./talkToHope/talk.html')
     window.location.href = this.getAttribute('href');
    },3000)

})
techBtn.addEventListener('click',()=>{
    window.location.href="./techBreath/tech.html"
})
deepBtn.addEventListener('click',()=>{
    window.location.href="./deepBreath/deep.html"
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