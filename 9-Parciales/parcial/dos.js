function Mostrar()
{
	var num1
	var num2
	var resu

	num1=prompt("importe".num1);

	num1=parseInt(num1);

	resu=num1*0.21

	document.getElementById('importeFinal').value=num1+resu
}
