function Mostrar()
{
	var numero
	var cantidadpos=0
	var cantidadneg=0
	var negativos=0
	var positivos=0
	var ceros=0
	var promediopos=0
	var promedioneg=0
	var numerospares=0
	var diferencia
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt()

		if(numero==null)
		{
			respuesta="no"
			continue
		}

		numero=parseInt(numero)
			if (isNaN(numero))
				{
					alert("no ingreso numero")
				continue
			}
			if  (numero<0)
			{
				negativos=negativos+numero
				cantidadneg++
			}
			else 
				{
					if(numero>0)
						{
						positivos=positivos+numero
						cantidadpos++
						}
					else
						{
							ceros++
						}
				}
			if (numero%2==0 && numero !=0)
			{
				numerospares++
			}
		promediopos=positivos/cantidadpos
		promedioneg=negativos/cantidadneg
		diferencia=positivos-negativos

	
	}
 document.write("La suma de negativos da "+negativos+"<br>"+"La suma de positivos da "+positivos)
 document.write("<br>"+"La cantidad de 0 son "+ceros)
 document.write("<br>"+"La cantidad de positivos son "+cantidadpos+"<br>"+"La cantidad de negativos son "+cantidadneg)
 document.write("<br>"+"los numeros pares son "+numerospares)
 document.write("<br>"+"El promedio de numeros positovos son "+promediopos)
 document.write("<br>"+"El promedio de numeros negativos son "+promedioneg)
 document.write("<br>"+"La diferencia entre los positivos y negativos es "+diferencia)

}//FIN DE LA FUNCIÓN