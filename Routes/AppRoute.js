const { request } = require("express");
const App = require("../Schema/apps");
const User = require("../Schema/User");

const newApp = async (req, res) => {
  const { name } = req.body;
  console.log(req.user.user)
  const ids=Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
  const app = new App({ name: name, user: req.user.user._id, appid:ids });
  await app.save();

  const user = await User.findById(req.user.user._id);
  user.apps.push(app._id); // Add the app's ID to the user's apps array
  await user.save();

  res.send(user);
};

module.exports = { newApp };