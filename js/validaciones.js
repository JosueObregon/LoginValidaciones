export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    /*Verificamos si en validadores existe el tipoDeInput y si existe vamos a pasarle como parametro el (input)*/
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = motrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismartch",
    "customError",
];

const mensajesError = {
    nombre: {
        valueMissing: "El campo Nombre no puede estar vacío",
    },
    email:{
        valueMissing: "El campo Email no puede estar vacío",
        typeMismatch: "El correo es invalido",
    },
    password: {
        valueMissing: "El campo Contraseña no puede estar vacío",
        patterMismartch: "Al menos 6 caracteres, máximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales",
    },
    nacimiento: {
        valueMissing: "El campo Fecha de Nacimiento no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
        valueMissing: "El campo Numero no puede estar vacío",
        patterMismartch: "El formato requerido es XXXXXXXXXX 10 Números",
    },
    direccion: {
        valueMissing: "El campo Dirección no puede estar vacío",
        patterMismartch: "La direccion es de minimo 10 caracteres y maximo 40",
    },
    ciudad: {
        valueMissing: "El campo Ciudad no puede estar vacío",
        patterMismartch: "La direccion es de minimo 10 caracteres y maximo 40",
    },
    estado: {
        valueMissing: "El campo Estado no puede estar vacío",
        patterMismartch: "La direccion es de minimo 10 caracteres y maximo 40",
    },
};

/*vamos a tener un objeto para los diferentes tipos de input que vamos a tener por ejemplo el de validarNacimiento*/
const validadores = {
nacimiento: (input) => validarNacimiento(input),
};

function motrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesError[tipoDeInput][error]);
            mensaje = mensajesError[tipoDeInput][error];
        }
    })
    return mensaje
}

function validarNacimiento(input){
    /*creamos nueva instancia de nuestra clase date con New date*/
    const fechaCliente = new Date (input.value);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
    }

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
        );
    return (diferenciaFechas <= fechaActual);
}