var btn = document.querySelector("#add")
var istatus = document.querySelector("#est")
var check = 0;

btn.addEventListener("click",function(){
 if(check==0)
 {
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove"
    btn.style.backgroundColor = "gray"
    check=1;
 } 
 else
 {
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    btn.innerHTML = "Add Friends"
    btn.style.backgroundColor = "cadetblue"
    check=0;
 }
   
} )