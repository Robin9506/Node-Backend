const Jwt_error_enums = require('./jwt_error_enums')
const HTTP_ENUMS = require("./http_enums");
const role = require("./role");
const jwt_error_enums = require("./jwt_error_enums");

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

exports.returnErrorResponseJWT = (token, error, response) => {
    console.log(token + " " + error)
    if (token !== undefined){
        if(error === jwt_error_enums.JSON_WEB_TOKEN_ERROR){
            return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.JSON_WEB_TOKEN_ERROR);
        }
        else if (error === jwt_error_enums.TOKEN_EXPIRED){
            return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.TOKEN_EXPIRED);
        }

        else if (error === jwt_error_enums.NOT_BEFORE_ERROR){
            return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.NOT_BEFORE_ERROR);
        }

    }

    return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
        "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + "Token is Empty");

}

exports.isRoleEmptyJWT = (tokenRole) => {
    if (tokenRole !== undefined){
        return tokenRole;
    }

    return role.NON_USER;
}
