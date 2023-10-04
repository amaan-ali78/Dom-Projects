var icn = document.querySelector(".ri-heart-3-fill")
var cont = document.querySelector(".container")

cont.addEventListener("dblclick",function(){
    icn.style.opacity = 0.9 
   icn.style.transform = " translate(-50%,-50), scale(1)" 

   setTimeout(function(){
    icn.style.opacity = 0
   }, 500 )
})