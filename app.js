console.log("04 Store API");
require("dotenv").config();

//async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hey");
});

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    app.listen(port, console.log(`server running on ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
