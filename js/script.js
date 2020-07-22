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

const github = document.querySelector('#github');

  const response = fetch('http://api.github.com/users/dantls').then(response =>{
    response.json().then(user => {
      
        showData(user)
      
    });
  }).catch(error => {
    console.log('Error')
  });



function showData(data){
  github.textContent = data.name + ' ' + data.url

}
