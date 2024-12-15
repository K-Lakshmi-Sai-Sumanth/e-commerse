const mongoose = require("mongoose")

const getCurrentISTTime = () => {
    const now = new Date();
    const ISTOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
    return new Date(now.getTime() + ISTOffset);
  };

const user = mongoose.Schema({
    name:{
        type: String,
        required:[true, "name is required.."]
    },
    email:{
        type: String
    },
    createdAt: {
        type: Date,
        default: getCurrentISTTime, 
      },
      updatedAt: {
        type: Date,
        default: getCurrentISTTime,
      },
});

user.pre("save", function (next) {
    this.updatedAt = getCurrentISTTime();
    next();
  });
  
  
  user.pre("findOneAndUpdate", function (next) {
    this._update.updatedAt = getCurrentISTTime();
    next();
  });


module.exports = mongoose.model("User", user)