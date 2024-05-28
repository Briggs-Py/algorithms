//Chapter 10 - Strings, Part 2

console.log("String to Word Array:");
//Given a string of words (with spaces, tabs, and linefeeds), return an array of words.

function extractWords(input) {
    // Split the string using a regex that matches spaces, tabs, and linefeeds.
    // The regex \s+ matches any sequence of one or more whitespace characters.
    return input.split(/\s+/).filter(Boolean);  // The filter(Boolean) removes any empty strings.
}

const text = "Here is a string of words,\nwith spaces, tabs\tand linefeeds.";
console.log(extractWords(text));

console.log("Longest Word");
//Create a function that, given a string of words, returns the longest word.

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