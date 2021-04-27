function compruebaPar() {
	
	var numero = prompt("Introduce un número entero");
	
	//compruebo el modulo de 2 del numero
	if(numero % 2 == 0) {
		alert("El número "+numero+" es par");
		return "par";
	}
	else {
		alert("El número "+numero+" es impar");
		return "impar";
	}	
}

function compruebaPalindromo(){
	var palabra = prompt("Introduce una frase para comprobar si es palíndromo");

    // Paso la fraseUser a minusculas y quito espacios
    palabra = palabra.toLowerCase().replace(/\s/g,"");
	  
    /* Creo otra frase partiendo de la de userFrase pero
    la convierto en array, le doy la vuelta al array, lo paso a string*/
    palabraVolteada = palabra.split("").reverse().toString();
	  
    // Le quito las "," con un remplace dentro del for
    for (var i = 0; i < ((palabraVolteada.length)-1); i++) {
      palabraVolteada = palabraVolteada.replace(",","");
    };
    // Comparo las dos frases.
    if(palabra == palabraVolteada){
      // Si el resultado es positivo
      resultado = "es un Palindromo";
    }
    else{
      resultado = "no es un Palindromo";
    }
    // Muestro el el resultado
    alert("Tu frase "+resultado);
}

function detectaBoton(evento){
  let id = evento.id;
  alert("Botón pulsado: "+id);
}

function volteaPalabra(){
	
	var palabra = prompt("Introduce una palabra para voltearla");
	var palabraVuelta = palabra.split("").reverse().toString();
  
	alert("Palabra volteada: " + palabraVuelta);
}