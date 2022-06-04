const HTTP_ENUMS = require("./http_enums");

exports.compareRoles = (tokenRole, authorizedRole, response) => {
    if(tokenRole !== authorizedRole){
        /*return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
            "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): " + "Authorization is needed");*/
    }
    else {
        return true;
    }


}
