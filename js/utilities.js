/* get input field value */
function getValueFromInput(inputValue){
    const getValue = document.getElementById(inputValue);
    const convertType = parseFloat(getValue.value);
    getValue.value = '';
    return convertType;
}

/* get text field value */
function getValueFromText(textValue){
    const getValue = document.getElementById(textValue);
    return parseFloat(getValue.innerText);
}

/* update amount */
function updateAmount(where, what){
    document.getElementById(where).innerText = what;
}