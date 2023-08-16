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
})