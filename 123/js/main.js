const header = document.querySelector("header")
window.addEventListener("scroll", function(){
    x = window.pageYOffset
    if(x > 0){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let index = 0
imgPosition.forEach(function(images,index){
    images.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        backgroud(index)
    })
})
function imgBackgroud (){
    index++;
    if (index >=imgNumber){
        index = 0
    }
    backgroud(index)
}
function backgroud (index){
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgBackgroud, 5000)

const itemsLiderbar = document.querySelectorAll(".cartegory-left-li")
itemsLiderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){   
    menu.classList.toggle("block")
    })
})
// ---------------------------product bao quan -----------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src
    })
})

const chitiet = document.querySelector(".baoquan")
const baoquan = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}

const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector("product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}