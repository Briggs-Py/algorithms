//Remove Blanks
console.log("\nRemove Blanks:");
function removeBlanks(str){
    let strArr=str.split(" "),
        newStr=[];
    for(let idx=0; idx<strArr.length; idx++){
        if(strArr[idx]!==""){
          newStr.push(strArr[idx]);
        }
    }
    newStr=newStr.join("");
    return newStr;
}
console.log(removeBlanks(" Pl    ayTha     tF  u    nkyM   usi    c"));

//String: Get Digits
console.log("\nString: Get Digits");
function getDigits(str){
    let strArr=str.split(""),
        newArr=[];
    for(let idx=0; idx<strArr.length; idx++){
        if(!isNaN(strArr[idx])){
            newArr.push(strArr[idx]);
        }
    }
    newArr=newArr.join('');
    return +newArr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//Acronyms
console.log("\nAcronyms");
function acronym(str){
    let acronym = "",
        strArr = str.split(" ");
    for (let idx = 0; idx < strArr.length; idx++) {
        acronym += strArr[idx].substring(0, 1).toUpperCase();
    }
    return acronym;
}
console.log(acronym("there's no free lunch - gotta pay yer way"));

//Count Non-Spaces
console.log("\nCount Non-Spaces");
function countNonSpaces(str){
    let count=0,
        strArr=str.split('');
    for(let idx=0; idx<strArr.length; idx++){
        if(strArr[idx]!==" "){
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces("Let the function count all the Non-Spaces in this string."));

//Remove Shorter Strings
console.log("\nRemove Shorter Strings");
function removeShortStrings(arr, length){
    let newArr=[],
        index=0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx].length >= length){
            newArr[index]=arr[idx];
            index++;
        }
    }
    return newArr;
}
console.log(removeShortStrings(["Hello", "my", "name", "is", "Briggs"], 5));

//String: Reverse
console.log("\nString: Reverse");
function reverseString(str){
    let strArr=str.split(''),
        newString="";
    for(let idx=strArr.length-1; idx>=0; idx--){
        newString+=strArr[idx];
    }
    return newString;
}
console.log(reverseString("salutations"));

//Remove Even-Length Strings:
console.log("\nRemove Even-Length Strings");
function removeEvenStrings(arr){
    let newArr=[],
        index=0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx].length%2!==0){
            newArr[index]=arr[idx];
            index++;
        }
    }
    return newArr;
}
console.log(removeEvenStrings(["hello", "four", "eight", "electric", "did"]))

//Integer to Roman Numerals
console.log("\nInteger to Roman Numerals")
function integerToRoman(num) {
    if (num <= 0 || num >= 4000) return "Invalid input";

    // Define mappings of decimal values to Roman numerals
    const mappings = [
        {value: 1000, symbol: 'M'},
        {value: 900, symbol: 'CM'},
        {value: 500, symbol: 'D'},
        {value: 400, symbol: 'CD'},
        {value: 100, symbol: 'C'},
        {value: 90, symbol: 'XC'},
        {value: 50, symbol: 'L'},
        {value: 40, symbol: 'XL'},
        {value: 10, symbol: 'X'},
        {value: 9, symbol: 'IX'},
        {value: 5, symbol: 'V'},
        {value: 4, symbol: 'IV'},
        {value: 1, symbol: 'I'},
    ];

    let romanNumeral = '';

    // Loop through each mapping
    mappings.forEach(mapping => {
        // While num is greater than or equal to the mapping's value
        while (num >= mapping.value) {
            // Append the mapping's symbol to the result string
            romanNumeral += mapping.symbol;
            // Subtract the mapping's value from num
            num -= mapping.value;
        }
    });

    return romanNumeral;

}
console.log(integerToRoman(3459));

//Roman Numerals to Integer
console.log("\nRoman Numerals to Integer")
function romanToInteger(roman){
    let integer = 0,
        prevValue = 0;
    // Define mappings of decimal values to Roman numerals
    const romanValues = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };

    // Iterate through each character in the Roman numeral string
    for (let index = roman.length - 1; index >= 0; index--) {
        const currentValue = romanValues[roman.charAt(index)];

        if (currentValue < prevValue) {
            // If the current value is less than the previous value, subtract it
            integer -= currentValue;
        } else {
            // Otherwise, add it to the total
            integer += currentValue;
        }

        prevValue = currentValue;
    }

    return integer;

}
console.log(romanToInteger("LXXVI"));

