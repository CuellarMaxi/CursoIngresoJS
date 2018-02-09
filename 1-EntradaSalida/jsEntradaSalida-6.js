/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroA;
	var numeroB;
	var suma;

	numeroA=document.getElementById('numeroUno').value;
	numeroB=document.getElementById('numeroDos').value;

	numeroA=parseInt(numeroA);
	numeroB=parseInt(numeroB);
	suma=numeroA+numeroB;

	alert("El resultado es "+suma);
}

