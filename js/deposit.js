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