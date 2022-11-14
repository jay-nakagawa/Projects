const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){

    let hexColor = '#'

    for(let i = 0; i <6;i++){
        hexColor += hex[getRandomNum()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor

})


function getRandomNum(){
    return Math.floor(Math.random()*hex.length)
}

//a hex color is represented with a # followed by 5 values that are 0-9 or a-f.
//we have a variable called hex which contains all of the possible values. 
// using a for loop that runs 5 times, we generate a random number that represents a value in the hex array and store them in the variable hexColor.
//hexColor represents the color we want to use for the background as well as the text we want to display.