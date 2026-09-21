const numbersArray = [1, 2, 3, 4, 5];
let isChanging = true;
let intervalId = null;

const numberDisplay = document.getElementById('number-display');

window.onload = function() {
    startChanging();
};

function change() {
    const randomIndex = Math.floor(Math.random() * numbersArray.length);
    numberDisplay.innerText = numbersArray[randomIndex];
}

function toggleNumberChange() {
    if (isChanging) {
        stopChanging();
    } else {
        startChanging();
    }
}

function startChanging() {
    intervalId = setInterval(change, 100);
    isChanging = true;
}

function stopChanging() {
    clearInterval(intervalId);
    isChanging = false;
}
