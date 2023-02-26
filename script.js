let screen = document.getElementById('result');
let buttons = document.querySelectorAll('.button');
let screenValue = '';

let oprands=document.querySelectorAll('.btn');
 Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '×') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'clear') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'Enter') {
            screenValue=eval(screenValue);
            screen.value = screenValue;
        }
        else if(buttonText=="ans"){
            screenValue=eval(screenValue);
            screen.value = screenValue;
        } 
        else if(buttonText=="del"){
            screenValue=screenValue.substring(0, screenValue.length - 1);
            screen.value =screenValue ;
        } 
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
})
Array.from(oprands).forEach((btn)=>{
    btn.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        screenValue += buttonText;
        screen.value = screenValue;

    })
})