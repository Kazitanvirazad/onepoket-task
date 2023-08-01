"use strict";

const fs = require('fs');

/**
 * Setting the file path to read (asynchronously in this case)
 */
const filePath = "./data.txt";

/**
 * Read the file named data.txt asynchronously and prints the total
 * words count in the console
 */
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
    }

    //Removing line breaks, tab spaces and unnecessary gaps from the text
    data = data.replace(/[\r\n]+/gm, "").replace(/  +/g, " ");

    //Split the text with single space and creates an array
    let arr = data.split(" ");

    //Printing the words count in the console
    console.log("Total word count = " + arr.length);
});