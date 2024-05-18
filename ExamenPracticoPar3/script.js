function verificarPalindromo() {
    var frase = document.getElementById("frase").value;  //se declara una variable para recuperar el resultado del input 
    var resultado = palindromo(frase);              //se crea otra vaiable que manda a llamar a la funcion 
    document.getElementById("resultado").textContent = resultado;       //se imprime el resulatdo obtenido del la funcion palindromo()
}
function palindromo(cadena) {
    var resultado = "La frase \""+cadena+"\" \n";
    var cadenaOriginal = cadena.toLowerCase();          //funcion por si en el texto contiene letras mayusculas y minusculas 
    var letrasEspacios = cadenaOriginal.split("");      //funcion para que no afecten los espacios al momenteo de la comparacion 
    var cadenaSinEspacios = "";
        for(i in letrasEspacios) {
            if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
            }
        }
    var letras = cadenaSinEspacios.split("");           //se guaradn los datos de la cadena ya sin espacios para poder compararla 
    var letrasReves = cadenaSinEspacios.split("").reverse();    //funcion para acomodar la cadena al reves 
    var iguales = true;
        for(i in letras) {                              //ciclo for para ver si las cadenas son igual al derecho y al reves
            if(letras[i] == letrasReves[i]) {
            }
            else {
        iguales = false;
            }
        }
    if(iguales) {                                       //validacion si son iguales o no 
    resultado += " es un palíndromo";
    }
    else {
    resultado += " no es un palíndromo";
    }
    return resultado;
    }
    