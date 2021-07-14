	
// CHALLENGE
// Extract the Domain Name from the URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

// PREP
// Parameters
// A URL as a string

// Returns
// A string containing just the domain name from the original URL

// Examples / Tests
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Pseudocode
 
// Need to remove the beginning (should test for “https://”, “https://”, and “www”), and the end (should test for “.com” and anything that comes after “.com”) of the given URL string.  
// There are only three prefix possibilities, (“https://”, “https://”, and “www”)

// There are practically endless ending possibilities, (.com, .co.uk, .ru, .org, etc)

// We know we need to use the .replace() method to do this challenge.  Replace what with what? Replace the three prefix possibilities with nothing.

// So, start with this:
// function domainName(url){
// return url.replace('http://', '').replace('https://', '').replace('www.', '')
// }
// Which leaves us with ‘google.com’, ‘yahoo.com’, etc.

// We need to kick off, bump off, delete, everything after the domain name, no matter what it is.

// We can’t use .replace() or .shift() because we’ll need to input all the myriad possibilities.

// What if we target the domain name we want to keep, and not all the endings we may want to delete? How do we separate these two distinct parts?  

// We can use .split(‘.’) to use the period as the delimiter and separate it into an array of two parts.  Ex: [‘google’, ‘com’]

// Finally, we want to remove the last part of the array, no matter what it may be.  We can use .shift() to do that.  

// That will leave us with just the domain name.

// TLDR; All three possible prefixes were replaced with nothing, leaving just ‘domainname.com’ . We then separated ‘domainname.com’ into an array of two strings, using the ‘.’ as the delimiter. Ex: [‘domainname, ‘com’].  Then booted the last element in the array off the end using .shift().	


// Solution:

function domainName(url){
	return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.').shift()
}


