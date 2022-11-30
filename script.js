// first build the abilities
//accept user Inputs,number,operator,and number
//store inputs
//recognize inputs and perform calculations
//should accept decimal numbers
//show the result in screen

//optional features:
//should accept longer arithmetic operations.
// display all input as it is being entered
// store previous total as start of next operation.
//clear button should clear all entreis
//should prevent invalid input(operators next to each other,two decimal points)

const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click',event =>{
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')){
        return;
    }else{
        //pass value to parse method
        //do this first and see the difference
        // console.log(event);
        // console.log(target);
        // console.log(value);
        calculator.parseInput(value)
    }
})
//let's build calculator factory
const calculator = {
    displayText :'0',
    prevTotal : null,

    parseInput(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }
        
    }
}