const express = require("express");
const {newApp} = require("../Routes/AppRoute");
const auth=require("../Auth/Authtoken")
const Router=require("express").Router()

Router.post("/newapp",auth,newApp);


module.exports = Router;