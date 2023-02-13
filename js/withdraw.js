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