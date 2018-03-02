function Mostrar()

//	pedir datos hasta que el cliente quiera los datos son
//	nombre del animal
//	peso del animal validar mayor a 0
//	temperatura del habitat entre -40 y +40
//
// informar nombre del animal mas pesado
// informar nombre del animal de la temperatura mas baja
// cantidad de temperaturas pares
// promedio de peso de los animales
//temperatura maxima y temperatura minima
{
	var nombreDelAnimal
	var pesoDelAnimal
	var temperaturaDelAnimal
	var bandera=0
	var pesoAnimalMasPesado
	var temperaturaMasBaja
	var temperaturaMasAlta
	var nombreMasPesado
	var AnimalMasFrio
	var temperaturaMin
	var temperaturaMax
	var contador=0
	var pares
	var promedioDeAnimales

	nombreDelAnimal=prompt("ingrese nombre de animal")
	pesoDelAnimal=prompt("ingrese peso del animal")

	pesoDelAnimal=parseInt(pesoDelAnimal)
	
	while(pesoDelAnimal<=0 || (isNaN(pesoDelAnimal)))
		{
			pesoDelAnimal=prompt("el peso no puede ser menor que 0")
			pesoDelAnimal=parseInt(pesoDelAnimal)

			contador=contador+pesoDelAnimal
			promedio++
		}

	temperaturaDelAnimal=prompt("ingrese temperatura del animal")

	temperaturaDelAnimal=parseInt(temperaturaDelAnimal)

		while(temperaturaDelAnimal<-40 || temperaturaDelAnimal>40 || (isNaN(temperaturaDelAnimal)))
		{
			temperaturaDelAnimal=prompt("la temperatura del animal no puede ser menor ni mayor que 40")
			temperaturaDelAnimal=parseInt(temperaturaDelAnimal)
		}

	while(bandera==0)
		{
			pesoAnimalMasPesado=pesoDelAnimal
			temperaturaMasBaja=temperaturaDelAnimal
			temperaturaMin=temperaturaDelAnimal
			temperaturaMax=temperaturaDelAnimal
			bandera++
		}
		if (pesoDelAnimal>=pesoAnimalMasPesado)
			{
				nombreMasPesado=nombreDelAnimal
			}
		if (temperaturaDelAnimal<=temperaturaMin)
			{
				AnimalMasFrio=nombreDelAnimal
			}
		if (temperaturaDelAnimal<=temperaturaMasBaja)
			{
				temperaturaMin=temperaturaDelAnimal
			}
		if (temperaturaDelAnimal>=temperaturaMax)
			{
				temperaturaMax=temperaturaDelAnimal
			}
			if(temperatura%2==0 && !=0)
			{
				pares++
			}
		promedioDeAnimales=contador/promedio

	document.write("El animal pas pesado es "+nombreMasPesado+"<br>"+"el animal mas frio es"+AnimalMasFrio+"<br>"+"las temperaturas pares son "+pares+"<br>"+"el promedio del peso es"+promedioDeAnimales+"<br>"+"la temperatura maxima es "+temperaturaMax+" y la mas baja es "+temperaturaMin)
}
