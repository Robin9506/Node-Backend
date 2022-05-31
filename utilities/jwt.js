require('dotenv').config();
const jwt = require('jsonwebtoken');
const HTTP_ENUMS = require("../utilities/http_enums");

exports.signJWT = (account) => {
    return jwt.sign({accountID: account.id, role: account.role}, process.env.JWT_SECRET, {
        issuer: process.env.COMPANY,
        expiresIn: "1h"
    }, "");
};

exports.verifyJWT = (request, response) => {
    try{
        const authHeader = request.headers["authorization"];
        const token = authHeader.split('Bearer ')[1];
        console.log(token);

        return jwt.verify(token, process.env.JWT_SECRET, {}, "");
    }catch (e){
        console.log(e.message);
        return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
            "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + "Invalid Token");
    }

}
