const inputFieldEl = document.getElementById('result');
const buttonsEl = document.querySelectorAll('button');
const clearBtn = document.querySelector('.clear');
const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');


for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener('click', ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if (buttonValue === 'C'){
            clearResult();
        } else if (buttonValue === '='){
            calculateResult();          
        } else {
            appendValue(buttonValue);
        }
    });
};

function clearResult(){
    resultEl.value = '';    
};

function calculateResult(){

};

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
};