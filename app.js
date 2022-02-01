const dotcom = ".com"

let pronoun = ["the", "our", "your"];
let adj = ["great", "cold", "new"];
let noun = ["duncecap", "load", "grass", "Camera", "Jewellery",	"russia",
"candle",	"jordan",	"sandwich",
"car", "juice" , "school"];


let getRandomName =(max) => Math.floor(Math.random()* max);
const domainGenerator = () => 

`${pronoun[getRandomName(pronoun.length)]}
${adj[getRandomName(adj.length)]}
${noun[getRandomName(noun.length)]}`;

const setRandomName =() =>{
    document.getElementById('randomdomain').innerHTML = domainGenerator();
}

document.getElementById('generate')
    .addEventListener('click', setRandomName);
setRandomName();