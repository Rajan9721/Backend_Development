/**
 * 1. Primitive  - simple /immutable - 
 *      8 types - number , bigint, string
 * 2. non-primitive - complex/mutable
 * 
 */

// Example of Primitive data types 

// String
var name = "rajan"
var n = 'Rajan'
console.log(name)
console.log(n)


console.log(typeof name)
console.log(typeof n)
// or
console.log(typeof(name))

// number

var age = 91
var x = 1.4

console.log(typeof x)

// BigInt

var big_int = 123n
console.log(big_int)

console.log(typeof NaN) // NaN means Not a number but the data type of NaN is number

// null
console.log(typeof null) // output is Object but it is not write because null is itself a datatype but giving the output is 'object' type 
// JS is not caring to fix it because of some compatibility reasons.


// null - means purposefully don't want any value to assigned to a variable.
var name
console.log(typeof name) // output undefined - means variable are defined but value are not assigned yet.


// Symbol data type
var s1 = Symbol() // basically its give me a symbol Object and also sometimes saying constructor

/**
 * Non-Primitive Datatypes
 * 
 */

// Objects 

var person = {
    name1 : "Rajan", // name1,age1 and hobby are => keys and keys should be String/Symbol
    age1: 19,           // values should be any data types
    hobby : "Cricket"
}

console.log(person)  // output: { name1: 'Rajan', age1: 19, hobby: 'Cricket' }

