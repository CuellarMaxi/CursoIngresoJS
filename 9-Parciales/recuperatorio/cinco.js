function Mostrar()
{
	var mes

	mes=prompt("ingrese mes")

	mes=mes.Folowercase();
	switch(mes)
	{
		case"diciembre":
			alert("se vienen las fiestas")
			break;

		case"enero":
		case"Enero":
			alert("comienza el año")
			break;

		default:
			alert("no es diciembre ni enero")
		break;
	}
}
