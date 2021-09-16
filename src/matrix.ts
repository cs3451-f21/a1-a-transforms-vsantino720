// Matrix Commands (for you to write!) Vincent Davies

import { CatmullRomCurve3 } from "three";

// You should modify the routines listed below to complete the assignment.
// Feel free to define any classes, global variables and helper routines that
// you need.

var ctm:number[][];

// set the current matrix to the identity
function init()
{
    ctm = [[1, 0, 0, 0],
           [0, 1, 0, 0],
           [0, 0, 1, 0],
           [0, 0, 0, 1]]; 
}

// multiply the current matrix by the translation
function translate(x: number, y: number, z: number)
{
    let transMat = [[1, 0, 0, x],
                    [0, 1, 0, y],
                    [0, 0, 1, z],
                    [0, 0, 0, 1]];
    ctm = matrixMultiply(ctm, transMat);
}

// multiply the current matrix by the scale
function scale(x: number, y: number, z: number)
{
    let scaleMat = [[x, 0, 0, 0],
                    [0, y, 0, 0],
                    [0, 0, z, 0],
                    [0, 0, 0, 1]];
    ctm = matrixMultiply(ctm, scaleMat);
}

// multiply the current matrix by the rotation
function rotateX(angle: number)
{
    let deg = angle * (Math.PI / 180);
    let rotxMat = [[1, 0, 0, 0],
                   [0, Math.cos(deg), -Math.sin(deg), 0],
                   [0, Math.sin(deg), Math.cos(deg), 0],
                   [0, 0, 0, 1]];
    ctm = matrixMultiply(ctm, rotxMat);
}

// multiply the current matrix by the rotation
function rotateY(angle: number)
{
    let deg = angle * (Math.PI / 180);
    let rotyMat = [[Math.cos(deg), 0, Math.sin(deg), 0],
                   [0, 1, 0, 0],
                   [-Math.sin(deg), 0, Math.cos(deg), 0],
                   [0, 0, 0, 1]];
    ctm = matrixMultiply(ctm, rotyMat);
}

// multiply the current matrix by the rotation
function rotateZ(angle: number)
{
    let deg = angle * (Math.PI / 180);
    let rotzMat = [[Math.cos(deg), -Math.sin(deg), 0, 0],
                   [Math.sin(deg), Math.cos(deg), 0, 0],
                   [0, 0, 1, 0],
                   [0, 0, 0, 1]];
    ctm = matrixMultiply(ctm, rotzMat);
}

// print the current matrix
function print()
{
    // add code here!
    // use `console.log("something")` to print something to the browser console.
    for (var i = 0; i < ctm.length; i++) {
        // print the current row
        console.log("" + ctm[i][0] + ", " + ctm[i][1] + ", " + ctm[i][2] + ", " + ctm[i][3]);
    }

    // end with a blank line!
    console.log("")
}

// return the current matrix as an array of 16 numbers
// in row major order (i.e., elements 0..3 are row 1, 4..7 are row2,
// 8..11 are row3, and 12..15 are row4)
function currentMatrix() : number[]
{
    let ctmArray:number[] = [];
    for (var i = 0; i < ctm.length; i++) {
        for (var j = 0; j < ctm.length; j++) {
            ctmArray[(i * 4) + j] = ctm[i][j];
        }
    }

    return ctmArray;
}

// helper method to return the result of matrix multiplication
function matrixMultiply(m1: number[][], m2: number[][]) : number[][] {
    let newMat:number[][] = [[],[],[],[]];
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            newMat[i][j] = m2[0][j] * m1[i][0]
                         + m2[1][j] * m1[i][1]
                         + m2[2][j] * m1[i][2]
                         + m2[3][j] * m1[i][3];
        }
    }

    return newMat;
}

export {init, translate, scale, rotateX, rotateY, rotateZ, print, currentMatrix}
