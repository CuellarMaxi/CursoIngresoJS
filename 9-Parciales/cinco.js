function Mostrar()
//mostar el numero mayor solo usando IF
{
	var numero
  var numero2
  var numero3
  var mayor

      numero=prompt("ingrese numero")
      numero2=prompt("ingrese numero")
      numero3=prompt("ingrese numero")

      numero=parseInt(numero)
      numero2=parseInt(numero2)
      numero3=parseInt(numero3)

      mayor=numero
      
      if(numero>numero2 && numero>numero3)
      {
        mayor=numero
      }
      else
      {
        if (numero2>numero && numero2>numero3)
        {
          mayor=numero2
        }
        else
        {
          mayor=numero3
        }
      }
  alert("el mayor es "+mayor)
}
