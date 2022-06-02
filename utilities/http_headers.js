exports.requireAuthorizationHeader = (request) =>{
    return !!request.headers["authorization"];



}
