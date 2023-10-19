class calculator {
    constructor(prevOpr, curOpr){
        this.prevOpr = prevOpr;
        this.curOpr = curOpr;
        this.clear();
    }

    clear(){
        this.curOperand = '';
        this.prevOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.curOperand = this.curOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number === '.' && this.curOperand.includes('.')) return;
        this.curOperand = this.curOperand.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.curOperand === '') return
        if(this.prevOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.curOperand;
        this.curOperand = '';
    }

    compute(){
        let computation;
        let prev = parseFloat(this.prevOperand);
        const cur = parseFloat(this.curOperand);
        if(isNaN(prev) || isNaN(cur)) return;
        switch(this.operation){
            case '+':
                computation = prev + cur;
                break;
            case '-':
                computation = prev - cur;
                break;
            case '*':
                computation = prev * cur;
                break;
            case '/':
                computation = prev / cur;
                break;
            default:
                return;
        }
        this.curOperand = computation;
        this.operation = undefined;
        this.prevOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigit = parseFloat(stringNumber.split('.')[0]);
        const decimalDigit = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigit)){
            integerDisplay = '';
        }else{
            integerDisplay = integerDigit.toLocaleString('en', {
                maximumFractionDigits: 0;
            })
        }
        if(decimalDigit != null){
            return `${integerDisplay}.${decimalDigit}`
        }else{
            return integerDisplay;
        }
    }

    updateDisplay(){
        this.curOpr.innerHTML = this.getDisplayNumber(this.curOperand);
        if(this.operation != null){
            this.prevOpr.innerHTML = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
        }else{
            this.prevOpr.innerHTML = '';
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const oprButtons = document.querySelectorAll('[data-operation]');
const eqButton = document.querySelector('[data-equal]');
const delButton = document.querySelector('[data-delete]');
const acButton = document.querySelector('[data-ac]');
const prevOpr = document.querySelector('[data-prev]');
const curOpr = document.querySelector('[data-cur]');

const Calculator = new calculator(prevOpr, curOpr);

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerHTML);
        Calculator.updateDisplay();
    })
})

oprButtons.forEach(button =>{
    button.addEventListener('click', () => {
        Calculator.chooseOperation(button.innerHTML);
        Calculator.updateDisplay();
    })
})

acButton.addEventListener('click', () => {
    Calculator.clear();
    Calculator.updateDisplay();
})

eqButton.addEventListener('click', () => {
    Calculator.compute();
    Calculator.updateDisplay();
})

delButton.addEventListener('click', () => {
    Calculator.delete();
    Calculator.updateDisplay();
})


