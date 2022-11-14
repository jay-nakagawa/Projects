const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn') 
const color1 = document.querySelector('.color1')

btn.addEventListener('click', function(){

    const randomNumber = getRandomNum()

   
    document.body.style.backgroundColor = colors[randomNumber]
    color1.textContent = colors[randomNumber]
})

function getRandomNum(){
    return Math.floor(Math.random()*colors.length)
}