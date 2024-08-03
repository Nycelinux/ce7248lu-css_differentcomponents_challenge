let next= document.getElementById('next');
let previous= document.getElementById('previous');
let carousel= document.querySelector('.carousel');
let items= document.querySelectorAll('.carousel .item');
let countItem=items.length;
let active=1;
let other0=null;
let other1=null;

next.onclick=()=>{
    carousel.classList.remove('previous');
    carousel.classList.add('next');
    active=active+1>= countItem ? 0 :active +1;
    other0= active-1 < 0 ? countItem-1 :active-1;
    other1= active+1 >= 0 ? countItem-1 :active+1;
    changeSlider();
}

previous.onclick=()=>{
    carousel.classList.remove('next');
    carousel.classList.add('previous');
    active= active - 1 < 0 ? countItem - 1 : active - 1;
    other0= active + 1 >= countItem ? 0 :active + 1;
    other1= other0+1 >= countItem? 0 : other0 + 1;
    changeSlider();
}

const changeSlider=()=>{
    let itemOldActive= document.querySelector('.carousel .item.active');
    if (itemOldActive){
        itemOldActive.classList.remove('active');
    }

    let itemOldOther0=document.querySelector('.carousel .item.other0');
    if (itemOldOther0){
        itemOldOther0.classList.remove('other0');
    }

    let itemOldOther1=document.querySelector('.carousel .item.other1');
    if (itemOldOther0){
        itemOldOther0.classList.remove('other1');
    }

    items.forEach(e =>{
        e.querySelector('.itemImage img').style.animation='none';
        e.querySelector('.itemImage figcaption').style.animation='none';
        void  e.offsetWidth;
        e.querySelector('.itemImage img').style.animation= '';
        e.querySelector('.itemImage figcaption').style.animation= '';
    })

    items[active].classList.add('active');
    items[other0].classList.add('other0');
    items[other1].classList.add('other1');

    clearInterval(autoPlay);
    autoPlay=setInterval(() =>{
        next.click();
    }, 5000);
}

let autoPlay=setInterval(() =>{
    next.click();
}, 5000);