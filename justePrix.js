const message = document.getElementById("message");
console.log(message);
const price =  Math.ceil(Math.random()*100);
const nameOfDragon = prompt("Quel est ton petit prenom ?");
let boolean =  false;
console.log(price);
do {
    let number = parseInt(prompt("Un nombre entre 1 et 100 ?"));
    
    if(price === number){
        boolean = true;
    } else if (price < number) {
        console.log("C'est moins !");
        alert("C'est moins !");
    } else {
        console.log("C'est plus !");
        alert("C'est plus !");
    }

} while(!boolean)
message.innerText = `Bravo tu as gagné ${price} € ${nameOfDragon}`;
console.log(`Bravo tu as gagné${price} € ${nameOfDragon}`);