document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  
  let number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      let output = '';
    }
  }

  xhr.send();

  e.preventDefault();
}