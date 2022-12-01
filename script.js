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
        //let's check and see is there any special buttons we click on it
        switch(value){
            case '=' :
                //calculate the answer
                break;
            case 'AC' :
                //clear screen and stored values
                break;
            case '.' :
                //make it float
                if(this.displayText == 0){
                    //pass '0.' into add text method
                    this.addText('0.')
                }else{
                    //add value to text string
                    this.addText(value)
                }
                break;
            default:
                //add value to text string
                this.addText(value)
                break;
        }
    },

    addText(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }else if(this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        /*user has entered an invalid sequence don't proceed*/
        if(isNaN(+(value)) && isNaN(this.displayText)){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        //output display text to screen
        this.outputText(this.displayText)
    },

    outputText(text){
        document.querySelector('.calculator-screen').value = text
    }
}