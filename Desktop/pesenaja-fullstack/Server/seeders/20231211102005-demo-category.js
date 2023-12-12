"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        id: 1,
        name: "Makanan Jadi",
        imageUrl:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Buah",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1676642611795-9f1de2b99f83?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Sayuran",
        imageUrl:
          "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Daging",
        imageUrl:
          "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Olahan Susu",
        imageUrl:
          "https://cm.samokat.ru/processed/public/9ecb524e05b2b4b3_________________________.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Snack Manis",
        imageUrl:
          "https://cm.samokat.ru/processed/category/94c35e5b-6017-4cdf-8344-0edfe5cbc08a.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Makanan Ringan",
        imageUrl:
          "https://cm.samokat.ru/processed/public/fd4a6ecb80cdacae_pepsico_3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Keperluan Rumah",
        imageUrl:
          "https://cm.samokat.ru/processed/category/55545a21-842f-40d7-8717-0d1dbdc4165d.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
