document.getElementById('triple-btn').addEventListener('click', function(){
    const number = getInputNumberById('triple-input');
        // Check if user not provide Number
        if(isNaN(Number)){
            alert('Please enter number');
            const element = document.getElementById('triple-input');
            element.value = '';
            return NaN;
        }
    
    const triple = number * 3;
    const tripleAppendElement = document.getElementById('triple-append');
    tripleAppendElement.value = triple;
})