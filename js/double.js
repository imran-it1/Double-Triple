document.getElementById('double-btn').addEventListener('click', function(){
    const Number = getInputNumberById('double-input');
    const double = Number * 2;
    

    const doubleAppendElement = document.getElementById('double-append');
    doubleAppendElement.value = double;
})