// Parens Valid
console.log("\nParens Valid");
function isValidParentheses(str) {
    let openCount = 0; // Counter for tracking open parentheses

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(') {
            openCount++; // Increment counter for each opening parenthesis
        } else if (char === ')') {
            openCount--; // Decrement counter for each closing parenthesis

            // If openCount is negative, there are more closing than opening parentheses
            if (openCount < 0) {
                return false;
            }
        }
    }

    // Check if all parentheses have been properly closed
    return openCount === 0;
}

// Example usage
console.log(isValidParentheses("Y(3(p)p(3)r)s")); // true
console.log(isValidParentheses("N(0(p)3")); // false
console.log(isValidParentheses("N(0)t)0(k")); // false
// Braces Valid
console.log("\nBraces Valid");
function isValidSequence(str) {
    let stack = [];
    let top = -1; // Stack top pointer

    // Mapping of opening to closing parentheses
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If char is an opening parenthesis, push it to the stack
        if (pairs[char]) {
            top++;
            stack[top] = char;
        } else if (char === ')' || char === ']' || char === '}') {
            // If char is a closing parenthesis
            if (top === -1) {
                // Stack is empty (more closing than opening)
                return false;
            } else if (pairs[stack[top]] === char) {
                // Pop the stack if the parenthesis matches
                stack[top] = undefined; // Mimic pop operation
                top--;
            } else {
                // Parenthesis doesn't match
                return false;
            }
        }
    }

    // If the stack is empty, all parentheses were closed properly
    return top === -1;
}

// Example usage
console.log(isValidSequence("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")); // true
console.log(isValidSequence("D (i{a}l[ t]o)n{e")); // false
console.log(isValidSequence("A (1) s [0(n]0{t) 0}k")); // false

//String: Is Palindrome
console.log("\nString: Is Palindrome");
// Create a function that returns a boolean whether the string is a strict palindrome.
// For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization:
// if given "Dud" or "oho!", return false.

function isStrictPalindrome(str) {
    let left = 0; // Pointer starting from the beginning of the string
    let right = str.length - 1; // Pointer starting from the end of the string

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Mismatch found
        }
        left++; // Move pointers inward
        right--;
    }

    return true; // No mismatches found
}

// Example usage
console.log(isStrictPalindrome("a x a")); // true
console.log(isStrictPalindrome("racecar")); // true
console.log(isStrictPalindrome("Dud")); // false
console.log(isStrictPalindrome("oho!")); // false

//Longest Palindrome
console.log("\nLongest Palindrome")
//For this challenge, we will look not only at the entire string provided, but also at the substrings within it.
//Return the longest palindrome substring. Given "what up, daddy-o?", return "dad". Given "uh not much", return "u".
//Include spaces as well. Given "Yikes! My favorite racecar erupted!", return "e racecar e".

