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
    valueMissing:"El campo nombre no puede estar vacío",
    patternMismatch:"El nombre no puede tener más de 50 caracteres",
  },
  email:{
    valueMissing:"El campo email no puede estar vacío",
    typeMismatch:"El correo no es válido",
  },
  asunto:{
    valueMissing:"El campo asunto no puede estar vacio",
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
