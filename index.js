const express = require("express");
var app = express();
var log = (req, res, next) => {
  console.log("logging worked"); //add in the use function if you want to add a logger.
  next();
};
var requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);
app.get("/", (req, res) => {
  res.send(`The time is now ${req.requestTime}`);
});

var port = process.env.port || 3000;
app.listen(port);
console.log(`listening to port ${port}`);
