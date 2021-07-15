// CHALLENGE
// String Transformer
// https://www.codewars.com/kata/5878520d52628a092f0002d0/

// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// You may assume the input only contains English alphabet and spaces.

// PREP
// Parameters
// A string, with a variety of uppercase and lowercase letters and spaces. English only, no punctuation.

// Returns
// A new string, where
//  Any lowercase letter was changed to uppercase
//  Any uppercase letter was changed to lowercase
//  Word order was reversed

// Examples / Tests
// stringTransformer('Example string'), 'STRING eXAMPLE');
// stringTransformer('ExAmPlE sTrIng'), 'StRiNg eXaMpLe');
// stringTransformer(‘oNE mORE tEST), 'Test More One’);

// Pseudocode
// How do we swap the letters themselves and not the whole string? 
// .split(‘ ‘) the string to an array, using the space as a delimiter. 	
// Once the string is an array, .reverse() and .join(‘ ‘) to swap the order of the words and to convert the array back to a string.  
// Now we have a string with a reversed order of words, but we still need to invert the letters.
// To differentiate the letters, .split(‘’) the string into an array again. 
// .map() goes through the array one at a time, beginning to end. We give .map() instructions using the arrow function. The ternary statement says: if the element is uppercase, change it to lowercase.  If not originally uppercase, change toUpperCase.  
// Finally, return the array to a string using .join(‘’)

// Solution

function stringTransformer(str) {
  return str
	.split(' ')
	.reverse()
	.join(' ')
	.split('')
	.map(e => e == e.toUpperCase() ?
	  e.toLowerCase() :
	  e.toUpperCase())
	.join('');
}

