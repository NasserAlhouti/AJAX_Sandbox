document.querySelector('.get-jokes').addEventListener('click',getJokes)
function getJokes(e){
  const number = document.querySelector('input[type="number"]').value
  const getData = new XMLHttpRequest();
  getData.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  getData.onload = function(){
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output="";
      if(response.type === 'success'){
        response.value.forEach(function(element){
          output += `
          <li># ${element.id} ${element.joke}</li>
          `;

        })
      }else{
        output += `<li> Something went wrong</li>`
      }
      document.querySelector('.jokes').innerHTML += output;
    }
  }
  getData.send();
  e.preventDefault()
}
