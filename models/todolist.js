"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoList extends Model {
    static associate(models) {
      todoList.belongsTo(models.user, { foreignKey: "userId" });
      todoList.hasMany(models.todoItem);
    }
  }
  todoList.init(
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todoList",
    }
  );
  return todoList;
};
