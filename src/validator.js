/* eslint-disable no-console */

const validator = { 

  "isValid": function(numerosIniciales){
    /*construir un array de los números de tarjeta*/
  const arreglo=Array.from(numerosIniciales).map(Number);
 
  /*invertir los numeros del array*/
  const reversa=arreglo;
  console.log(reversa);  
  
  /*Obtener los números pares para multiplicarlos por dos */
  let suma = 0;
  for (let i=0; i<reversa.length; i++){
   
    if (i % 2 == 0){ 
      let multiplicar = reversa[i]*2;
      console.log(multiplicar);
      if (multiplicar>=10){
        let numeroFinal= multiplicar-9;
        suma = suma+numeroFinal;
      }
      else{
        suma = suma+multiplicar;
        console.log(suma);
      }
    }
    else {
        suma = suma+reversa[i];
        console.log(suma);
    }
  
  }

  console.log(suma);
  let resultado = suma % 10;
  if (resultado == 0) {
    return  true; 
  }
  else {
    return false;
  }

  

  // eslint-disable-next-line no-unreachable
 /* return {numerosIniciales}*/
},

  
  "maskify": function(hidden){ 
    let longitud= hidden.length;
    if(longitud<=4){
      return (hidden);
    }
    else {
      let listaCadena=Array.from(hidden);
      for (let i=0; i<hidden.length-4; i++){
        listaCadena[i]="#";
      }
      let revision=listaCadena.join("");
      return revision;
    }  
  }
}

export default validator;
