document.getElementById('submit-btn').addEventListener('click', function(){
  const emailFeild = document.getElementById('email');
  const email = emailFeild.value ;
  const passwordFeild = document.getElementById('password');
  const password = passwordFeild.value ;
  if(email === 'sontan@baap.com' && password === 'baaperBank'){
    location.href = 'bank.html'
  }
  else{
    alert('Tui password vule gesos !!! Tore ami tejjo ghushona koralm.');
  }
})