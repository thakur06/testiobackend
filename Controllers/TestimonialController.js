const express = require("express");
const {newTestimonial} = require("../Routes/TestimonialsRoute");
const Router=require("express").Router()

Router.post("/newTestimonial/:appid",newTestimonial);


module.exports = Router;