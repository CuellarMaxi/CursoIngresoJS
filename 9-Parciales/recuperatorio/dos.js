function Mostrar()
{
  var importe

  importe=prompt("ingrese importe del produto")

  importe=parseInt(importe)

  while(isNaN(importe))
  {
  	importe=prompt("no ingreso un numero")
  	importe=parseInt(importe)
  }

  resultado=importe*75/100

document.getElementById('importeFinal').value=resultado
}
