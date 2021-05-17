var express = require('express');
var router = express.Router();

var userRouter = require("./users.route");
var authRouter = require("./auth.router");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/user", userRouter);
router.use("/auth", authRouter)

module.exports = router;
