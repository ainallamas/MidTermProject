
// Hamburguer MENU

function myFunction () {
    let x = document.getElementById("myLinks"); 
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    document.getElementById("myLinks").style.backgroundColor = "#C8C8C8";
}


//POST  

const fullName = document.querySelector('#nomComplet'); 
const email = document.querySelector('#email'); 
const phoneNumber = document.querySelector ('#phoneNumber');
const message = document.querySelector ('#message');

button.addEventListener('click', async (e) => {
    e.preventDefault(); 

    const nom = fullName.value;
    console.log (`Name: ${nom}`);

    const correu = email.value;
    console.log (`Email: ${correu}`);

    const telf = phoneNumber.value; 
    console.log (`Phone number: ${telf}`);

    const missatge = message.value;
    console.log (`Message: ${missatge}`);

})

