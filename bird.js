var express = require("express");
var router = express.Router(); //this is an interface
var timeLog = (req, res, next) => {
  console.log(`time ` + Date.now);
  next();
};
router.use(timeLog);
router.get("/", (req, res) => {
  res.send("lol");
});
module.exports = router;
// middleware that is specific to this router

// define the home page route
