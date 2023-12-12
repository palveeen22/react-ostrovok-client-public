const { Cart } = require("../models");

class CartController {
  static async createCart(req, res, next) {
    try {
      const { id } = req.params;
      const { CustomerId } = req.loginInfo;
      console.log(id, CustomerId, "<====");

      const data = await Cart.create({
        CustomerId: CustomerId,
        ProductId: id,
      });

      res.status(201).json({
        message: "succes create cart",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async readCart(req, res, next) {
    try {
      const data = await Cart.findAll();

      res.status(200).json({
        message: "succes read cart",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //   static async readCartById(req, res, next) {
  //     try {
  //     } catch (error) {}
  //   }
  static async deleteCart(req, res, next) {
    try {
      const { id } = req.params;
      await Cart.findOne({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "succes delete cart",
      });
    } catch (error) {}
  }
}
module.exports = CartController;
