import validator from './validator.js';
let cartNumber;
const enmascarar= document.getElementById("númerodetarjeta");
const validar= document.getElementById("validar");
console.log(validar)
validar.addEventListener( "click", function(){
cartNumber=enmascarar.value
enmascarar.value=validator.maskify(enmascarar.value)
console.log(cartNumber)
validator.isValid(cartNumber)
if (validator.isValid(cartNumber)){
    return alert ("tarjeta valida")}
    else{ 
    return alert ("tarjeta invalida")
}
});


/*validator.isValid(enmascarar.value)
console.log(validator.isValid(enmascarar.value))
enmascarar.value=validator.maskify(enmascarar.value)*/


const tarjeta= document.querySelector("#tarjeta");
 tarjeta.addEventListener("click", () => {
 tarjeta.classList.toggle("active");
});
































