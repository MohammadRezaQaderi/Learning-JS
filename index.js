// The printed some thing in console
console.log('hello world');

// 3 way to make variable var , let , constant
// var can be use in all of Project
// let in that scope we use
// constant is the variable that you didn`t want to change it
// at the first all Var is undefined

// Some Ex.
let name ;
console.log(name);
const value = 0.3;
console.log(value);

// The Data Types are be 2 form Primitive and Reference
// Primitives are String ,Number ,Boolean ,Symbol ,Null , Undefined
// References are Object ,Array ,Function

// The object definition 
let person = {
    name: 'mohammad',
    age :20
};

// The Function definition
function nameShow(name){
    console.log('Hello ' +name);
}

// Use the Function
name ='ali'
nameShow(name);

// Function to check result
function wordBlank(Noun , Adjec , Verb , Adverb){
    let result = '';
    result += 'the '+Adjec + Noun + Verb + Adverb ;
    return result;
}
console.log(wordBlank('dog ' , 'big ' , 'run ' , 'quickly'))


// The Variable that we can again make and cange in function
let myWear = 'T-shirt'
function allo(){
    let myWear = 'cloth'
    console.log(myWear)
}
console.log(myWear)
allo();
console.log(myWear)



// The ways to change objects value
person.age= 33;

// The Array definition
let selectedColor = [];

// Add to array
selectedColor[selectedColor.length] = 1;
selectedColor[selectedColor.length] = 'green';
console.log(selectedColor);

// The nested array 
let myArray = [[1 , 2 , 3] , [4 , 5] , [[6 , 7 , 8] ,90]]
console.log(myArray[2][0][2])

// Get The Charchter Form The End
var names = 'mohaaama'
var ali = names[names.length - 6]
console.log(ali)

// The Change To string With JSON
var arr = [1 , 2 , 4 , 45 ,90];
console.log(JSON.stringify(arr))

// The Condition Of JS (Like Other Lang ...)
if(3 === '3'){
    console.log('ooh')
}

if(3 == '3'){
    console.log('yeah')
}