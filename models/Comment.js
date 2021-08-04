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
      }
    },
    {
      sequelize,
    }
  );

module.exports = Comment