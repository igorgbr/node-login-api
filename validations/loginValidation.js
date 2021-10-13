const validateLogin = (login, password) => {
    if(login != 'igorgbr' || password.length < 4) {
        return 'Dados Invalidos'
    }
    return 'Usuario ok'
}


module.exports = {
    validateLogin
}