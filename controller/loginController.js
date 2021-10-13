const { validateLogin } = require('../validations/loginValidation');

const login = (req, res) => {
  const { login, password } = req.body;

  const resp = validateLogin(login, password);
  res.status(200).json({ message: resp });
};

module.exports = {
  login,
};
