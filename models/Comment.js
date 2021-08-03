const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Recipe = require("./Recipe")
const User = require("./User")
class Comment extends Model {}

Comment.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [1, 255],
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: `id`,
        },
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Recipe,
          key: `id`,
        },
      },
    },
    {
      sequelize,
    }
  );

module.exports = Comment