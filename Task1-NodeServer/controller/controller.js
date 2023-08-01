/**
 * author:Kazi tanvir azad
 */

"use strict";

/**
 * Function to response to the request
 * and responds by sending text
 * 
 * @param {HTTP REQUEST OBJECT} req 
 * @param {HTTP RESPONSE OBJECT} res 
 * @param {*} next 
 * @returns next which executes the next middleware in the middleware stack
 */
const helloController = (req, res, next) => {
    res.send("Hello, World!");
    return next();
};

/**
 * exporting the controllers as module
 */
module.exports = {
    helloController
};