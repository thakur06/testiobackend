const mongoose = require('mongoose');


const Testimonials = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    review: {
      type: String,
      required: true,
      unique: true,
    },
    app:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"App"
    }
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonials", Testimonials);
module.exports = Testimonial;