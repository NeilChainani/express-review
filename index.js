const express = require("express");
var app = express(); //
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/test", (req, res) => {
  res.send([3, 2, 1]);
});
app.listen(3000, () => {
  console.log("listening on 3000");
});
