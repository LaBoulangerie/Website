const utcSecondes = 1662822000;
const date = new Date(0); // sets the date to epoch
date.setUTCSeconds(utcSecondes);

const countdownEl = document.getElementById("countdown");
const ipEl = document.getElementById("ip");
let secondsInterval;

const updateCountdown = () => {
    const currentDate = new Date();
    let diff = date - currentDate;

    if (diff < 0) {
        diff = 0;

        countdownEl.classList.add("swag");
        ipEl.classList.add("swag");

        clearInterval(secondsInterval);
    }

    let s, h, m, d;

    diff /= 1000; // seconds
    s = Math.floor(diff % 60);

    diff /= 60; // minutes
    m = Math.floor(diff % 60);

    diff /= 60; // hours
    h = Math.floor(diff % 24);

    diff /= 24; // days
    d = Math.floor(diff);

    const diffString = `${d}:${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
        s < 10 ? "0" + s : s
    }`;

    countdownEl.textContent = diffString;
};

secondsInterval = setInterval(updateCountdown, 1000);
