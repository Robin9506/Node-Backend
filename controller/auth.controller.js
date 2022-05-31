const Auth = require('../dao/auth.dao')
const jwt = require('../utilities/jwt')
const HTTP_ENUMS = require("../utilities/http_enums");

exports.login = (request, response) =>{
    Auth.login(request.body)
        .then(function (account){
            const token = jwt.signJWT(account)

            console.log("token: " + token);

            return response.status(HTTP_ENUMS.SUCCESS).send(
                "Status Code (" + HTTP_ENUMS.SUCCESS + "): " + "Login successful")
        })
        .catch(function (){
            return response.status(HTTP_ENUMS.METHOD_NOT_ALLOWED).send(
                "Status Code (" + HTTP_ENUMS.METHOD_NOT_ALLOWED + "): "+ "Can't Login")
        })
}
