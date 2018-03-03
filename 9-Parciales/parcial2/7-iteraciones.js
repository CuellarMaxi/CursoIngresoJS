//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notas
	var contador=0
	var promedio=0
	var bandera=0
	var varones=0

	while (contador<6)
	{
		notas=prompt("ingrese notas")

		notas=parseInt(notas)

		while(notas<=0 || notas>10 || (isNaN(notas)))
		{
			notas=prompt("no puede ser menos que 0 ni mayor que 10")
			notas=parseInt(notas)
		}

		sexo=prompt("ingrese sexo F o M")

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese f o m")
		}

		promedio=promedio+notas

		if (bandera==0)
			{
				notaMin=notas
				notaMax=notas
				bandera++
			}

		if(notas<notaMin)
			{
				notaMin=notas
			}
		if (notas>5 && sexo=="m")
			{
				varones++
			}
		contador++


	}

	document.write("el promedio de las notas es "+(promedio/contador)+"<br>"+"La nota mas baja fue "+notaMin+"<br>"+"Los varones que sacaron mas de 6 fueron "+varones)
	
}

