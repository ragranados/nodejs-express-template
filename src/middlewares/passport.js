//var passport = require('passport');
const userService = require('../src/services/users.service');
var key = require('../config').key;
var JwtStrategy = require('passport-jwt').Strategy;
var { ExtractJwt } = require('passport-jwt');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.jwtsecret;

exports.JwtStrategy = new JwtStrategy(opts, async (payload, done) => {
    //console.log("Usuario autenticado", payload);
    const response = await userService.getByUsuario(payload.usuario)
    if (!response.status) {
        return done(null, false);
    }

    return done(null, response.data);
});