function Mostrar()
{
//tomo la edad  

var edad

edad=document.getElementById('edad').value;

if(edad<18 && edad >12)
	{
		alert("usted es adolecente")
	}

if(edad<13)
	{
		alert("usted es niño")
	}
if (edad>17)

	{
		alert("usted es mayor de edad")
	}

}//FIN DE LA FUNCIÓN

//if (edad<13)
//	{
//		alert("niño");
//	}
//	else
//	{
//		if (edad >17)
//			{
//			alert("mayor")
//			}
//		else
//			{
//			alert("adolecente")
//			}
//	}