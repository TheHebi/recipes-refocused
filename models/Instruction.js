const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Instruction extends Model {}

Instruction.init(
    {
        instruction: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Instruction;