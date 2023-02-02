import { valida } from "./validaciones.js";
/*Primero vamos a seleccionar todos los input que tenemos*/
const inputs = document.querySelectorAll("input");
/*
Le va a agregar a cada uno de los input el addEventListener cuando salgan de foco.
Vamos a recibir un arreglo el cual vamos a iterar
*/
inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        /*cuando salga de foco va a mandar a llamar a esta funcion valida(input.target) */
        valida(input.target);
    });
});
 