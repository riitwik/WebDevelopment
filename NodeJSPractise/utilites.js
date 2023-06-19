exports.isPrime=function(n){
	flag=true;
	for(i=2;i<n;i++)
	{
		if(n%i==0)
		{
			flag=false;
			break;
		}
		return flag;
	}
}	

exports.calFact=function(num){
	fact=1;
	for(i=1;i<=num;i++)
	{
		fact*=i;
	}
	return fact;

}

exports.isPerfect=function(n){
	
	flag=false;
	sum=0;
	for(i=1;i<n;i++)
	{
		if(n%i==0)
		{
			sum+=i;
		}
	}
	if(sum==n)
		flag=true;
	
	return flag;
}
	