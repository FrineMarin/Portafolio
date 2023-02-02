import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input, textarea");


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

inputs.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    valida(textarea.target);
  });
});
