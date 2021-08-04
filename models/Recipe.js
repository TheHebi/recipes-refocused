const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class Recipe extends Model {}

Recipe.init(
  {
    recipe_image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  {
    sequelize,
  }
);

module.exports = Recipe;
