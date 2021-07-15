/* eslint-disable no-console */



import validator from './validator.js';


document.getElementById("button").addEventListener("click", function()
    {
    const registroTarjeta = document.getElementById("cardNumber").value;
    const result= validator.isValid(registroTarjeta)
    console.log(result)
   
    const hideNumbers = validator.maskify(registroTarjeta)
    console.log(hideNumbers)

    if (registroTarjeta == ""){
        document.getElementById("cardNumber").value=hideNumbers;
        document.getElementById("message1").innerHTML="Unable to validate on an empty box.";
    }  
    else if (result == true){
        document.getElementById("cardNumber").value=hideNumbers;
        document.getElementById("message1").innerHTML="Valid card, success.";
    }
    else {
        document.getElementById("cardNumber").value=hideNumbers;
        document.getElementById("message1").innerHTML="Unvalid card. Inspect your digits againgit or choose another card.";
    }
    
    }
); 
   
