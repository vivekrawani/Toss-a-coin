const image = document.querySelector("#image");
image.addEventListener("click", flipCoin);


function getRandomInt(){
    return Math.ceil(Math.random()*2);

}
function flipCoin(){
    document.querySelector(".result").style.visibility = "hidden";
    image.src = "src/flip.gif"
    setTimeout(changeImage, 3000)
    
}

function changeImage(){
    const tmp = getRandomInt();
    if(tmp === 1 ) image.src = "src/head.jpg";
    else image.src = "src/tail.jpg";
    displayResult(tmp);
}

function displayResult(tmp){
    const result = document.querySelector(".result");
    if(tmp === 1)  result.innerText = "YAY!!!   It's heads! \n Click on the coin to flip again.";
    else  result.innerText = "YAY!!!    It's tails!\n Click on the coin to flip again.";
    document.querySelector(".result").style.visibility = "visible";
    document.querySelector(".intial").style.visibility = "hidden";
    
}

