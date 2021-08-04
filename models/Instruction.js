const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Instruction extends Model {}

Instruction.init(
    {
        instruction: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        local_step_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
    }
);

module.exports = Instruction;