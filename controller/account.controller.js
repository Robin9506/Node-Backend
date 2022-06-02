const account = require('../dao/account.dao')
const role = require('../utilities/role')
const {verifyJWT} = require("../utilities/jwt");
const {isRoleEmptyJWT} = require("../utilities/jwt_error_handler");
const {compareRoles} = require("../utilities/role_handler");

exports.findAll = (request, response) => {
    const token = verifyJWT(request, response);
    const tokenRole = isRoleEmptyJWT(token).role

    if (compareRoles(tokenRole, role.DEVELOPER, response) === true){
        return account.findAllAccountsSQL().then(r => response.send(r))
    }







}
