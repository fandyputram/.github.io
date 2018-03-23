function generateRandomNumber() {
	document.getElementById("result").innerHTML = null;
	var min = Number(document.randomData.min.value);
	var max = Number(document.randomData.max.value);
	var amount = Number(document.randomData.amount.value);

	var diff=max-min+1;

	if(diff<amount)
	{
		document.getElementById("alert").innerHTML="Please input an appropriate value!"
	}
	else
	{
		document.getElementById("alert").innerHTML=null;
		document.getElementById("result").innerHTML='</br>';
		var status=[false];
		for(i = 0;i < amount; i++)
		{
			var num=(Math.floor(Math.random() * diff) + min);
			if(status[num]!=true)
			{
				var randomNumber = '<div>' + num + '</div>';
				status[num]=true;
				document.getElementById("result").innerHTML += randomNumber;
			}
			else
			{
				i--;
			}
		}
	}
}

