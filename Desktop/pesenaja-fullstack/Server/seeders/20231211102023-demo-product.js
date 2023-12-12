"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Wok dengan ayam dan sayuran",
        description:
          "Air minum, tepung terigu, garam dapur, fillet dada ayam, paprika beku, buncis beku, bawang bombay segar, zukini segar, wortel segar, gula, kacang kedelai, gandum, minyak bunga matahari yang dihilangkan baunya, cuka anggur, bawang putih segar, daun bawang segar, apel segar, jahe segar, lemon segar, tepung jagung, biji wijen, daun ketumbar, rumput laut rumput laut kering, cabai bubuk, lada hitam, cuka beras. Kemungkinan mengandung tulang",
        kadaluarsa: "2023-12-22",
        caraSimpan: "Masukan dalam suhu 0 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/d122ebcb72040640_4670117690737-1.jpg",
        berat: 100,
        price: 25000,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Jeruk Mandarin",
        description:
          "Jeruk mandarin berukuran kecil dari Tiongkok. Buah ini memiliki kulit yang tipis, sehingga mudah dikupas. Manis, dengan sedikit rasa asam.",
        kadaluarsa: "2023-12-31",
        caraSimpan: "Masukan dalam suhu -1 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/product_card/aa3b3151-ff81-453a-b58c-6de7345c4fe8.jpg",
        berat: 100,
        price: 200000,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Salat Fresh",
        description:
          "Arugula pedas dan radiccio mustardy sangat cocok untuk salad yang dibumbui dengan minyak zaitun dan jus lemon.",
        kadaluarsa: "2023-12-28",
        caraSimpan: "Masukan dalam suhu -10 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/product_card/2db45b3b-c579-4c7e-a0e6-4aee17a3fcf8.jpg",
        berat: 120,
        price: 18000,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Gulai Tempat asli daging sapi, dinginkan",
        description: "",
        kadaluarsa: "2023-12-28",
        caraSimpan: "Masukan dalam suhu -5 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/a8b035a4ac05e6e0_4610004273650.jpg",
        berat: 120,
        price: 18000,
        CategoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Susu pasteurisasi Zelenodolskiy MK, 2,5%",
        description: "",
        kadaluarsa: "2023-12-8",
        caraSimpan: "Masukan dalam suhu -10 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/70c8ff574a9ffa45_4604087002825.jpg",
        berat: 120,
        price: 22000,
        CategoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Kue Tyrolean Crème brûlée",
        description: "",
        kadaluarsa: "2023-12-12",
        caraSimpan: "Masukan dalam suhu -5 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/1eed4f72cf2e47fe_4605347007581-2.jpg",
        berat: 120,
        price: 40000,
        CategoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: "Kue Tyrolean Crème brûlée",
        description:
          "Tepung terigu, gula, telur, krim yang dinormalisasi, krim minyak nabati (lemak nabati, gula, protein susu, pengemulsi lesitin kedelai, penstabil natrium alginat, garam, zat pewarna betakaroten), santan, sirup glukosa, susu bubuk, sirup pati, zat pembentuk gel: karagenan, pektin; pengemulsi sirup sorbitol, garam, pengatur keasaman asam sitrat, pengawet asam sorbat, zat perisa: Crème brûlée, Vanili",
        kadaluarsa: "2023-12-20",
        caraSimpan: "Masukan dalam suhu -5 derajat",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/1eed4f72cf2e47fe_4605347007581-2.jpg",
        berat: 120,
        price: 40000,
        CategoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: "Keripik roti Skuter dengan biji",
        description:
          "Keripik ini terbuat dari roti segar bebas ragi dengan bunga matahari, rami, labu, wijen dan biji jintan. Tipis dan renyah, keripik ini tidak mengandung perasa atau penguat rasa. Keripik ini dapat ditambahkan ke dalam sup, salad, atau dimakan begitu saja.",
        kadaluarsa: "2023-12-22",
        caraSimpan: "Masukan dalam suhu ruangan",
        imageUrl:
          "https://cm.samokat.ru/processed/m/public/492dd7060186b0a6_4607168122955-1.jpg",
        berat: 120,
        price: 8000,
        CategoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
