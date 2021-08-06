const db = require("../models");

const seedLikedRecipe = async () =>{
    const users = await db.User.findAll()
    const u1 = users[0]
    await u1.addLikedRecipe(1)
    const u2 = users[1]
    await u2.addLikedRecipe([1,4])
    const u3 = users[2]
    await u3.addLikedRecipe([2,3,5])
    const u4 = users[3]
    await u4.addLikedRecipe([1,2])
};

module.exports = seedLikedRecipe;
