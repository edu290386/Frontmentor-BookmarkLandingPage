const valor1 = parseFloat(prompt("Primer valor"));
const valor2 = parseFloat(prompt("Segundo valor"));
const operacion = prompt("Ingrese operacion: +,-,x,/");
let resultado = 0;
if (operacion ==="+"){
  resultado = valor1 + valor2;
} else if (operacion === "-"){
  resultado = valor1 - valor2;
} else if (operacion === "x"){
  resultado = valor1*valor2;
} else {
  resultado = valor1/valor2;
}
console.log(resultado);