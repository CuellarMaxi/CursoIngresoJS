function Mostrar()
{
	var precioUno
	var precioDos
	var precioTres
	var sumaPrecios
	var promedio

	precioUno=document.getElementById('precioUno').value
	precioDos=document.getElementById('precioDos').value
	precioTres=document.getElementById('precioTres').value

	precioUno=parseInt(precioUno)
	precioDos=parseInt(precioDos)
	precioTres=parseInt(precioTres)

	if( (isNaN(precioUno))||(isNaN(precioDos))||(isNaN(precioTres)) )
	{
		alert("no ingresu un numero valido")
	}
	else
	{
		sumaPrecios=precioUno+precioDos+precioTres
		promedio=sumaPrecios/3

		alert("la suma es "+sumaPrecios+" y el promedio es "+promedio)
	}

}
