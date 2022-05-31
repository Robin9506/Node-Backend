const account = require('../dao/account.dao')
const role = require('../utilities/role')
const {verifyJWT} = require("../utilities/jwt");
const HTTP_ENUMS = require("../utilities/http_enums");

exports.findAll = (request, response) => {
    if (verifyJWT(request, response).role === role.ADMIN){
        return account.findAllAccountsSQL().then(r => response.send(r))
    }

    return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
        "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + "Authorization needed");



}
