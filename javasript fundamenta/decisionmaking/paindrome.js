num=Number(prompt("enter a number"))
num1=num
var rev=0
while(num!=0)
{
var rem=num%10
rev=(rev*10)+rem
num=parseInt(num/10)
}
if(rev==num1)
{
console.log("number is palindrome")
}
else{
console.log("number is  not palindrome")

}