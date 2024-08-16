const mongoose = require('mongoose');


const App = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,

        },
        appid: {
            type: String,
            unique: true,
            required: true,
        },
        testimonials: [ {
            type:mongoose.Schema.Types.ObjectId,
          ref:"Testimonials",
          required: true}]
    },
    { timestamps: true }
);

const Apps = mongoose.model("Apps", App);
module.exports = Apps;