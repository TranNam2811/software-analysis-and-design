// product_img---------------------------------------
const rightbtn= document.querySelector(".fa-chevron-right")
const leftbtn= document.querySelector(".fa-chevron-left")
const imgNuber = document.querySelectorAll(".big_group_img img")
console.log(imgNuber.length)
let index = 0
rightbtn.addEventListener("click", function(){
    // console.log("oke")
    index =  index + 1
    if(index>imgNuber.length - 1){
        index = 0
    }
    remove_active()
    document.querySelector(".big_group_img").style.right = index * 100+"%"
    imgNuber_small[index].classList.add("active")
})
leftbtn.addEventListener("click", function(){
    // console.log("oke")
    index = index -1
    if(index<0){
        index = imgNuber.length -1
    }
    remove_active()
    document.querySelector(".big_group_img").style.right = index * 100+"%"
    imgNuber_small[index].classList.add("active")
})
// img_small--------------------------------------------------
const imgNuber_small = document.querySelectorAll(".small_group_img img")
// console.log(img_active)
function remove_active(){
    let img_active = document.querySelector(".active")
    img_active.classList.remove("active")
}
imgNuber_small.forEach(function(image, index){
    image.addEventListener("click", function(){
        remove_active()
        document.querySelector(".big_group_img").style.right = index * 100+"%"
        image.classList.add("active") 
    })
})

// -----quantity------------------------------------------------------
function reduce_quantity(){
    var index_quantity = document.getElementById("quantity")
    if(parseInt(index_quantity.value) > 1){
        index_quantity.value = parseInt(index_quantity.value) - 1
    }
}
function increase_quantity(){
    var index_quantity = document.getElementById("quantity")
    index_quantity.value = parseInt(index_quantity.value) + 1;
}

///---------------auto-----------------
function img_auto(){
    index = index + 1
    if(index>imgNuber.length - 1){
        index = 0
    }
    remove_active()
    document.querySelector(".big_group_img").style.right = index * 100+"%"
    imgNuber_small[index].classList.add("active")
}
setInterval(img_auto, 5000)