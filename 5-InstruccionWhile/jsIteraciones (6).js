function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var iteraciones=5
	var promedio;

	while(contador<iteraciones)
	{
		contador++
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}
	promedio=acumulador/contador

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN