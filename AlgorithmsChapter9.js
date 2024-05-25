//Chapter 9 - Recursion

//Recursive Sigma
console.log("Recursive Sigma:");
//Write a recursive function that given a number, returns sum of integers from 1 to that number.
function rSigma(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n + rSigma(n - 1);
}
console.log(rSigma(3));

//Recursive Factorial
console.log("\nRecursive Factorial:");
//Write a function that given 'num', return the product of integers from 1 up to that 'num'.
function rFactorial(n) {
  if (n <= 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return n * rFactorial(n - 1);
}

console.log(rFactorial(6));

//Flood Fill
console.log("\nFlood Fill");
//Most graphical 'paint' applications have a 'paint-can fill' function that floods part of an image with a certain color.
//We change the image as if we painted a canvas: a two-dimensional array of integers where each integer represents a
//color for that pixel. The canvas array.length is the Y dimension of our canvas; each spot in the canvas array is a
//row in our image, with a length equal to our canvas' X dimension. You are given a canvas (2-dimensional array of
//integers), starting coordinate (2-element array), and the color to flood (integer value). Build
//floodFill(canvas2D, startXY, newColor). Replace a pixel's color value only if it is the same color as the origin
//coordinate and is directly adjacent via X or Y to another pixel you will change.

function floodFill(canvas2D, startXY, newColor) {
    const startX = startXY[0];
    const startY = startXY[1];

    const originalColor = canvas2D[startY][startX];

    if (newColor === originalColor) {
        return canvas2D;
    }

    function fill(x, y) {
        // Check if the current position is within the bounds of the canvas.
        if (x < 0 || x >= canvas2D[0].length || y < 0 || y >= canvas2D.length) {
            return;
        }
        // Check if the current pixel is of the original color that needs to be changed.
        if (canvas2D[y][x] === originalColor) {
            canvas2D[y][x] = newColor;  // Change the color.

            // Recursively call fill on all surrounding pixels (up, down, left, right).
            fill(x + 1, y);  // right
            fill(x - 1, y);  // left
            fill(x, y + 1);  // down
            fill(x, y - 1);  // up
        }
    }

    fill(startX, startY);
    return canvas2D;
}

const canvas = [
    [1, 1, 1, 2, 3],
    [1, 1, 1, 2, 2],
    [1, 1, 1, 2, 3],
    [4, 4, 1, 3, 3]
];
console.log("Original Canvas:");
console.log(canvas);

const start = [0, 1];  // Starting point with coordinates (x, y)
const newColor = 5;    // New color to flood with

floodFill(canvas, start, newColor);
console.log("Canvas after flood fill:");
console.log(canvas);

