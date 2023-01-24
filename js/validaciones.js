export function valida(input){
    const tipoDeInput=input.dataset.tipo;
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML="";
      }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML=mostrarMensajeDeError(tipoDeInput,input);
}
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];


const mensajesDeError={
  nombre:{
    valueMissing:"El campo no puede estar vacío",
  }
}

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje="";
  tipoDeErrores.forEach((error)=>{
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
  }
