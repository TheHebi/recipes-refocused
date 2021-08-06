const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Genre extends Model {}

Genre.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        len: [1, 30],
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Genre;
