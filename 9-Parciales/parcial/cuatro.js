function Mostrar()
{
	var num1;
	var num2;
	var numsame;
	var num4;
	var num5,

	num1=prompt(num1);
	num2=prompt(num2);

	num1=parseInt(num1);
	num2=parseInt(num2);

	if(num1==num2)
		{numsame=num1*num2
			document.write("multiplicado da "+numsame)}


	if(num1>num2)
		{num4=num1-num2
			document.write("restado da "+num4)}

	if(num1<num2)
		{num5=num1+num2
			document.write("sumado da "+num5)}


}
