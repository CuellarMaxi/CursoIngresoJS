function Mostrar()

// ingresar dos numeros si son iguales los concatenamos si el primero es mayor que el segundo lo multiplicamos y si el primero
//es menor que el segundo lo restamos
{
	var num1;
	var num2;
	var resultado;
	var resultadopar


	
	num1=prompt(num1);
	num2=prompt(num2);

	if(num1==num2)
		{
			resultado=num1+num2
		}
		else 
		{
			num1=parseInt(num1);
			num2=parseInt(num2);

				if(num1>num2)
				{
					resultado=num1*num2
					if(resultado%2==0 && resultado !=0)
						{	
							resultado=resultado + " es par "
						}
				}
				else
					{
						resultado=num1-num2
					}
		}

	document.write("el resultado es "+resultado)

}
