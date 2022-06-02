require('dotenv').config();
const jwt = require('jsonwebtoken');
const HTTP_ENUMS = require("../utilities/http_enums");
const {requireAuthorizationHeader} = require("./http_headers");
const {returnErrorJWT} = require("./jwt_error_handler");
const jwt_error_enums = require('./jwt_error_enums')

exports.signJWT = (account) => {
    return jwt.sign({accountID: account.id, role: account.role}, process.env.JWT_SECRET, {
        issuer: process.env.COMPANY,
        expiresIn: "1h"
    }, "");
};

exports.verifyJWT = (request, response, token) => {
    try{
        if(requireAuthorizationHeader(request)){
            const authHeader = request.headers["authorization"];
            token = authHeader.split('Bearer ')[1];

            return jwt.verify(token, process.env.JWT_SECRET, {}, "");
        }
        else {
            returnResponseJWT(token);
        }
    }catch (e){
        const error = {
            jwt_error: returnErrorJWT(e.name)
        }
        returnResponseJWT(token, error)
    }

    function returnResponseJWT(token, error) {
        console.log(token + " " + error.jwt_error)
        if (token !== undefined){
            if(error.jwt_error === jwt_error_enums.JSON_WEB_TOKEN_ERROR){
                return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                    "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.JSON_WEB_TOKEN_ERROR);
            }
            else if (error.jwt_error === jwt_error_enums.TOKEN_EXPIRED){
                return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                    "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.TOKEN_EXPIRED);
            }

            else if (error.jwt_error === jwt_error_enums.NOT_BEFORE_ERROR){
                return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                    "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + jwt_error_enums.NOT_BEFORE_ERROR);
            }

        }

        return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
            "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + "Token is Empty");

    }
}
