function Mostrar()
{
	var contenedor=0
	var bandera=0
	var contador=0

	while(contador<5)
	{
		contenedor=prompt("ingrese peso de contenedor")

		contenedor=parseInt(contenedor)

		while(isNaN(contenedor))
		{
			contenedor=prompt("no ingreso un numero")
			contenedor=parseInt(contenedor)
		}

		if (bandera==0)
		{
			pesoMayor=contenedor

			pesoMenor=contenedor

			bandera++
		}

		if (contenedor>pesoMayor)
		{
			pesoMayor=contenedor
		}

		if(contenedor<pesoMenor)
		{	
					pesoMenor=contenedor
		}	

	contador++
	}

alert("el mas pesado fue "+pesoMayor+" el menos pesado fue "+pesoMenor)

}
