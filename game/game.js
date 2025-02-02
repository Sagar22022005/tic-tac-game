let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgbox=document.querySelector(".msgbox");
let winnermsg=document.querySelector("#winnermsg");

let turnO=true;
const winprob=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [2,5,8],
];
const disablebtns=()=>{
    
    for(let boxe of boxes){
    boxe.disabled=true;
    }
}
const enablebtns=()=>{
    turnO=true;
    
    for(let boxe of boxes){
    boxe.disabled=false;
    boxe.innerText="";
    msgbox.classList.add("hide");
    }
}
let resetgame=()=>{

    enablebtns();
}
const showwinner=(winner)=>{
    msgbox.innerText=` Winner is ${winner}`;
    msgbox.classList.remove("hide");
    disablebtns();
    

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true; 
        }
        box.disabled=true;
        checkwinner();
        
    })
})
let checkwinner=()=>{
    for(const pattern of winprob){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner",pos1);
                showwinner(pos1);
                
            }
        }
        
    }
    
};
resetbtn.addEventListener("click",resetgame);

