
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

    // here this func is stored in the local scope & value from this 
    function func(i) {
        setTimeout(() => {

            console.log(i);
        }, 2000);
    }

    func(a);  

}
    */

// functions

// normal func

/*
function nameOfFunc(){


}

// anonymous func

function(){


}

// arrow
() =>{


}

// func expression

var myFunction = () =>{

}

// named func

var myFunction2 = function() {

    console.log("helloooo");
    
}


myFunction2();
*/

/*
console.log("class started");

var a = 200;

console.log(a);

functionB();  // it wont cause the problem of hoisting as it doent apply to func as funcs are stored locally

/*
function functionB() {
    
    console.log("this is function B");
    
}
*/

// here functionB is not a function,

/*
var functionB = () => {  // it is a variable now

    var x = 100;
    console.log("this is output: ", x);
    
}
*/

/*
console.log("class started");

var a = 200;

console.log("a: " + a);

functionB();  // error: bcos functionB is called before declaring it
var functionB = () => {  // it is a variable now


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

functionB();  // here we are calling function B after defining it
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

// FIRST CLASS FUNC => func as an argument

/*
function outerFunction(arg1) {

    console.log("i am outer function");
    
    arg1();
}

outerFunction(function() {

    console.log("i am inner function");
});


function outerFunc(collegeName){

    return function () {

        console.log("hello from", collegeName);
    }
};

var myData = outerFunc("VIPS");

console.log(myData());
*/


// callback func =>

/*
setTimeout(() =>{

    console.log("menu");
    
}, 2000);

setTimeout(() =>{

    console.log("order");
    
}, 2000);

setTimeout(() =>{

    console.log("dinner");
    
}, 2000);

setTimeout(() =>{

    console.log("sauf");
    
}, 2000);

setTimeout(() =>{

    console.log("order");
    
}, 2000);

function menuDetail
*/