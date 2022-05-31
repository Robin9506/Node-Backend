require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.signJWT = (account) => {
    return jwt.sign({accountID: account.id, role: account.role}, process.env.JWT_SECRET, {
        issuer: process.env.COMPANY,
        expiresIn: "1h"
    }, "");
};

exports.verifyJWT = (token) => {
    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET, {}, "");
        console.log(decoded.role);
    }catch (e){
        console.log(e.message);
    }

}
