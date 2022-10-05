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


