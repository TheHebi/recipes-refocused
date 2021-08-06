const db = require("../models");

const seedRecipeGenre = async () =>{
    const recipes = await db.Recipe.findAll()
    const r1 = await recipes[0]
    r1.addGenre([1,2,3])
    const r2 = await recipes[1]
    r2.addGenre([1,2,3,6])
    const r3 = await recipes[2]
    r3.addGenre([2,3,9])
    const r4 = await recipes[3]
    r4.addGenre([1,2,3,])
    const r5 = await recipes[4]
    r5.addGenre([2,3,18,22])
}

module.exports = seedRecipeGenre;