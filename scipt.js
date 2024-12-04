const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const matter = document.querySelector('.matter')
const help = document.querySelector('.help')
const h2 = document.querySelector('h2')
const hamburgur = document.querySelector('.hamburgur')
const ham = document.querySelector('.ham')
let flag = true, flag1 = true;

let arr = ["You are Beautiful","I believe in you!","You are worthy","Keep going!","Make it happen.","I Love You","Things will get better","Follow your heart.","You are strong!","Be still.","You matter.","You did great today!"]

function greety(){
    h2.innerText = arr[Math.round((Math.random() * arr.length -1) + 1)]
    setInterval(()=>{
        let idx = Math.round((Math.random() * arr.length -1) + 1);
        h2.innerText=arr[idx]
        
    },3000)
}
window.addEventListener('load',greety);
function btn1Fn(){
            if(flag){

                let div = document.createElement('div')
                div.className = "ams matter2";
                let para = document.createElement('p')
                para.innerText="U matter is a meditation and relaxation app that designed to take you some moment to relax and breathe. U Matter mission is to help you find your inner peace and improve your mental health."
                div.appendChild(para)
                matter.appendChild(div);
                flag = false;
                btn1.setAttribute('src','./icons/up.svg')
                matter.style.backgroundColor="#ADD8E6"

        }
        else {
            flag = true;
            matter.removeChild(document.querySelector('.matter2'));
            btn1.setAttribute('src','./icons/down.svg')
            
        }
}
btn1.addEventListener('click',btn1Fn)


function clickedPlus(){
    if(flag1){

            let div = document.createElement('div')
            div.className = "ams matter1";
            let para1 = document.createElement('p')
            para1.innerText="U matter is a meditation and relaxation app that designed to take you some moment to relax and breathe. U Matter mission is to help you find your inner peace and improve your mental health"
            div.appendChild(para1)
            help.appendChild(div);
            flag1 = false;
            btn2.setAttribute('src','./icons/up.svg')
            help.style.backgroundColor="#ADD8E6"
    
    }
    else {
        flag1 = true;
        help.removeChild(document.querySelector('.matter1'));
        btn2.setAttribute('src','./icons/down.svg')
        
    }
    
}

btn2.addEventListener('click', clickedPlus)
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

let loading  = document.querySelector('#loading');
let body  = document.querySelector('body');
window.addEventListener("load",()=>{
    loading.style.display = "flex";
    body.style.overflowY = "hidden";
    setTimeout(() => {
        loading.style.display = "none";
        body.style.overflow = "unset";
    }, Math.floor(Math.random() * 1000)+8000);
})

let mst = document.querySelector('.mst');
let nam = "Sanni"
function dikhaBhai(){
    let hr = new Date().getHours();

    if(hr >= 1 && hr < 12){
        mst.innerText=`Good Morning ${nam}`
    }
    else if(hr >= 12 && hr <= 18){
        mst.innerText=`Good Afternoon {nam}`
    }
    else {
        mst.innerText=`Good Evening ${nam}`
    }
    console.log(hr);
    
}
window.addEventListener('load',dikhaBhai)