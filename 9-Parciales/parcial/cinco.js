function Mostrar()
{
	var uno

	uno=prompt(" insterte dia de la semana ", uno)

	switch (uno) {
  case "sabado":
  case "domingo":
    alert("es fin de semana")
    break;

  case "lunes":
  case "martes":
  case "miercoles":
  case "jueves":
  case "viernes":
  case "Lunes":
  case "Martes":
  case "Miercoles":
  case "Jueves":
  case "Viernes":
  	alert("a trabajar!!!")
  	break;

  default :
  	alert("no has respondido con un dia de la semana")
    break;
}


}
