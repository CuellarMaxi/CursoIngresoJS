function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero

	while(respuesta=="si")
	{
		numero=prompt();
		if (numero==null)
		{
			respuesta="no"
			continue
		}
		numero=parseInt(numero);
		if(isNaN(numero))
		{
			alert("no ingreso un numero")
			continue
		}
		acumulador=acumulador+numero
		contador=contador+1

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN