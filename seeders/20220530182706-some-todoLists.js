"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Girls I wanna date",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Things I wanna do now I left my friends",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eleminate all the back-players",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Boys I wanna kiss",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
