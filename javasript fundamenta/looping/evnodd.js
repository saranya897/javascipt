up=Number(prompt("enter the upper imit "))
low=Number(prompt("enter the  lower limit "))
 var evensum=0
var oddsum=0
for(let i=low;i<=up;i++)
{
if(i%2==0)
{
evensum=evensum+1
}
else
{
oddsum=oddsum+1

}
}
console.log("numer of even ="+evensum)
console.log("number of odd"+oddsum)
