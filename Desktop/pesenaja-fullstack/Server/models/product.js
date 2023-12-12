"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" });
      Product.hasMany(models.Payment, { foreignKey: "ProductId" });
      Product.hasMany(models.Cart, { foreignKey: "ProductId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      kadaluarsa: DataTypes.STRING,
      caraSimpan: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      berat: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
