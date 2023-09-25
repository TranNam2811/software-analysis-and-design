var images = document.querySelectorAll('.picture img');

var left_button = document.querySelector('.left_button');
var right_button = document.querySelector('.right_button');
var close = document.querySelector('.close');

var galaryImg = document.querySelector('.galary_inner img');

var galary = document.querySelector('.galary');

var currentIndex = 0;

function galary_show(){

    //display
    galaryImg.src = images[currentIndex].src
    galary.classList.add('show');
}


images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        galary_show()
    })
})


close.addEventListener('click', function(){
    galary.classList.remove('show');
})


document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        galary.classList.remove('show');
    }
})


// Hàm chuyển đổi ảnh sang vị trí tiếp theo
function showNextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateGallery();
}

// Hàm chuyển đổi ảnh sang vị trí trước đó
function showPreviousImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateGallery();
}

// Hàm cập nhật hiển thị ảnh trong gallery
function updateGallery() {
    var galaryImg = document.querySelector('.galary_inner img');
    galaryImg.src = images[currentIndex].src;
}

// Sự kiện nhấn phím
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'd') {
        showNextImage();
    } else if (event.key === 'ArrowLeft' || event.key === 'a') {
        showPreviousImage();
    }
});

// Sự kiện click trên nút mũi tên trên giao diện
var leftButton = document.querySelector('.left_button');
var rightButton = document.querySelector('.right_button');

leftButton.addEventListener('click', showPreviousImage);
rightButton.addEventListener('click', showNextImage);