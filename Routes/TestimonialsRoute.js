const { request } = require("express");
const Testimonial=require("../Schema/Testimonials");
const App=require("../Schema/apps");
 const newTestimonial =async (req, res)=>{
    const { name,review } = req.body;
    const {appid}=req.params;
    const app = await App.findOne({appid:appid});
    console.log(appid)
    const test = new Testimonial({ name: name, review: review,app:app._id });
    await test.save();
  
    
    app.testimonials.push(test._id); // Add the app's ID to the user's apps array
    await app.save();
  
    res.send(test);


};

module.exports = {newTestimonial};