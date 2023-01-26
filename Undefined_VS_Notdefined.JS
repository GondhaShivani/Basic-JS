/*  
-> undefined = very special keyword in JS
-> When code is written -> every function and variable have alocated memory even before run the code.
-> undefined is like a placeholder.
-> JS is loosly type language = very flexible language = weakly type language -> it means that it does not attaches variable to any specific data type 

*/

/*
console.log(a); //output = undefined -> only memory is alocated therefore undefined
var a=10; //memory is alocated
console.log(a); //output = 10 -> bcz noe value is assign therefor undefined -> 10
console.log(x); // output = x is not defiend -> therefor memory is also not alocated yet.
*/

/*                undefined and not undefined
var a;
console.log(a);
var x=9;
console.log(x);

if(x === undefined) // === -> strictly check
{
    console.log("a is undefined");
}
else
{
    console.log("a is not undefined");
}
*/

//flexible with data type no need to specify
var a;
console.log(a);
a=10;
console.log(a);
a="Hello";
console.log(a);

a=undefined;    //not a good practice to put undefined into any variable.
console.log(a);