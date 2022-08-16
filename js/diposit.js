document.getElementById('diposit-btn').addEventListener('click', function(){
  const dipositInput = document.getElementById('diposit-input');
  const dipositValueString = dipositInput.value ;
  const dipositValue = parseFloat(dipositValueString);

  dipositInput.value = '';

  if(isNaN(dipositValue)){
    alert('Plese provide a valid Number');
    return;
  }

  const dipositFeild = document.getElementById('diposit-total');
  const priviusDipositString = dipositFeild.innerText;
  const dipositTotal = parseFloat(priviusDipositString);

  const dipositTotalValue = dipositValue + dipositTotal;
  dipositFeild.innerText = dipositTotalValue;

  const totalBalanceFeild = document.getElementById('total-balance');
  const priviusTotalBalanceString = totalBalanceFeild.innerText;
  const priviusBalance = parseFloat(priviusTotalBalanceString);

  totalBalanceFeild.innerText = priviusBalance + dipositValue;

  
})