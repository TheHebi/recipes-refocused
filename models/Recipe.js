const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const Genre = require("./Genre");

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
      validate: {
        len: (1, 50),
      },
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Recipe;
