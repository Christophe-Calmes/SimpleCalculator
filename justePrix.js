
/*const nameInput = document.getElementById("nameOfPlayer");
const nameOfPlayer = nameInput.value;
const riskInput = document.getElementById("nameOfPlayer");
const risk = nameInput.value;*/
const initialForm = document.getElementById("initialForm");
initialForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event){
    // Stop le reset de la page.
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
}

//console.log(nameOfPlayer);

/*const message = document.getElementById("message");
console.log(message);
function randomPrice(range) {
    return Math.ceil(Math.random()*range);
}
function testNumber(data) {
    if(isNaN(data)){
        return false
    } else {
        return true
    }
}*/
let count = [];
/*
//const nameOfPlayer = prompt("Quel est ton petit prenom ?");
//let risk = parseInt(prompt("Vous aimez prendre des risques donner votre intervale?"))
if(!testNumber(risk)){
    alert("Risk n'est pas un nombre.")
    risk = parseInt(prompt("Vous aimez prendre des risques donner votre intervale?"))
}
const price =  randomPrice(risk);
let win =  false;
let number = '';
console.log(price);
do {
    number = parseInt(prompt(`Un nombre entre 1 et ${risk} ?`));
    if(!testNumber(number)){
        alert("N'est pas un nombre.");
        number = parseInt(prompt(`Un nombre entre 1 et ${risk} ?`));
    }
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
message.innerText = `Bravo tu as gagné ${price - ((count.length)*(risk*0.1))} € ${nameOfPlayer} en ${count.length} count`;
console.log(`Bravo tu as gagné ${price - ((count.length)*(risk*0.1))} € ${nameOfPlayer} en ${count.length} count`);
*/