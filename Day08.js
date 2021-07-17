// CHALLENGE
// Count Characters in your String
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.


// PREP

// Parameters
// A string with a variety of letters, some repeat, some don’t.
// Any capitals, punctuation, etc? No.
// Any empty strings? Yes, if an empty string is given, return an empty object literal.

// Returns
// An object literal listing how many times each character occurs in a string.  An empty object literal if the string is empty.

// Examples / Tests
// count("aba"), { a: 2, b: 1 }); 
// count(""), {}); 

// Pseudocode
// 
// Start by writing the function line and console log the tests. 
// function count(str)
// console.log(count("aba"), { a: 2, b: 1 })
// 
// Objects always have a {key : value} pair.  In Javascript, they have a {property : value} pair.  In this case, the property names are going to be the letters in our string.  And we want to wind up with an object that has ‘a’ and ‘b’ represented inside this object.  But in this case, ‘a’ will have a value of 2 and ‘b’ will have a value of 1, because that’s how many times they appear in our string.  To do this, We need to loop through the characters, and update the values of the things in the object.
// Create an empty object literal, let charCount = {}
// Split the string into an array, without a delimiter, so we can get each character. [‘a’, ‘b’, ‘a’]
// Then use .forEach() so we can access each character in the array of strings. .forEach() will loop through each individual letter.  
// At the beginning of the function, when .forEach() begins, the property will not have an ‘a’ in it.  So .forEach() will start on a false statement.  {}
// On the next round through the array, .forEach() will set the ‘a’ property to be equal to 1. {a:1}
// Next round, .forEach() does the same thing again, this time setting the ‘b’ property to be equal to 1. {b:1}
// Then finally, on the third round, .forEach() will add 1 to the original ‘a’, changing the object literal to {a:2}
// The function we are telling .forEach() to use says:  Starting at the first character (written as ‘c’ which stands for ‘character’) once you have the ‘c’, do this with it (arrow function means “do this”).  Once you have the first character, add it to charCount.  If the character already exists in there, increment up by one.  If it doesn’t already exist, then set the value to 1. 
// .forEach(c => charCount[c] ? charCount[c]++ : charCount[c]=1)
// Finally, return the object using return charCount


// Solution

function count (string) {  
let charCount = {}
string.split('')
.forEach(c => charCount[c] ? charCount[c]++ : charCount[c]=1)
return charCount;
}

