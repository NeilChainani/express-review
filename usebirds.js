var birds = require("./bird");
var express = require("express");
var app = express();
app.use("/birds", birds);
app.listen(3000);
