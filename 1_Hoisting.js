// Hoisting : hoisting is a finomina in JS by which you can access variables and functions even before you have initilized it.
// if variable is not initilized and invoke then undefined special value will be given automatically.
// if variable is not initilized and invoke then function print itself.
// arrow function is behave like a variable not a function.

/*          // 1)   Normal Code

//initilization
var x=7;
function getname(){
    console.log("Hello");
}

//invoking
getname(); 
console.log(x);
//output: Hello 7
*/      

/*            // 2)  invoke first

//invoking
getname();
console.log(x);

//initilization
int x=7;
function getname(){
    console.log("Hello");
}
//output: Hello Undefined
*/

/*            // 3)  invoke first & x is not initilized

//invoking
getname();
console.log(x);

//initilization
function getname(){
    console.log("Hello");
}
output: Hello X is not defined
*/

/*            // 4)  invoke function by console without initilization

//invoking
console.log(getname);

//output: print function itself -> function getname(){
                                console.log("Hello");
                              }
*/

/*            // 5)  Arrow Function

//console.log(getname);
//getname();

var getname = () => {
    console.log("Hello");
}
output: getname is not a function
*/

/*           // 6) code with arrow function

//invoking
getname();
console.log(x);

//initilization
int x=7;
var getname = () => {
    console.log("Hello");
}

//output: Undefined Undefined    <- both are var and invoke before initilization
*/



