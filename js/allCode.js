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

/* deposit button click handler */
document.getElementById('btn-deposit').addEventListener('click', function(){
    /* input */
    const newDeposit = getValueFromInput('deposit-field');

    /* validation check */
    if(isNaN(newDeposit)){
        alert('Invalid Input !!! Please Input Deposit Amount');
        return;
    }
    
    /* deposit */
    const previousDeposit = getValueFromText('deposit-total');
    const totalDeposti = newDeposit + previousDeposit;
    updateAmount('deposit-total', totalDeposti);
    
    /* balance */
    const previousBalance = getValueFromText('balance-total');
    const totalBalance = newDeposit + previousBalance;
    updateAmount('balance-total', totalBalance);
});

/* withdraw button click handler */
document.getElementById('btn-withdraw').addEventListener('click', function(){
    /* input */
    const newWithdraw = getValueFromInput('withdraw-field');

    /* validation check */
    if(isNaN(newWithdraw)){
        alert('Invalid Input!!! Please Input Desired Amount.');
        return;
    }

    /* withdraw */
    const previousWithdraw = getValueFromText('withdraw-display');
    const totalWithdraw = newWithdraw + previousWithdraw;
    
    /* balance */
    const previousBalance = getValueFromText('balance-total');
    const totalBalance = previousBalance - newWithdraw;
    
    /* validation check */
    if(previousBalance < newWithdraw){
        alert('Insufficient Balance!!! Baap Er Bank E Ato Taka Nai.');
        return;
    }
    
    updateAmount('withdraw-display', totalWithdraw);
    updateAmount('balance-total', totalBalance);
});