function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota

	nota=Math.floor(Math.random()*10)+1;	

	if (nota<4)
		{
			alert("Vamos, la proxima se puede "+nota);
		}

	else
		{
			if (nota >8)
			{
				alert("EXCELENTE "+nota)
			}
			else
			{
				alert("APROBO "+nota)
			}
		}
}//FIN DE LA FUNCIÓN
//if ()
//	{
//		alert("");
//	}
//	else
//	{
//		if ()
//			{
//			alert("")
//			}
//		else
//			{
//			alert("")
//			}
//	}