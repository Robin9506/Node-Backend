require('dotenv').config();
const jwt = require('jsonwebtoken');
const HTTP_ENUMS = require("../utilities/http_enums");
const {requireAuthorizationHeader} = require("./http_headers");
const {returnErrorJWT, returnErrorResponseJWT} = require("./jwt_error_handler");
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
        returnResponseJWT(token, returnErrorJWT(e.name))
    }

    function returnResponseJWT(token, error) {
        returnErrorResponseJWT(token, error, response);
    }
}
