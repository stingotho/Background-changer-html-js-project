const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = colors[Math.floor(Math.random()*colors.length)];
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    console.log(document.body.style.backgroundColor);
    color.textContent = randomNumber;

});