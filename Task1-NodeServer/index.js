/**
 * author:Kazi tanvir azad
 */

"use strict";

/**
 * importing express module to the project
 */
const express = require("express");

require("dotenv").config();

/**
* Setting port number for the server from environment variale
*/
const PORT = process.env.PORT;

/**
 * Creating express application
 */
const server = express();

/**
 * adding router middleware in 
 * the project for routing helloController
 */
const router = require("./router/router");
/**
 * adding middleware
 * Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
 */
server.use(express.json());

/**
 * Setting express for incoming HTTP requests
 */
server.use(router);

/**
* Starting express server
* on localhost
*/
server.listen(PORT, 'localhost', () => {
    console.log(`Server started on port ${PORT}`);
});

