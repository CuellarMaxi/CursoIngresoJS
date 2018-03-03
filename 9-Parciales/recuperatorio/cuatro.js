function Mostrar()
{
	var numeroUno
	var numeroDos
	var resultado

	numeroUno=prompt("ingrese numero 1")
	numeroDos=prompt("ingrese numero 2")

	numeroUno=parseInt(numeroUno)
	numeroDos=parseInt(numeroDos)

	while(isNaN(numeroUno))
	{
		numeroUno=prompt("no ingreso primer numero")
		numeroUno=parseInt(numeroUno)
	}
	while(isNaN(numeroDos))
	{
		numeroDos=prompt("No ingreso segundo numero")
		numeroDos=parseInt(numeroDos)
	}

	resultado=numeroUno+numeroDos

	if(resultado>0)
	{
		final="positivo"
	}
		else
		{
			if(resultado==0)
			{
				final="cero"
			}
			else
			{
				final="negativo"
			}
		}
	document.write("el resultado es "+final)
}
