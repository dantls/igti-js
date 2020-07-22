
window.addEventListener('load', function(){
  // const promiseAsync = document.querySelector('#promise-async');
  // const promiseFetch = document.querySelector('#promise-then');

  // promiseAsync.textContent = division(10,2);
  // promiseFetch.textContent = division(10,0);


 
  executeDivisionPromise(10,2);
  executeDivisionPromise(10,0);
  executeDivisionPromiseAsync(10,2);
  executeDivisionPromiseAsync(10,0);

  doFetch();
  doFetchAsync();
})

function division(a,b){
  return a/b;
}

function divisionPromise(a,b){
  return new Promise((resolve,reject) => {
    if( b === 0){
      reject('Não é possível dividir por 0');
    }

    resolve(a/b);
  })
}

function executeDivisionPromise(a,b){
  divisionPromise(a,b).then(result =>{
    console.log('executeDivisionPromise',result);
  }).catch(errorMessage =>{
    console.log('divisionPromise' +'\nFalha na divisão\n',errorMessage)
  });
}
async function executeDivisionPromiseAsync(a,b){
  const response = await divisionPromise(a,b);
  console.log('executeDivisionPromiseAsync',response);
}

/* Fetch / Github */

function doFetch(){
  fetch('http://api.github.com/users/dantls').then(response =>{
    response.json().then(user => {
      
        showData(user)
      
    });
  }).catch(error => {
    console.log('Error')
  });
}
async function doFetchAsync(){
  const res = await fetch('http://api.github.com/users/dantls');
  const user = await res.json();
  console.log(user);
}
function showData(data){
  github.textContent = data.name + ' ' + data.url
}
