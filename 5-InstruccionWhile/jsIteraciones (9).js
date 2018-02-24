function Mostrar()
{

	var bandera=0;
	var numero
	var mayor
	var menor
	// declarar variables
	
	var respuesta='si';



		while(respuesta!='no')
		{
			numero=prompt()
			if(numero==null)
				{
					respuesta="no"
					continue
				}
			numero=parseInt(numero)
			if(isNaN(numero))
			{
				alert("no ingreso un numero")
				continue	
			}
			if(bandera==0)
			{
			bandera++
			mayor=numero
			menor=numero
			} else if (numero>mayor)
			{
				mayor=numero
			}
			else
			{
				if (numero<menor)
				{
					menor=numero
				}
			}
		}

	document.getElementById('maximo').value=mayor
	document.getElementById('minimo').value=menor
	}//FIN DE LA FUNCIÓN