const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add user name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email address"],
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model('User', userSchema, 'Users');