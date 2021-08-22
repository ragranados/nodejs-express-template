const {validationResult} = require('express-validator');

/**
 * Running express validator validations
 * @param req
 * @param res
 */

exports.runValidation = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    next();
}
