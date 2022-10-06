
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


const getOtherProjects = async () => {

    const promise = await fetch ('https://jsonplaceholder.typicode.com/posts/');
    const data = await promise.json ()

    document.querySelector('#otherProjects').innerHTML = 

    `<div class="simplify">
        <img class="grafic" src="../ProjectAssets/projects-section/1.jpg" alt=""/>
        <h3>${data[9].title}</h3>
        <p>${data[9].body}</p>
        <p class="learn">Learn more</p>
      </div>

      <div class="dashcoin">
        <img class="grafic" src="../ProjectAssets/projects-section/2.jpg" alt=""/>
        <h3>${data[4].title}</h3>
        <p>${data[4].body}</p>
        <p class="learn">Learn more</p>
      </div>

      <div class="vectorify">
        <img class="grafic" src="../ProjectAssets/projects-section/3.jpg" alt=""/>
        <h3>${data[6].title}</h3>
        <p>${data[6].body}</p>
        <p class="learn">Learn more</p>
      </div>`

    }

getOtherProjects (); 