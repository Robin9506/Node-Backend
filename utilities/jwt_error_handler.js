const Jwt_error_enums = require('./jwt_error_enums')
const HTTP_ENUMS = require("./http_enums");
const role = require("./role");

exports.returnErrorJWT = (errorName) => {
    switch (errorName){
        case ("JsonWebTokenError"):
            return Jwt_error_enums.JSON_WEB_TOKEN_ERROR;
        case ("TokenExpiredError"):
            return Jwt_error_enums.TOKEN_EXPIRED;
        case ("NotBeforeError"):
            return Jwt_error_enums.NOT_BEFORE_ERROR;
    }
}

exports.isRoleEmptyJWT = (tokenRole) => {
    if (tokenRole !== undefined){
        return tokenRole;
    }

    return role.NON_USER;
}
