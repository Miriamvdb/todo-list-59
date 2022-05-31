"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.todoList);
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unqiue: true },
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
