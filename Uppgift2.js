
let btn = document.querySelector('#btn');
let jsonoutput = document.querySelector('#json-output');





const div1 = document.querySelector('#div1');
let h1 = document.createElement('h1');
div1.appendChild(h1);


const getJson = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            jsonoutput.innerHTML = "";
            data.forEach(post => {
                jsonoutput.innerHTML +=
                    
                `
                <p class="card-text"> ${post.suit}:${post.value}</p>
                `
                
            })
        })
        .catch(error => console.log('Error: ' + error))
}

btn.addEventListener('click', getJson)