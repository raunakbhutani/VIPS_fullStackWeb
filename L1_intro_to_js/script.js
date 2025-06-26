/*
console.log("hello"); // to print anything onto the screen

var a = 10;  // redeclaration is allowed

console.log(a);

let a = 10;  // redeclaration is not allwoed

const x = 20; // redeclaration is not allwoed 
x = 90;

console.log(a); // throws an error
*/

/*
var a = 10;
var b = 20;

console.log(a);

                  
function sumOfTwo(param1, param2) {
    
    var answer = param1 + param2;

    return answer;
}

var arg1 = 10;
var arg2 = 20;

console.log(sumOfTwo(arg1, arg2));

console.log(b);
*/


let a = 10;
let b = 20;

console.log(a);

                  
function sumOfTwo(param1, param2) {
    
    let answer = param1 + param2;

    return answer;
}

let arg1 = 10;
let arg2 = 20;

console.log(sumOfTwo(arg1, arg2));

console.log(b);

// Scope:
/*
var a = 200;

function sumOfTwo(a, b) {

    var b = 300;
    return a + b;
    
}

var b = 500;
console.log(sumOfTwo(a, b));
*/

/*
function firstFunc() {
    
    var a = 20;
    var b = 30;

    function secFunc(params) {
        
        var c = 50;

        function thirdFunc(params) {
            
            var d = 80;
            console.log(a + b + c + d);  // it first searches in itself then in parent & then in grandparent
            
        }

        thirdFunc();
    }
    secFunc();
}

console.log(firstFunc());
*/

/*
console.log(a + b + c + d + x);  // reference error as a is called before initialisation

function firstFunc() {
    
    
    var a = 20;
    let b = 30;
    
    function secFunc() {
        
        let c = 50;
        
        function thirdFunc() {
            
            
            let d = 80;
            var x = 100;            
        }

        thirdFunc();
    }

    secFunc();
}

console.log(firstFunc());

*/


// setTimeout(function () => {
    
//     console.log("i am setTimeout");
    
// }, 5000);

/*
setInterval(function () => {
    
    console.log("i am setInterval");
    
}, 5000);
*/

/*
for(var i = 0; i <= 5; i++){  

    setTimeout(function () {
        
        console.log(i);
        
    }, 2000);
}
    */   // O/P: is 6 6 6 6 6 6 bcos var is global scope & i stores the reference of i hence finally i sees val of i from global scope hence i = 6 is stored in global scope hence 6 is printed


/*
for(let i = 0; i <= 5; i++){

    setTimeout(function () {
        
        console.log(i);
        
    }, 2000);
}
    */
// here 0 to 5 is printed