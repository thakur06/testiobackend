const express = require("express");
const {login} = require("../Routes/UserRoute");
const Router=require("express").Router()

Router.get("/login",login);


module.exports = Router;