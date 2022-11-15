//set initial value for counter
let counter = 0

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            counter--
        }else if(styles.contains('reset')){
            counter = 0
        }else if(styles.contains('increase')){
            counter++
        }
        value.textContent = counter
    })
})

//store all the buttons in the variable btns
//run a forEach on btns so when any of them are clicked a function will run.
//e.currentTarget.classList returns the class and stores it in styles
//if statements check the value of styles and run the corresponding change to the counter variable.

//#value was the id for the span that contains the counter. 
//value.textContent updates the text to counter's current value