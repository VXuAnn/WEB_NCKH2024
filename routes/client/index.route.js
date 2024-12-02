const express = require("express");
const router = express.Router();

const homeRoute = require("./home.route");

module.exports.index = (app) => {

  app.use("/", homeRoute);

}