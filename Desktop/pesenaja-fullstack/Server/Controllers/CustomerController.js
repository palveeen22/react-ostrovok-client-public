const { Customer } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class CustomerController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw new Error("Email not found");
        // throw new Error("SequelizeValidationError");
      }

      if (!password) {
        throw new Error("LoginError");
      }
      const user = await Customer.findOne({ where: { email } });

      if (!user) {
        throw new Error("Password not found");
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error("LoginError");
      }

      const access_token = jwt.sign(
        { senderId: user.id, email: user.email },
        "abogoboga",
        { expiresIn: "1h" }
      );

      res.status(200).json({ access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error({ name: "SequelizeValidationError" });
      }
      await Customer.create({
        email,
        password,
      });

      res.status(201).json({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = CustomerController;
