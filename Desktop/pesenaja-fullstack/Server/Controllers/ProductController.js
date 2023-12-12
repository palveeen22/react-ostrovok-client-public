const { Product, Category } = require("../models");

class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const data = await Product.findAll();
      res.status(200).json({
        message: "Success get all product",
        data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getProductById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Product.findByPk(id);
      res.status(200).json({
        message: "Success get product by id",
        data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getCategory(req, res, next) {
    try {
      const data = await Category.findAll();
      res.status(200).json({
        message: "Success get category",
        data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = ProductController;
