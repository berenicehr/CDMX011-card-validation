/* eslint-disable no-console */



import validator from './validator.js';


document.getElementById("button").addEventListener("click", function()
{
    const registroTarjeta = document.getElementById("cardNumber").value;
    const result= validator.isValid(registroTarjeta)
    console.log(result)
    const hideNumbers = validator.maskify(registroTarjeta)
    console.log(hideNumbers)
}
);
   
