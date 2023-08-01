"use strict";

/**
 * author: Kazi tanvir azad
 */

/**
 * Returns sum of all the elements from the array 
 * passed in argument
 * @param {number array} array 
 * @returns number
 */
const sumOfIntegers = (array) => {
    let sum = 0;
    if (array != null || array.length > 0) {
        array.forEach(element => {
            if (!isNaN(element) || typeof element == number) {
                sum += element;
            }
        });
    }
    return sum;
};

module.exports = { sumOfIntegers };