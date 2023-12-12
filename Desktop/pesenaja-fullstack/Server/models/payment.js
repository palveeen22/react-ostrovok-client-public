"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Product, { foreignKey: "ProductId" });
      Payment.belongsTo(models.Customer, { foreignKey: "CustomerId" });
    }
  }
  Payment.init(
    {
      ProductId: DataTypes.INTEGER,
      CustomerId: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
