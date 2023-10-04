var arr = [
    {
        dp : "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmFuZ2UlMjBSb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1602013871952-8379f19a15f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmFuZ2UlMjBSb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        story : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
]
var clutter = '';
var storiya = document.querySelector(".storiya");
arr.forEach(function(val,idx){
   clutter += `<div class="story">
   <img id = "${idx}" src="${val.dp}" alt="">
</div>`
})
storiya.innerHTML = clutter
document.querySelector(".storiya").addEventListener("click",function(dets){
    document.querySelector(".full").style.display = "block"
   document.querySelector(".full").style.backgroundImage = `url(${arr[dets.target.id].story})`
   setTimeout(function(){
    document.querySelector(".full").style.display = "none"
   },3000)

})