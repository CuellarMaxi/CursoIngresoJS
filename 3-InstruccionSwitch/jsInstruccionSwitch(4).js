function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Diciembre"
					alert("este mes tiene 31 dias.")

		break

		case "Febrero":
					alert("este mes tiene 28 dias.")
		break

		case "Abril":
		case "Noviembre":
		case "Junio":
		case "Septiembre":
		case "Octubre":
					alert("este mes tiene 30 dias.")
		break
	}

//el que mas tiene podria tener default
//								alert("este mes tiene X dias.")
//


}//FIN DE LA FUNCIÓN