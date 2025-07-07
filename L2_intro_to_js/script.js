
/*
console.log("welcome to js");

let a = 1;
// let a = "jake";  // SyntaxError: Identifier 'a' has already been declared
// let a = 2.432;

// console.log(a);


const b = 3;
// b = 4;  // TypeError: Assignment to constant variable.


console.log(b);
*/

/*
function func1(param1) {

    function func2(param2, param3) {
        
        return (param2 + param3);
    }

    var arg2 = 2;
    var arg3 = 3;

    console.log(func2(arg2, arg3));
    
return param1;
    
}


var arg1 = 1;
console.log(func1(arg1));


clearTimeout();
*/
/*
for(var i = 0; i <= 5; i++){

    setTimeout(function() {

        console.log(i);
        
    }, 2000);
}
*/

/*
for(let i = 0; i <= 5; i++){

    setTimeout(function() {

        console.log(i);
        
    }, 2000);
}

*/

/*
var a = 10;
var b = 20;
 var c = 30;


{  
    // lexical scope

    var d = 40;
    // this is compound statement

    // console.log(a);
    // console.log(b);
    // console.log(c);
    console.log(d);

    {

        var x = 60
        var d = 99;

        console.log(a);
        console.log(d);
        console.log(x);
        
        
        
    }    
    
}
*/

/*
let a = 10;
let b = 20;
 let c = 30;


{  
    // this is called lexical scoping

    let d = 40;
    // this is compound statement

    // console.log(a);
    // console.log(b);
    // console.log(c);
    console.log(d);

    {

        let x = 60
        let d = 99;

        console.log(a);
        console.log(d);
        console.log(x);     
        
    }    
    
}

// there will be same O/P on both the let & var functions

*/

/*
for (var a = 0; a <= 5; a++) {

    // here this func is stored in the local scope & value from this is outputted
    // & this is called a closure
    function func(i) {
        setTimeout(() => {

            console.log(i);
        }, 2000);
    }

    func(a);  

}
  */
 
/*
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
*/


/*
// functions =>

// normal func

function nameOfFunc(){

}

// anonymous func

function(){


}

// arrow function
() =>{


}

// func expression

var myFunction = () =>{

}

// named func

var myFunction2 = function() {

    console.log("helloooo");
    
}

myFunction2();  // calling
*/



/*
console.log("class started");

var a = 200;

console.log(a);

functionB();  // it wont cause the problem of hoisting as it doent apply to func as funcs are stored locally


function functionB() {
    
    console.log("this is function B");
    
}

*/


/*
// here functionB is not a function,
var functionB = () => {  // it is a variable now, it is an arrow func

    var x = 100;
    console.log("this is output: ", x);
    
}

functionB();  // O/P: 100
*/

/*
console.log("class started");

var a = 200;

console.log("a: " + a);

functionB();  // error: bcos functionB is called before declaring it
var functionB = () => {  // it is a variable now, hoisting is followed here

    console.log("in functionB", x);
}
*/

/*
console.log("class started");

var a = 200;

console.log("a: " + a);


var functionB = () => {  // it is a variable now


    console.log("i am  functionB");
}

functionB();  // here we are calling functionB after defining it
*/

/*
() => {

    console.log("arrow function");
    
}
*/

/* HW
// can i call with the func with name of named function?

var func1 = function xyz() {


}
*/


// NEW CASE:
/*
console.log("CLASS START");

var a = 200;
console.log(a);

function functionB(){  // this is a function declaration

    console.log("THIS IS FUNCTION B");
}

// the next are variable assignments:
var functionB = (x) =>{  
    
    var x =100;
    console.log("THIS IS OUTPUT:",x);
}

var functionB = function () {
    
    console.log("HELLOOO WORLD")
}

functionB();
*/



/*
// FIRST CLASS FUNC => func as an argument

// EX 1:

function outerFunction(arg1) {  // here arg1() is passed as function which is an argument here also

    console.log("i am outer function");
    
    arg1();
}

outerFunction(function() {   // arg1 is passed as an anonymous func

    console.log("i am inner function");
});
 

// EX 2:

function outerFunc(collegeName){

    return function () {   // this is a closure  

        console.log("hello from", collegeName);
    }
};

var myData = outerFunc("VIPS");

console.log(myData());

*/


/*
// callback func =>


setTimeout(() =>{

    console.log("check menu");
    
}, 2000);

setTimeout(() =>{

    console.log("order");
    
}, 3000);

setTimeout(() =>{

    console.log("dinner");
    
}, 5000);

setTimeout(() =>{

    console.log("sauf");
    
}, 2000);

setTimeout(() =>{

    console.log("pay bill");
    
}, 4000);

*/
// when the above code gets executed, the O/P comes out to be in a random order. 

// to execute these functions in order, we use callback

// A callback function in JS is a function that is passed as an argument to another function and is executed after the completion of that function.
//  This allows for asynchronous operations and event handling, enabling code to be executed at a later time, rather than immediately

/*
function menuDetail(cb) {

    // After logging its message, it uses setTimeout to simulate a delay.
// When the timeout finishes, it calls the callback (cb()), which starts the next step.

    console.log("checking menu");
    setTimeout(cb, 3000);
}

function doOrder(cb){

    console.log("making an order");
    setTimeout(cb, 2000);
    
}

function eating(cb) {

    console.log("eating food");
    setTimeout(cb, 6000);
}

function saufEat(cb){

    console.log("eating sauf");
    setTimeout(cb, 1000);
}

function eatDessert(cb){

    console.log("eating dessert");
    setTimeout(cb, 2000);
}

function goingHome(cb){

    setTimeout(() =>{

        console.log("walking towards home");
        
    }, 3000);
}


menuDetail(() =>{
    doOrder(() =>{
        eating(()=>{
            saufEat(() =>{
                eatDessert(() =>{
                    goingHome();
                });
            });
        });
    });
});

// this above is pyramid of doom, here we loose the control of our codebase
// now the above code is executed in order
*/