num=Number(prompt("enter a number"))
if(num>1)
{
for(let i=2;i<num;i++)
if(num%i==0){
console.log(num,"is not a prime number")
break
}


else{
}
}
else{
console.log(num,"is not a prime")
}