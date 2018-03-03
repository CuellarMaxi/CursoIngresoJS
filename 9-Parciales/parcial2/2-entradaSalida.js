//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var iva=1.21

	importe=prompt("ingrese importe")

	document.getElementById('importe').value=importe*iva
}

