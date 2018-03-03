//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo
	var ancho

	largo=document.getElementById('largo').value
	ancho=document.getElementById('ancho').value


	alert((ancho*2+largo*2)*6);
	
}

