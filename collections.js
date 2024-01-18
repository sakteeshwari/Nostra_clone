// top offer add js

var topadd=document.getElementById("top-add")

var closebutton=document.getElementById("close-button")

closebutton.addEventListener("click",function(){
    topadd.style.display="none"
})


// side menu bar
var clicksidemenu=document.getElementById("click-sidemenu")

var showsidemenu=document.getElementById("show-sidemenu")

var closesidemenu=document.getElementById("close-sidemenu")

// showsidemenu.style.display="none"

clicksidemenu.addEventListener("click",function(){
    showsidemenu.style.display="block"
})

closesidemenu.addEventListener("click",function(){
    showsidemenu.style.display="none"
})