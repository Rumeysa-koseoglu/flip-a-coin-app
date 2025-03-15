let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    //reset the animation of the element
    //  so that the animation works properly every time
    coin.style.animation = "none";
    //if i == 1, run this 
    if (i) {
        //start the "spin-heads" animation after 100ms with the settimeout function
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++; //increase number of heads by 1
    } else {  //if i == 0, run this
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    //since the animation lasts 3 seconds, call updateStats after 3 second
    setTimeout(updateStats, 3000);
    disableButton();
});
//update the number of heads and tails on the screen
function updateStats() {
    document.querySelector("#heads-count").
        textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").
        textContent = `Tails: ${tails}`;
}
//temporarily disable button while animation is in progress
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}
resetBtn.addEventListener("click", () => {
    //reset the coin's rotation angle so that it returns to its original position
    coin.style.transform = "rotateX(0)";
    //reset heads and tails counter
    heads = 0;
    tails = 0;
    //reset the numbers displayed on the screen
    updateStats();
});