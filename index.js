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



//selecting left arrow right arrow and slide img
var leftarrow=document.getElementById("leftslide-img")
var rightarrow=document.getElementById("rightslide-img")
var slideimg=document.getElementById("slide-img")

var slideincrement=0
console.log(leftarrow)

// clicking right arrow
rightarrow.addEventListener("click",function(){
    slideincrement=slideincrement+100;
    if(slideincrement>200)
    {
        slideincrement=0
        slideimg.style.marginLeft=0;
    }
    else
    {
        slideimg.style.marginLeft="-"+slideincrement+"vw"
        console.log(slideimg)
    }
})

// left arrow
leftarrow.addEventListener("click",function(){
    
    if(slideincrement===0)
    {
        slideincrement=200
        slideimg.style.marginLeft="-"+slideincrement+"vw"
    }
    else
    {
        slideincrement=slideincrement-100
        slideimg.style.marginLeft="-"+slideincrement+"vw"
        
    }
})
