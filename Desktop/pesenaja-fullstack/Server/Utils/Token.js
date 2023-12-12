const { sign } = require("jsonwebtoken");
const ACCESS_TOKEN = "abogoboga";
module.exports = {
  createToken(payload) {
    const secret = ACCESS_TOKEN; // di input tanpa env aja kalau ada env di masukin aja
    return sign(payload, secret);
  },
};
