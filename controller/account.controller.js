const account = require('../dao/account.dao')
const {verifyJWT} = require("../utilities/jwt");

exports.findAll = (request, response) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader.split('Bearer ')[1];
    console.log(token);

    verifyJWT(token)
    account.findAllAccountsSQL().then(r => response.send(r))
}