function longestPalindrome(s) {
    let longest = "";

    // Helper function to expand around a given center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the found palindromic substring
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // Check for palindromes of odd length centered at i
        let oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for palindromes of even length centered at i and i+1
        let evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

// Example usage
console.log(longestPalindrome("what up, daddy-o?")); // "dad"
console.log(longestPalindrome("uh not much")); // "u"
console.log(longestPalindrome("Yikes! My favorite racecar erupted!")); // "e racecar e"

// Is Word Alphabetical
console.log('\nIs Word Alphabetical');
//Create a function that, when given a string, returns a boolean value determining if all contained letters within the
//string are in alphabetical order.
function isAlphabetical(str) {
    // Check if input is a valid string
    if (typeof str !== 'string') {
        return false;
    }

    for (let i = 0; i < str.length - 1; i++) {
        // Convert both characters to lower case for case-insensitive comparison
        if (str[i].toLowerCase() > str[i + 1].toLowerCase()) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isAlphabetical("abc")); // true
console.log(isAlphabetical("aBcD")); // true
console.log(isAlphabetical("zyx")); // false
console.log(isAlphabetical("aabbbccdd")); // true
console.log(isAlphabetical(123)); // false
console.log(isAlphabetical({})); // false

//D Gets Jiggy
console.log('\nD Gets Jiggy');

//Write a function that accepts as a parameter a string containing someone's name. Return a string containing the
//following: strip off the first letter of the name, capitalize this new word, and add " to the [first letter]!".
//Given "Dylan", return "Ylan to the D!".

function transformName(name) {
    if (typeof name !== 'string' || name.length === 0) {
        return "Invalid input"; // Handle invalid inputs gracefully
    }

    // Get the first letter and capitalize it
    const firstLetter = name[0].toUpperCase();

    // Strip off the first letter and capitalize the rest of the string
    const restOfName = name.substring(1);
    const capitalizedRestOfName = restOfName.charAt(0).toUpperCase() + restOfName.slice(1);

    // Construct the response string
    return `${capitalizedRestOfName} to the ${firstLetter}!`;
}

// Example usage
console.log(transformName("Dylan")); // "Ylan to the D!"
console.log(transformName("alice")); // "Lice to the A!"

//Common Suffix
console.log('\nCommon Suffix')

//Write a function that, when given a word array, returns the largest suffix common to all words in the array.
//Given ['deforestation', 'citation', 'conviction', 'incarceration'], return 'tion'.

function findLargestCommonSuffix(words) {
    if (words.length === 0) return '';

    // Start with the last word in the array
    let suffix = words[words.length - 1];

    for (let i = 0; i < words.length - 1; i++) {
        while (words[i].substring(words[i].length - suffix.length) !== suffix) {
            // If the suffix does not match, reduce its length by one from the front
            if (suffix.length === 0) return '';
            suffix = suffix.substring(1);
        }
    }

    return suffix;
}

// Example usage
const words = ['deforestation', 'citation', 'conviction', 'incarceration'];
console.log(findLargestCommonSuffix(words)); // 'tion'

//Book Index
console.log('\nBook Index')

//Given a sorted array of pages where a term appears, produce an index string. Consecutive pages should form ranges
//separated by a hyphen. For example, given [1, 13, 14, 15, 37, 38, 70], return string "1, 13-15, 37-38, 70".

function createIndexString(pages) {
    if (pages.length === 0) return ''; // Handle empty input

    let result = ''; // Initialize the result string
    let start = pages[0]; // Start of the current range
    let end = pages[0]; // End of the current range

    for (let i = 1; i < pages.length; i++) {
        if (pages[i] === end + 1) {
            // Continue the current range
            end = pages[i];
        } else {
            // Finish the current range and add it to the result
            if (start === end) {
                result += `${start}, `;
            } else {
                result += `${start}-${end}, `;
            }
            // Start a new range
            start = pages[i];
            end = pages[i];
        }
    }

    // Add the last range or number to the result
    if (start === end) {
        result += `${start}`;
    } else {
        result += `${start}-${end}`;
    }

    return result;
}

// Example usage
const pages = [1, 13, 14, 15, 37, 38, 70];
console.log(createIndexString(pages)); // "1, 13-15, 37-38, 70"

//Drop the Mike
console.log("\nDrop the Mike")

//Create a standalone function that accepts an input string, removes leading and trailing white space (at beginning
//and end only), capitalizes the first letter of every word, and returns that string. If original string contains the
//word "Mike" anywhere, immediately return "stunned silence" instead.

function processString(input) {
    // Check for the presence of "Mike" in the string (instructions specifically say if original string contains "Mike",
    // not if string contains "Mike" after manipulation).
    if (input.indexOf("Mike") !== -1) {
        return "stunned silence";
    }

    // Trim leading and trailing whitespace
    let trimmed = input.trim();

    // Capitalize and return the first letter of each word
    return trimmed.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage
console.log(processString("   hello world   ")); // "Hello World"
console.log(processString("this is a test for Mike in the text")); // "stunned silence"
console.log(processString("example input here")); // "Example Input Here"

