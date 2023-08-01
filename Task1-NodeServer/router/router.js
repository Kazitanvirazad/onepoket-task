"use strict";

const express = require("express");

const router = express.Router();

const controller = require("../controller/controller");

router.get("/*", controller.helloController);

module.exports = router;