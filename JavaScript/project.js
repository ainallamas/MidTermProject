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


//Fetch API -> Random Projects 

 
const cargarData = async () => {
    
        try {
            const respuesta = await fetch ('https://jsonplaceholder.typicode.com/posts/'); 
            // console.log (respuesta);
    
            const datos = await respuesta.json ();
            // console.log (datos); 
            //D'aquesta manera puc accedir a les dades i puc fer el que vulgui amb elles. 
    
            //Creo una variable amb una cadena de text buida:
            let titol = ''; 
            let body = '';  
    
            //Per cada post vull crear un codi html i guardar-lo a la variable post.
            datos.forEach(post => {
                titol = 
                `${post.title}`;
                body = 
                `${post.body}`;
            // console.log (post.title); //Estem accedint al title de cadascun dels posts. 
            });
    
            document.querySelector('#title').innerHTML = titol; 
    
            document.querySelector('#random').innerHTML = body; 
    
    
        } catch (error) { //Només es mostraria en cas de que hi hagi un error en la petició. 
        console.log (error);
        }
    }
    
    cargarData (); 
    

    const getRecentProjects = async () => {

        const promise = await fetch ('https://jsonplaceholder.typicode.com/posts/');
        const data = await promise.json ()

        document.querySelector('#recentProjects').innerHTML = 

        `<div class="simplify">
        <img class="grafic" src="../ProjectAssets/projects-section/1.jpg" alt=""/>
        <h3>${data[0].title}</h3>
        <p>${data[0].body}</p>
        <p class="learn">Learn more</p>
        </div>    
        
        <div class="dashcoin">
        <img class="grafic" src="../ProjectAssets/projects-section/2.jpg" alt=""/>
        <h3>${data[1].title}</h3>
        <p>${data[1].body}</p>
        <p class="learn">Learn more</p>
        </div>

        <div class="vectorify">
        <img class="grafic" src="../ProjectAssets/projects-section/3.jpg" alt=""/>
        <h3>${data[2].title}</h3>
        <p>${data[2].body}</p>
        <p class="learn">Learn more</p>
        </div>
        `
    }

    getRecentProjects (); 

    // ANOTHER WAY:

    // const getRecentProjects = async () => {

    //     const promise = await fetch ('https://jsonplaceholder.typicode.com/posts/');
    //     const data = await promise.json ()

    //     document.querySelector('#recentProjectTitle1').innerHTML = `${data[0].title}`; 
    //     document.querySelector('#recentProjectTitle2').innerHTML = `${data[1].title}`;
    //     document.querySelector('#recentProjectTitle3').innerHTML = `${data[2].title}`;

    //     document.querySelector('#recentProjectBody1').innerHTML = `${data[0].body}`;
    //     document.querySelector('#recentProjectBody2').innerHTML = `${data[1].body}`;
    //     document.querySelector('#recentProjectBody3').innerHTML = `${data[2].body}`;

    //     }
        
    //     getRecentProjects (); 