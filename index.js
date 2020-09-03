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


// In array we can add Some thing to the beginning of the array with (array.unshift())
let arr1 = [1 , 2 , 3 , 4 ];
arr1.unshift(5);
console.log(arr1)
// In array we can add Some thing to the end of the array with (array.push())
arr1.push(32)
console.log(arr1)
// In array we can delete the first element of the array with (array.shift())
arr1.shift();
console.log(arr1)
// In array we can delete the last element of the array with (array.pop())
arr1.pop();
console.log(arr1)

// Add to array
selectedColor[selectedColor.length] = 1;
selectedColor[selectedColor.length] = 'red';
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
// In the 2 equal the type of data is not important 
// But in 3 equal condition is important 

if(3 === '3'){
    console.log('ooh')
}

if(3 == '3'){
    console.log('yeah')
}

// In The If && else If condition the order is very important


// The Switch and Case Statement
// If we Want to have Answer in all test for switch case we should to define default in end of cases

function caseInSwitch(val){
    var answer="";
    switch(val){
        case 1: 
            answer='alpha'
            break;
        case 2:
            answer='beta'
            break;
        case 3:
            answer='gama'
            break;
        default :
            answer='mamad'
            break;
    }
    return answer;
}

console.log(caseInSwitch(2))

//The Object Design in JS
var myLabtop = {
    "Name": 'Asus',
    "CPU": "CORE i5",
    "RAM": 4,
    Graphic: 2,
    "friend": []
};

// Accessing the objects properties with dot Notataion
let CPU = myLabtop.CPU;
console.log(CPU)

// Accessing the objects properties with Bracket
let RAM = myLabtop['Graphic']
console.log(RAM)

// Updating the Properties
myLabtop.Name = 'MacBook'
console.log(myLabtop)

// Add new Properties
myLabtop.battery = '3x';
// or myLabtop['battery'] = '3x'
console.log(myLabtop)

// Delete Properties from objects
delete myLabtop.friend;

function lookup(val){
    var result=''

    var lookup ={
        'ali': 133,
        'mohammad': 144,
        'abbas': 156,
        'zahra':179
    };

    result = lookup[val]
    return result;
}

console.log(lookup('zahra'))

// check the have properties 
console.log(myLabtop.hasOwnProperty('ali'))

// Manipulating Object
var Music = [
    {
        // the first object 
        "artist": "Tataloo",
        "titel": "Rap",
        "release_year": 2020
    },

    {
        // the first object 
        "artist": "Reza Sadeghi",
        "titel": "Pop",
        "release_year": 2019
    },

];
