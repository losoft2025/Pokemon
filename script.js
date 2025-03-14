// Obtener elementos del DOM
const urlbase ="https://pokeapi.co/api/v2/"
const buttonElement = document.getElementById('acc');
const imgElement = document.getElementById('pica');
const nameElement =  document.getElementById('nombre');
const descriptionElement = document.getElementById('descripcion');
console.log(descriptionElement);



// fetch para obtener los datos del backend 
fetch(`${urlbase}pokemon/25/`)  // 25 es el id de pikachu   devuelve una promesa
  .then((response) => response.json())    // cuando la primera promesa se resuelve ejecuta esto
  .then((data) =>{                      // cuando la segunda promesa se resuelve ejecuta esto
    imgElement.src = data.sprites.front_default;
    console.log(data);
   }); 

   //buttonElement.addEventListener('click',()) =>{

   //}
  /*const pikachuImg = document
  fetch(`${urlbase}pokemon-form/pikachu/`)  // realiza la peticion
  .then((response) => response.json())    // si la promesa de la peticion se resulve
  .then((data) =>{                      // si la promesa de ejecutar .json se resuelve
    // modificar el nodo con los datos obtenid  
  }
  ) 
*/

/* Agregar evento de clic al botón
buttonElement.addEventListener('click', () => {
   Cambiar la imagen a Raichu
  imageElement.src = "imagenes/evolucion.jpg";
  buttonElement.textContent = "normal";
});
*/

