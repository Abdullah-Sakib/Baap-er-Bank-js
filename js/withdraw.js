document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawFeild = document.getElementById('withdraw-feild');
  const withdrawValueString = withdrawFeild.value ;
  const withdrawValue = parseFloat(withdrawValueString);

  const empty = withdrawFeild.value = '';

  if(isNaN(withdrawValue)){
    alert('Plese provide a valid Number');
    return;
  }

  const previusWithdraw = document.getElementById('previus-withdraw-value');
  const previusWithdrawString = previusWithdraw.innerText;
  const priviusWithdrawValue = parseFloat(previusWithdrawString);

  const totalBalanceString = document.getElementById('total-balance').innerText;
  const totalPreviusBalance = parseFloat(totalBalanceString);

  if(withdrawValue > totalPreviusBalance){
    alert('Tor baaper bank a ato taka nai');
    return;
  }

  const totalWithdraw = withdrawValue + priviusWithdrawValue;
  const totalWithdrawValue = previusWithdraw.innerText = totalWithdraw;

  const balanceAfterWithdraw = totalPreviusBalance - withdrawValue;
  const setTotalValue = document.getElementById('total-balance').innerText = balanceAfterWithdraw;
  
})