number=Number(prompt("enter the number="))
num1=number
arm=0
while(number!=0){
    digit=number%10
    arm=arm+(digit*digit*digit)

    number=parseInt(number/10)   }

if(num1==arm)
{
console.log(" is a Armstrong number)
}
else
{
console.log(" not a Armstrong number)
}