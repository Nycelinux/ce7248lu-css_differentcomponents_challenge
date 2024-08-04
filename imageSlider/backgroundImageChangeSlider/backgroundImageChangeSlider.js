let nxtBtn =document.querySelector('.next');
let prevBtn =document.querySelector('.prev');

let slider =document.querySelector('.slider');
let sliderList =document.querySelector('.slider .list');
let sliderItems = slider.querySelectorAll('.list .item');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

nxtBtn.onclick= function (){
    moveSlider('next');
}

prevBtn.onclick= function (){
    moveSlider('prev');
}

function moveSlider(direction){
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    }else {
        sliderList.prepend(sliderItems[sliderItems.length -1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length -1]);
        slider.classList.add('prev');
    }

    sliderItems = slider.querySelectorAll('.list .item');
    thumbnailItems = thumbnail.querySelectorAll('.item');

    slider.addEventListener('animationed', function (){
        if (direction === 'next'){
            slider.classList.remove('next');
        }else {
            slider.classList.remove('prev');
        }
        },{once:true})
}



