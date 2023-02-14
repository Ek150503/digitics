const jwt = require('jsonwebtoken');

class Token {
  static generateToken(id) {
    return jwt.sign({ id: id }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: '3d',
    });
  }
}

module.exports = Token;
