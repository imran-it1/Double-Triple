document.getElementById('double-btn').addEventListener('click', function(){
    const Number = getInputNumberById('double-input');

    // Check if user not provide Number
    if(isNaN(Number)){
        alert('Please enter number');
        const element = document.getElementById('double-input');
        element.value = '';
        return NaN;
    }

    const double = Number * 2;
    const doubleAppendElement = document.getElementById('double-append');
    doubleAppendElement.value = double;




    // Result clear if input field clear
    const inputField = document.getElementById('double-input');
    const resultField = document.getElementById('double-append');

    inputField.addEventListener('input', function(){
        if(inputField.value === ''){
            resultField.value = '';
        }
    })
})