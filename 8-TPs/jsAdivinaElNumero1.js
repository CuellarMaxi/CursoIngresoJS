/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numero;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto= Math.floor(Math.random()*100)+1

		alert(numeroSecreto );
		
}

function verificar()
{

	document.getElementById('intentos').value=++contadorIntentos;
	if(contadorIntentos>10)
	{
		alert("PERDIO")
		return;
	}

	numero = document.getElementById('numero').value;
	
	numero=parseInt(numero)

	if (numero==numeroSecreto && contadorIntentos==1)
	{
		alert("que suerte que tenes")
	}
	else
	{
		if (numero==numeroSecreto)
		{
		alert("usted gano")
		}

		else
		{
			if(numero>numeroSecreto)
			{
				alert("se paso ")
			}

			else
			{
			alert("le falta")
			}
		}	
	}
}