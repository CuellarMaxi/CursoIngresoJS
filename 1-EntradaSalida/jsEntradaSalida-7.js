/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()


{	
	var numA;
	var numB;
	var resultado;

	numA=document.getElementById('numeroUno').value;
	numB=document.getElementById('numeroDos').value;

	numA=parseInt(numA);
	numB=parseInt(numB);

	resultado=numA+numB;

	alert("la suma es "+resultado);
}

function restar()
{
	var numA;
	var numB;
	var resultado;

	numA=document.getElementById('numeroUno').value;
	numB=document.getElementById('numeroDos').value;

	numA=parseInt(numA);
	numB=parseInt(numB);

	resultado=numA-numB;

	alert("la resta da "+resultado);

}

function multiplicar()
{ 
	var numA;
	var numB;
	var resultado;

	numA=document.getElementById('numeroUno').value;
	numB=document.getElementById('numeroDos').value;

	numA=parseInt(numA);
	numB=parseInt(numB);

	resultado=numA*numB;

	alert("la multiclicacion da "+resultado)
}

function dividir()
{
	var numA;
	var numB;
	var resultado;

	numA=document.getElementById('numeroUno').value;
	numB=document.getElementById('numeroDos').value;

	numA=parseInt(numA);
	numB=parseInt(numB);

	resultado=numA/numB;

	alert("la division es "+resultado);
}

