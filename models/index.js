const User = require("./User");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const Genre = require("./Genre");

User.hasMany(Recipe,{
    foreignKey: `user_id`
});
User.hasMany(Comment,{
    foreignKey:`user_id`
});
Recipe.hasMany(Comment,{
    foreignKey: `recipe_id`
});
Recipe.hasMany(Genre);
Genre.hasMany(Recipe,{
    foreignKey:`genre_id`
})
Recipe.belongsTo(User,{
    foreignKey: `user_id`
});
Comment.belongsTo(User,{
    foreignKey:`user_id`
});
Comment.belongsTo(Recipe,{
    foreignKey:`recipe_id`
})

module.exports = {
    User,
    Recipe,
    Comment,
    Genre
}