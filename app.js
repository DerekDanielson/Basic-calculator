const inputFieldEl = document.getElementById('result');
const buttonsEl = document.querySelectorAll('button');

//Loop through buttons to get each individual button
for (let i = 0; i < buttonsEl.length; i++){
    //Event listener for each button
    buttonsEl[i].addEventListener('click', ()=>{
        const buttonValue = buttonsEl[i].textContent;
        //Functions to run for 'clear', calculate, and display values
        if (buttonValue === 'C'){
            clearResult();
        } else if (buttonValue === '='){
            calculateResult();          
        } else {
            appendValue(buttonValue);
        }
    });
};

//Clear input field
function clearResult(){
    inputFieldEl.value = '';    
};

//Calculate results
function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
};

//Display values
function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
};