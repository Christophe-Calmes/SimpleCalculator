function randomPrice(range) {
    return Math.ceil(Math.random()*range);
}
function testNumber(data) {
    if(isNaN(data)){
        return false
    } else {
        return true
    }
}

const initialForm = document.getElementById("initialForm");
initialForm.addEventListener("submit", onFormSubmit);


function onFormSubmit(event){
    let count = [];
    let risk = 0;
    let win = false;
    let go = false;
    // Stop le reset de la page.
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
        nameOfPlayer = dataObject.nameOfPlayer;
        risk = dataObject.risk;
        if(risk >0) {go = true;}
        let price = randomPrice(risk)
        console.log(price);
        if (go) {
            do {
                number = parseInt(prompt(`Un nombre entre 1 et ${risk} ?`));
                if(!testNumber(number)){
                    alert("N'est pas un nombre.");
                    number = parseInt(prompt(`Un nombre entre 1 et ${risk} ?`));
                }
                count.push(1);
                if(price === number){
                    win = true;
                    go = false;
                } else if (price < number) {
                    console.log("C'est moins !");
                    alert("C'est moins !");
                } else {
                    console.log("C'est plus !");
                    alert("C'est plus !");
                }
            
            } while(!win)
        }
  
        message.innerText = `Bravo tu as gagné ${price - ((count.length)*(risk*0.1))} € ${nameOfPlayer} en ${count.length} count`;
        console.log(`Bravo tu as gagné ${price - ((count.length)*(risk*0.1))} € ${nameOfPlayer} en ${count.length} count`);
    

    
}
