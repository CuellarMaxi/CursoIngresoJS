//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe
	var bandera=0
	var contador=0


	while (contador<7)
	{
		importe=prompt("ingrese importe")

		importe=parseInt(importe)

		while (importe<=0 || (isNaN(importe)))
		{
			importe=prompt("no puede ser menor a 0")
			importe=parseInt(importe)
		}
		if (bandera==0)
		{
			importeMenor=importe
			importeMayor=importe
			bandera++
		}

		if(importe>importeMayor)
		{
			importeMayor=importe
		}
		if(importe<importeMenor)
		{
			importeMenor=importe
		}
		contador++
	}

alert("el menor importe fue "+importeMenor+" y el mayor fue "+importeMayor)
	
}

