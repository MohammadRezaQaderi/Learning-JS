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
// /**if the attribute name have space we should use bracket**/
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

// Nested Object
var myCar = {
    "car": {
        "inside":{
            "glove box": "map",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "junk"
        }
    }
};

var gloveBoxContent = myCar.car.inside["glove box"];
console.log(gloveBoxContent)

// Nested Array And Accessing to that tree
var myPlants = [
    {
        types : "flowers",
        list : [ 
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        types : "trees",
        list : [
            "fir",
            "pin",
            "brich"
        ]
    }
];

var theSecondSecond = myPlants[0].list[0]
console.log(theSecondSecond)

var collection = {
    "2548": {
        "album": "Jahanam",
        "artist": "tataloo",
        "tracks": [
            "miram",
            "jahanam",
            "Beshmar",
            "Sadi Chand"
        ]
    },

    "44587": {
        "album": "Barzakh",
        "artist": "tataloo",
        "tracks": [
            "Navazesh2",
            "Ajab",
            "Barzakh",
            "Khar"
        ]
    },

    "1131": {
        "album": "78",
        "artist": "tataloo",
        "tracks": [
            "MR Lodeh",
            "Khanom Vaziri",
            "Man 3",
            "Afee"
        ]
    },

    "3105": {
        "album": "Sheytan",
        "artist": "tataloo",
        "tracks": [
            "Ajab 2",
            "Alo 3",
            "Ye Saram be ma bezan"
        ]
    },


};


// Make copy from collection
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy)

function updateRecords(id , property , value ){
    // if we want to delete the collection id set the value empty
    if(value === ""){
        delete collection[id][property];
    }

    else if(property === "tracks"){
        collection[id][property] = collection[id][property] || [];
        collection[id][property].push(value);
    }

    else{
        collection[id][property] = value;
    }
    return collection;
}

// TEST
console.log(updateRecords(1131 , "tracks" , "Amir Tataloo"))

// Iterate with Loop

// While

var myAray = [];
 var i = 0
 while(i < 5){
     myAray.push(i)
     i++
 }
console.log(myAray)

// For
// odd number
myAray = []
for(var i = 0;i < 10 ; i+=2 ){
    myAray.push(i)
}
console.log(myAray)

// Nesting loop (in to in)

function multiplyAll(arr){
    var product = 1
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = 0 ; j < arr[i].length ; j++)
            product *=arr[i][j]
    }

    return product;
}

 product = multiplyAll([[1 , 2] , [3 , 4] , [5 , 6 , 7]])
 console.log(product)


 // Do While (like While but it run one time exactly)

 myAray = []
 i = 15

 do{
     myAray.push(i)
     i--;
 } while(i < 5)

 console.log(myAray)

 // Array of Objects

 var contacts = [
     {
        "firstName": "ali",
        "lastName": "Oftadeh",
        "number": "091212131",
        "likes": ["ali" , "food" , "travel"]
     },
     {
        "firstName": "reza",
        "lastName": "JamehBolandi",
        "number":   "09190701416",
        "likes": ["car" , "travel" , "firend"]
     },
     {
        "firstName": "pouya",
        "lastName": "baqeri",
        "number": "0902200212",
        "likes": ["girl" , "jave" , "Chiz"]
     }
 ];

 function lookUpProfilo(name , property){
     for(var i = 0 ; i < contacts.length ; i++){
         if(contacts[i].firstName === name){
            return contacts[i][property] || "Properties Not Found"
         }
     }
     return "Contact Not Found"
 }

 console.log(lookUpProfilo("ali" , "likes"))

 // redix pasin (in 2 case)

 console.log(parseInt(10011, 2))
 
 // another form for condition
 // condition ? statement-if-true : statement-if-false;

 function checkSign(num){
     return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
 } 

 console.log(checkSign(0))

 // The Defrences of the Let And Var decleration
 // in var decelaretion we can reuse the variable
 // but the let we can`t use the same name variable 

 // the other defrences is in scope of using
 // the the var is for all of code envierment
 // but the let in that experition scope (Block)

 function checkScope(){
     "use strict";
     var i = "function scope"
     if(true){
        // for see deferent uncomment the line and cooment other line
        // i = "block Scope"
         let i = "block Scope"
         console.log(i)
     }
     console.log(i)
 }

 checkScope();

// if you can declare read only variable use const 
// it is very like let but we can not change it
// when use const is better to name CAPITAL

// but in array we have

const ARRAYS = [2 , 5 , 8]
var arrays1 = [2 , 5 , 8]

function editInplace(){
    "use strict";
    arrays1 = [8 , 2 , 5]
    // in this way we have error
    //ARRAYS = [5 , 2 ,8]
    ARRAYS[0] = 5
    ARRAYS[1] = 2 
    ARRAYS[2] = 8 
}
editInplace()
console.log(ARRAYS)
console.log(arrays1)

// use Object Freeze

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI =3.141592
    } catch (error) {
        console.log(error)        
    }

    return MATH_CONSTANTS.PI;
}
var PI = freezeObj();
console.log(PI)