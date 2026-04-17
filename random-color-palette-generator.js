let boxes=document.querySelectorAll(".color-box");
let infos=document.querySelectorAll(".color-info");
let button = document.getElementById("btn");

function randomColor(){
    let letters="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){
        color=color+letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function generatepalette() {
    for(let i=0;i<boxes.length;i++)
    {
        let newcolor=randomColor();
        boxes[i].style.backgroundColor=newcolor;
        infos[i].innerText = newcolor;
        infos[i].style.color = newcolor;
    }
    
}
 generatepalette();
 button.addEventListener("click", generatepalette);
