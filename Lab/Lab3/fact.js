self.onmessage=factorial;

function factorial(event)
{
	var num=event.data;
	num=parseInt(num);
	if(isNaN(num))
		return;
	var i,res=1;
	for(i=num;i>=1;i--)
	{
		res=res*i;
		self.postMessage(res);
	}
	//self.postMessage(res);
}
