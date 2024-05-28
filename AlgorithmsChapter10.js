//Chapter 10 - Strings, Part 2

console.log("String to Word Array:");
//Given a string of words (with spaces, tabs, and linefeeds), return an array of words.

//With built-in functions:
function extractWords(input) {
    // Split the string using a regex that matches spaces, tabs, and linefeeds.
    // The regex \s+ matches any sequence of one or more whitespace characters.
    return input.split(/\s+/).filter(Boolean);  // The filter(Boolean) removes any empty strings.
}

const text = "Here is a string of words,\nwith spaces, tabs\tand linefeeds.";
console.log(extractWords(text));

console.log("\nLongest Word");
//Create a function that, given a string of words, returns the longest word.

//With built-in functions:
function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(/\s+/);

    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const text2 = "The quick brown fox jumped over the lazy dog";
console.log(findLongestWord(text2));

console.log("\nReverse Word Order:");
//Create a function that, given a string of words (with spaces), returns a new string with words in reverse sequence.

//With built-in functions:
function reverseWordOrder(str) {
    // Split the string using a regex that matches one or more whitespace characters
    const words = str.split(/\s+/);
    return words.reverse().join(' ');
}

//Without built-in functions:
function reverseWordOrderWithoutBuiltIns(str) {
    let words = [];
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || str[i] === '\t' || str[i] === '\n') {
            if (currentWord.length > 0) {
                words.push(currentWord);
                currentWord = '';
            }
        } else {
            currentWord += str[i];
        }
    }

    // Push the last word if the string did not end with a space
    if (currentWord.length > 0) {
        words.push(currentWord);
    }

    let reversedString = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversedString += words[i];
        if (i > 0) {
            reversedString += ' ';
        }
    }

    return reversedString;
}

const sentence = "Hello world this is a test";
console.log(reverseWordOrderWithoutBuiltIns(sentence));

