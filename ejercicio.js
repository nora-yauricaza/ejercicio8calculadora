var opcion = parseInt(prompt("Ingresa una opcion:\n" +
  "1.Suma\n" +
  "2.Resta\n" +
  "3.Multiplicación\n" +
  "4.División\n" +
  "5.Residuo\n" +
  "6.Mayor\n" +
  "7.Menor\n" +
  "8.Mayor o igual\n" +
  "9.Menor o igual"));
var resultado; 
if(opcion <=0 || opcion <=9) {
  window.alert("No es una opción válida");
} else {
  var num1 = parseInt(prompt("Ingresa primer número"))
  var num2 = parseInt(prompt("Ingresa segundo número"))
}
switch(opcion) {
  case 1:
       resultado = num1 + num2;
       window.alert("El resultado es " + resultado);
       break;    
  case 2:
       resultado = num1 - num2;
       window.alert("El resultado es " + resultado);
       break;
  case 3 :
       resultado = num1 * num2;
       window.alert("El resultado es " + resultado);
       break; 