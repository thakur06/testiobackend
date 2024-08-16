const express = require('express');
const cors = require('cors');
const Db = require("./Db");
const User = require("./Schema/User");
const userRoutes=require("./Controllers/UserController");
const appRoutes = require("./Controllers/AppController");
const testimonialRoutes=require("./Controllers/TestimonialController")
const session=require("express-session");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const app = express();
app.use(session({
    secret: '',
    resave: false,
    saveUninitialized: false,

   }))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
Db();

app.use("/user",userRoutes)
app.use("/app",appRoutes);
app.use("/app/test",testimonialRoutes);


app.post("/",async (req, res) => {
    const {email,password}=req.body;
console.log(email)
    try {
        if (await User.findOne({email:email})){
            
            res.status(401).send("user already exists");
    
        }else {
    
            
           
            let hashedPass= await bcrypt.hash(password,10);
            let user=await User.create({

    password:hashedPass,
    email:email,

    
            });
            user.save();
    
            req.session.user=user;
            const token= jwt.sign({user},"");
            user.password=undefined;
           
            
    res.status(200).send({value:{email,apps:user.apps},token:token});
        }
    
    } catch (error) {
        res.status(401).send("invalid Creadentials");
    }
    
});

app.get("/test",async (req, res) => {
    console.log(req.session)
    
});
const port = 4000;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`app listening on port ${port}`)
    }
});
