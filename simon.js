let color = ["red" , "yellow" , "green" , "purple"];
let userSeq=[];
let generatedSeq=[];
let level =0;
started = false;



    let allbtn = document.querySelectorAll(".btn");
    for(btn of allbtn)
    {
        btn.addEventListener("click",btnpress);
    }


    function btnpress(){
        console.log(this);
        let btnn = this;
        userflash(btnn);
      let userColor = btnn.getAttribute("id");
        userSeq.push(userColor);
        checkans(userSeq.length-1);
    
    }

document.addEventListener("keypress",function(){
if(started == false){
    console.log("game started");
    started = true;
   levelup();
}
});
let h3 = document.querySelector("h3");
//d=0;
function levelup(){
    level++;
    userSeq=[];
    
    h3.innerText = `Level ${level}`;
    
    let randNum = Math.floor(Math.random()*3);
    let randColor = color[randNum];
    let btn = document.querySelector(`.${randColor}`);
    console.log(randColor);
    generatedSeq.push(randColor);
    console.log(`generated seq is : ` , generatedSeq);
    flash(btn);
  //  checkans(userSeq.length-1);

}

function checkans(indx)
{
    console.log("user:",userSeq);
    if(userSeq[indx] == generatedSeq[indx]){
        console.log("correct answer");
        if(generatedSeq.length == userSeq.length){
            setTimeout(levelup,2000);
        
        }          
    }
    else{
        let cc = document.backgroundColor;
        document.backgroundColor="red";
        setTimeout(function(){
            document.backgroundColor=cc;
            },1520);
        console.log("wrong answer");
        let h3 = document.querySelector("h3");
        h3.innerText = `Game Over!! Press any key to start`;
        reset();
        }

}

function reset()
{
    userSeq=[];
    generatedSeq=[];
    started = false;
    level = 0;
}


function flash(bt) {
    console.log('flash it :',bt);// added by ehtisham 
//    bt.classList.add("white");
    bt.style.backgroundColor = "white";
    setTimeout(function () {
        bt.style.backgroundColor = "";
        // bt.classList.remove("white");
        },250);
}
function userflash(btn){
//    btn.classList.add("userflash");
btn.style.backgroundColor = "white";
setTimeout(function () {
    btn.style.backgroundColor = "";
    // bt.classList.remove("white");
    },250);
}



