
function Mostrar()
{
	var base

	base=document.getElementById('laBase').value;

	base=parseInt(base)

	if(isNaN(base))
	{
		alert("no ingreso un numero")
	}
	else
	{
	superficie=base*base

	alert("la superficie es "+superficie)
	}
}
