const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const JokeRoutes = require("./server/routes/jokes.routes");
JokeRoutes(app);

app.listen(8000, ()=> console.log(`You are connected to port 8000!`));