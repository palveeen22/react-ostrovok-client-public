"use strict";
const { hashPassword, comparePassword } = require("../Utils/Bycript");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasOne(models.Profile, { foreignKey: "CustomerId" });
      Customer.hasMany(models.Payment, { foreignKey: "CustomerId" });
      Customer.hasMany(models.Cart, { foreignKey: "CustomerId" });
    }
  }
  Customer.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "email required",
          },
          notNull: {
            msg: "email required",
          },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "password required",
          },
          notNull: {
            msg: "password required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
      hooks: {
        beforeCreate: (customer) => {
          if (customer.password) {
            customer.password = hashPassword(customer.password);
          }
        },
        beforeUpdate: (customer) => {
          if (customer.password) {
            customer.password = hashPassword(customer.password);
          }
        },
      },
    }
  );
  Customer.prototype.checkPassword = function (password) {
    return comparePassword(password, this.password);
  };
  return Customer;
};
