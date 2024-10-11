let arraySeq = [];
let userSeq = [];
let btn = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
// let highestScore = 0;
// let body = document.querySelector("body");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started")
        started = true;
        levelUp();
    }
   
});

function gameFlace(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlace(btn){
    btn.classList.add("userFlace");
    setTimeout(function(){
        btn.classList.remove("userFlace");
    }, 250);
}

function levelUp(){
    userSeq = [];// herev we recet the userSeq so that user can enter the sequence from start
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btn[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`)// ye randomColor hame ek naya class la ke dega or us class document.querySelector ke throw select kar lenge
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    arraySeq.push(randomColor);
    console.log(arraySeq);
    gameFlace(randomBtn);
}
function checkAns(idx){
    // console.log(`current level0`,level)
    // let idx = level-1;//jo bhi hamare level ka size hoga vahi size hamare gamaseq and userseq array ka hoga
    if(userSeq[idx] === arraySeq[idx]){// last value ko chack kar rahe h
        // console.log("same value");
        if(arraySeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        // highestScore = level;
       h2.innerHTML = `Game over! you highest score Was <b>${level}</b><br> press any key to start the game`
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150)
       reStart();
    }
}
function reStart(){
    level = 0;
    started = false;
    userSeq =[];
    arraySeq = [];
}
function btnPress(){
    // console.log("inside pressedBtn")
    // console.log(this);
    let btn = this;
    userFlace(btn);

    let userColor = btn.getAttribute("id");//id me jo bhi value h vo value la ke do
    // console.log(userColor);
    userSeq.push(userColor)

    checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for(let btn of allBtn){
    btn.addEventListener("click",btnPress)
    // console.log("insidee btn");
}