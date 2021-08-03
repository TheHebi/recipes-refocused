const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User')
const Genre = require('./Genre')

class Recipe extends Model {}


Recipe.init({
    recipe_image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    },
    recipe_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: (1,50)
        }
    },
    recipe_ingredients: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipe_author: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'username'
        }
    },
    prep_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cook_time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recipe_howto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: 'id'
        }
    }
})

module.exports = Recipe;
