var cont = document.querySelector(".container")
var crsr = document.querySelector(".cursor")

cont.addEventListener("mousemove",function(dets){
crsr.style.left = dets.x+"px"
crsr.style.top = dets.y+"px"
})