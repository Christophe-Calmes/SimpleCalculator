const message = document.getElementById("message");
console.log(message);
function randomPrice(range) {
    return Math.ceil(Math.random()*range);
}

let count = [];

const nameOfPlayer = prompt("Quel est ton petit prenom ?");
const risk = parseInt(prompt("Vous aimez prendre des risques donner votre intervale?"))
const price =  randomPrice(risk);
let win =  false;
console.log(price);
do {
    let number = parseInt(prompt(`Un nombre entre 1 et ${risk} ?`));
    count.push(1);
    if(price === number){
        win = true;
    } else if (price < number) {
        console.log("C'est moins !");
        alert("C'est moins !");
    } else {
        console.log("C'est plus !");
        alert("C'est plus !");
    }

} while(!win)
message.innerText = `Bravo tu as gagné ${price - count.length} € ${nameOfPlayer} en ${count.length} count`;
console.log(`Bravo tu as gagné${price - count.length} € ${nameOfPlayer} en ${count.length} count`);