// Matrix Commands (for you to write!)

// You should modify the routines listed below to complete the assignment.
// Feel free to define any classes, global variables and helper routines that
// you need.

// set the current matrix to the identity
function init()
{
}

// multiply the current matrix by the translation
function translate(x: number, y: number, z: number)
{
}

// multiply the current matrix by the scale
function scale(x: number, y: number, z: number)
{
}

// multiply the current matrix by the rotation
function rotateX(angle: number)
{
}

// multiply the current matrix by the rotation
function rotateY(angle: number)
{
}

// multiply the current matrix by the rotation
function rotateZ(angle: number)
{
}

// print the current matrix
function print()
{
    // add code here!
    // use `console.log("something")` to print something to the browser console.

    // end with a blank line!
    console.log("")
}

// return the current matrix as an array of 16 numbers
// in row major order (i.e., elements 0..3 are row 1, 4..7 are row2,
// 8..11 are row3, and 12..15 are row4)
function currentMatrix() : number[]
{
}

export {init, translate, scale, rotateX, rotateY, rotateZ, print, currentMatrix}
