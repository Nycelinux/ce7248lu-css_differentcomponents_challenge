let hourText= document.querySelector(".hour");
let minText= document.querySelector(".min");
let secText= document.querySelector(".secs");
let ampmText= document.querySelector(".ampm");

setInterval(()=>{
    let date=new Date();

    let hours=date.getHours();
    let min=date.getMinutes();
    let secs=date.getSeconds();

    let label;
    label=hours<12?"AM": "PM";
    hours=hours>12?hours-12:hours;
    hours=hours==0?12:hours;
    hours=hours <10? "0" +hours: hours;
    min=min <10? "0" +min: min;
    secs=secs <10? "0" +secs: secs;

    hourText.innerText=hours;
    minText.innerText=min;
    secText.innerText=secs;
    ampmText.innerText=label;

}, 1000);