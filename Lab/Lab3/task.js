self.onmessage=evaluate;
function evaluate(event)
{
	var n = event.data;
	var data=fact(n);
	self.postMessage(data);
}
function fact(n)
{
	if(n<=1)
		return 1;
	else
		return n*fact(n-1);
}
