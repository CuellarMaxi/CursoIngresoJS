/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno
	var preciodos
	var preciotres
	var sumar

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno)
	preciodos=parseInt(preciodos)
	preciotres=parseInt(preciotres)

	sumar=preciouno+preciodos+preciotres

	alert(sumar)

}
function Promedio () 
{
	var preciouno
	var preciodos
	var preciotres
	var promedio

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno)
	preciodos=parseInt(preciodos)
	preciotres=parseInt(preciotres)

	promedio=(preciouno+preciodos+preciotres)/3

	alert(promedio)
}
function PrecioFinal () 
{
	var preciouno
	var preciodos
	var preciotres
	var unoiva
	var dosiva
	var tresiva
	var final

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno)
	preciodos=parseInt(preciodos)
	preciotres=parseInt(preciotres)

	unoiva=(preciouno*0.21)+preciouno
	dosiva=(preciodos*0.21)+preciodos
	tresiva=(preciotres*0.21)+preciotres

	final=unoiva+dosiva+tresiva

	alert(final)	

}