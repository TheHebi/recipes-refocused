const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    hooks:{
        beforeCreate: async  (newUserData)=>{
            newUserData.password = bcrypt.hashSync(newUserData.password,10);
            return newUserData;
        },
        beforeBulkCreate: async  (newUserData)=>{
            const hashedPasswords = newUserData.map(newUser=>{
                newUser.password = bcrypt.hashSync(newUser.password,10);
                return newUser;
            })
            return hashedPasswords;
        }
    },
    sequelize
})

module.exports = User