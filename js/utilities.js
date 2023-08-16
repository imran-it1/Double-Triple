// Get input number
function getInputNumberById (id){
    const element = document.getElementById(id);
    const valueString = element.value;
    const value = parseFloat(valueString);
    return value;
}