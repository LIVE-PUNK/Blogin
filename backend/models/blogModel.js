const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://snehit7725:lingam@cluster0.lwhhdty.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB connected successfully (blog)");
  })
  .catch((err) => {
    console.error("MongoDB connection error (blog):", err);
  });

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  }
});

const blogModel = mongoose.model("blog", blogSchema);

module.exports = blogModel;
