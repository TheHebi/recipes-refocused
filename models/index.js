const User = require("./User");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const Genre = require("./Genre");
const Ingredient = require("./Ingredient");
const Instruction = require("./Instruction")

User.hasMany(Recipe,);

User.hasMany(Comment,);

Recipe.hasMany(Comment);

Recipe.belongsToMany(Genre,{
    through: `RecipeGenre`
});

Genre.belongsToMany(Recipe,{
    through: `RecipeGenre`
});

Recipe.hasMany(Ingredient)

Ingredient.belongsTo(Recipe)

Recipe.hasMany(Instruction)

Instruction.belongsTo(Recipe)

Recipe.belongsTo(User,);

Comment.belongsTo(User);

Comment.belongsTo(Recipe)

module.exports = {
    User,
    Recipe,
    Comment,
    Genre,
    Ingredient,
    Instruction
}