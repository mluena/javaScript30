function start() {
    'use strict';

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
   
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds /60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
   
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
}

setInterval(setDate,1000);


}

start();