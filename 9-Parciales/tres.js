function Mostrar()
{
	var largo
	var ancho
	var perimetro
	var resu

	largo=document.getElementById('alrgo').value
	ancho=document.getElementById('ancho').value

	largo=parseInt(largo)
	ancho=parseInt(ancho)

	perimetro=largo+largo+ancho+ancho
	resu=perimetro*3

	alert("el perimetro es "+resu)


}
