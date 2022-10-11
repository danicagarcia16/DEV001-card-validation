const validator ={
 isValid:function(númerodetarjeta) {
const card =númerodetarjeta .split("");
  //console.log(card);
  let cardreverse = card.reverse();
  //console.log(cardreverse);
  let nuevoarray= cardreverse;
console.log(nuevoarray)
let suma = 0;
  let number= 0;
for (let i = 0; i < nuevoarray.length; i++) {
    number = parseInt(nuevoarray[i]);
if (i % 2 == 1) {  
      number = number*2;
       if (number >= 10) {
        number= parseInt(number) - 9;
        console.log(number)} 
    } 
    suma+= number;
    console.log(suma ,'suma')
  }
  if((suma)%10 == 0){
      /*alert("tarjeta valida")*/
      return true
    }else {/*alert("tarjeta invalida")*/
    return false}
  },
maskify:function(númerodetarjeta){
  if (númerodetarjeta.length < 4) return númerodetarjeta;
	const last4Characters = númerodetarjeta.substr(-4);
  const maskingCharacters = númerodetarjeta.substr(0, númerodetarjeta.length - 4).replace(/./g, '#');
  return `${maskingCharacters}${last4Characters}`;
}
}








  // ...



export default validator;
