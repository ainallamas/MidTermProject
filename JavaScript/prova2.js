
const cargarData = async () => {

let 

    try {
        const respuesta = await fetch ('https://jsonplaceholder.typicode.com/posts/' + id); 
        // console.log (respuesta);

        const datos = await respuesta.json ();
        // console.log (datos); 
        //D'aquesta manera puc accedir a les dades i puc fer el que vulgui amb elles. 

        //Creo una variable amb una cadena de text buida:
        let titol = '';  

        //Per cada post vull crear un codi html i guardar-lo a la variable post.
        datos.forEach(post => {
            titol = 
            `<h1 class=title>${post.title}</h1>`;
        // console.log (post.title); //Estem accedint al title de cadascun dels posts. 
        });

        document.querySelector('#title').innerHTML = titol; 

        let body = ''; 
        datos.forEach(post => {
            body = 
            `<p class="text">${post.body}</h1>`;
        }); 

        document.querySelector('#random').innerHTML = body; 


    } catch (error) { //Només es mostraria en cas de que hi hagi un error en la petició. 
    console.log (error);
    }
}

cargarData (); 


