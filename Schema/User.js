const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    
    },
   
    profilePicture: String,
    apps:[
      {
        type:mongoose.Schema.Types.ObjectId,
      ref:"App",
      required: true}
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;