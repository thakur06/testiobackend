const { request } = require("express");
const User = require("../Schema/User");
const session = require("express-session");

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    const user = new User({
        "email": email,
        "password": password
    }
    );
    await user.save();
    req.session.user = user;
    res.send(user);

};

module.exports = { login };