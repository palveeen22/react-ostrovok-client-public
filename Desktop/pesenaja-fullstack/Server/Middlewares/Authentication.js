const { Customer } = require("../models");
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Unauthorized");
    }

    const token = authorization.split(" ")[1];

    // Verifikasi dan validasi token
    const decoded = jwt.verify(token, "abogoboga");
    if (!decoded) {
      throw new Error("Invalid token");
    }

    const user = await Customer.findOne({
      where: {
        email: decoded.email,
      },
    });

    if (!user) {
      throw new Error("Unauthorized");
    }

    req.loginInfo = {
      CustomerId: user.id,
      email: user.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication };
