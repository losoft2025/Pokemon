// Obtener elementos del DOM
const urlbase ="https://pokeapi.co/api/v2/"
const buttonElement = document.getElementsByTagName('button')[0];
const imageElement = document.getElementsByClassName('pica')[0];


// fetch para obtener los datos del backend 
fetch(`${urlbase}pokemon-form/pikachu/`)  // realiza la peticion
  .then((response) => response.json())    // si la promesa de la peticion se resulve
  .then((data) =>{                      // si la promesa de ejecutar .json se resuelve
    console.log(data);
    // modificar el nodo con los datos obtenid  
  }
  ) 

  const pikachuImg = document
  fetch(`${urlbase}pokemon-form/pikachu/`)  // realiza la peticion
  .then((response) => response.json())    // si la promesa de la peticion se resulve
  .then((data) =>{                      // si la promesa de ejecutar .json se resuelve
    console.log(data);
    // modificar el nodo con los datos obtenid  
  }
  ) 


/* Agregar evento de clic al botón
buttonElement.addEventListener('click', () => {
   Cambiar la imagen a Raichu
  imageElement.src = "imagenes/evolucion.jpg";
  buttonElement.textContent = "normal";
});
*/
