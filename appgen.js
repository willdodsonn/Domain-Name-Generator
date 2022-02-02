const dotcom = ".com";

  
let pronoun = ["the", "our", "your"];
let adj = ["great", "cold", "new"];
let noun = [
  "duncecap",
  "load",
  "grass",
  "Camera",
  "Jewellery",
  "russia",
  "candle",
  "jordan",
  "sandwich",
  "car",
  "juice",
  "school",
];

for (let i = 0; i < 10; i++) {
  let result =
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] + dotcom;
    console.log(result);
}
