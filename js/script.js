window.addEventListener('load', function(){
  timerDiv = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    timerDiv.textContent = ++count;

    if(count ===10){
      clearInterval(interval);
      return;
    }

    if(count % 5 === 0){
      setTimeout(() => {
        timerDiv.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
})