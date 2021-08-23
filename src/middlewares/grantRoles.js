const roles = require('../constants/roles');

/**
 * Middleware
 */

//TODO: Add or remove roles as needed

exports.grantRoles = (req, res, next) => {
    const grantedRoles = [];

    if (req.user.role === roles.USER) {
        grantedRoles.push(roles.USER);
    }

    if (req.user.role === roles.ADMIN) {
        grantedRoles.push(roles.USER);
        grantedRoles.push(roles.ADMIN);
    }

    req.roles = grantedRoles;

    next();
}
