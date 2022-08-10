let secDiv = document.getElementById("second");
// console.log(sec);
let minDiv = document.getElementById("minute");
// console.log(min);
let hourDiv = document.getElementById("hour");
// console.log(hour);

setInterval(update, 1000);

function update() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = date.getMinutes() / 60;
    let hour = date.getHours() / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    // console.log(secDiv)
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    // console.log(minDiv);
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
    // console.log(hourDiv);
}
update();