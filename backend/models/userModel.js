const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://snehit7725:lingam@cluster0.lwhhdty.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
