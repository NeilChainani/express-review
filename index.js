const express = require("express");
var app = express(); //
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/test", (req, res) => {
  res.send([3, 2, 1]);
});
var port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`listening on ${port} `);
});
