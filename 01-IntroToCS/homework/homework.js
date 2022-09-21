'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /* A cada dígito se le asigna la correspondiente potencia de 2
     y se suman aquellas que tienen el dígito binario 1.
     Ej.: 1 0 0 1
          8 4 2 1 potencias o pesos
          8 + 1 = 9 
  */
  
  let peso = 1;
  let decimal = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] == '1')
      decimal += peso;
    peso *= 2;
  }
  return decimal;
  
  /*
  function BinToDec() {
  const b = [1, 0, 0, 1, 1, 0];
  decimal = 0;
  b.forEach((valor, indice) => {
    peso = Math.pow(2, b.length - 1 - indice);
    decimal += ((valor == 1) ? peso : 0); 
  });
  return decimal;
  }
  */
}

function DecimalABinario(num) {
  // tu codigo aca
  /* num, entero > 0
     Dividir sucesivamente por dos y tomar el resto 
     que formará el número binario a la inversa
  */
  if (num < 2) 
    return num;

  let rest = [];
  let bin = "";
  do {
    rest.push(num % 2);
    num = Math.floor((num /= 2));
  } while(num != 1);
  rest.push(1);
  rest.forEach((value) => {
    bin = value.toString() + bin;
  });
  return bin;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}