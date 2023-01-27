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

            // 5)  Arrow Function
/*
//Example 1: Arrow Function with No Argument
var greet1 = () => {
    console.log('Hello');
}
greet1(); // Hello
*/
/*
//Example 2: Arrow Function with One Argument
var greet2 = x => console.log(x);
greet2('Hello'); // Hello 
greet2();  //undefined
greet2(x);  // not defiend
*/
/*
//Example 3: Arrow Function as an Expression
var age = 5;
var welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');
welcome(); // Baby
*/
/*
//Example 4:
//console.log(getname); //undefined
//getname(); // getname is not a function
var getname = () => {
    console.log("Hello");
}
console.log(getname); //function itself
getname(); //Hello
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



