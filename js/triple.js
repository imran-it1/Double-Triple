document.getElementById('triple-btn').addEventListener('click', function(){
    const number = getInputNumberById('triple-input');
    // Check if user not provide Number
    if(isNaN(number)){
        alert('Please enter number');
        const element = document.getElementById('triple-input');
        element.value = '';
        return NaN;
    }
    const triple = number * 3;
    const tripleAppendElement = document.getElementById('triple-append');
    tripleAppendElement.value = triple;


        // Result clear if input field clear
        const inputField = document.getElementById('triple-input');
        const resultField = document.getElementById('triple-append');
    
        inputField.addEventListener('input', function(){
            if(inputField.value === ''){
                resultField.value = '';
            }
        })
})