var express = require('express');
var router = express.Router();
var userController = require("../controllers/index").userController;
var passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/me", passport.authenticate("jwt", {session: false}), userController.getMyProfile);

module.exports = router;
