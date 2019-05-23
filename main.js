var left = document.getElementById("left")
var right = document.getElementById("right")
var mid = document.getElementById("mid")

left.addEventListener("click", addbtnmidleft);

right.addEventListener("click", addbtnmidright);

function addbtnmidleft(event) {
    console.log("left button clicked");
    mid.innerHTML="⬅️"   
}
function addbtnmidright(event) {
    console.log("right button clicked");
    mid.innerHTML="➡️"   
}
