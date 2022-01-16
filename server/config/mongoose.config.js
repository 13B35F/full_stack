const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/jokes_video_walkthrough", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("You are connected to the database"))
  .catch((err) =>
    console.log("You are NOT connected to the database ", err)
  );