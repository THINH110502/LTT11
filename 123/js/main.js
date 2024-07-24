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