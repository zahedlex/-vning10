
function getApi(){
  
    let btn = document.querySelector('#btn');
    let jsonOutput = document.querySelector('#json-output');
   
    
    fetch('https://www.swapi.tech/api/people/?name=')
     .then(res => res.json())
     .then(data =>
     {
console-log(data);
jsonOutput.innerhtml = ""
data.forEach(post => {
    jsonOutput.innerHTML +=
    `
    <p class="card-text"> ${post.height}:${post.mass}:${post.gender}:${post.hair_color} </p>
    `
})

    

})
     .catch(err => console.log(err))

    }

    btn.addEventListener('click', getApi)
