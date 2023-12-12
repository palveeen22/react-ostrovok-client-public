"use strict";
const { hashPassword } = require("../Utils/Bycript");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Customers", [
      {
        id: 1,
        v: "vlad",
        email: "vlad@mail.com",
        password: hashPassword("vlad123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
