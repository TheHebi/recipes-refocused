const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

const findLikes = async (recipeData) => {
    for (let i=0; i<recipeData.length; i++) {
        const likes = await recipeData[i].countLikedUser();
        recipeData[i].dataValues.likeCount = likes;
    }
    return recipeData
};

router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.user_id) {
            const savedRecipe = await db.User.findByPk(req.session.user_id, {
                include: [
                    {
                        model: db.Recipe,
                        as: `SavedRecipe`,
                        attributes: { exclude: [`updatedAt`] },
                        include: {
                            model: db.Genre
                        },
                        through: { attributes: { exclude: [`updatedAt`] } }
                    },
                ],
            });

            const savedRecipeLikes = await findLikes(savedRecipe.dataValues.SavedRecipe);

            const myRecipe = await db.Recipe.findAll({
                where: {
                    UserId: req.session.user_id
                },
                attributes: ["id", "recipe_name", "recipe_image", "prep_time", "cook_time", 'createdAt'],
                include: [
                    {
                        model: db.Comment,
                        attributes: ["id", "content", "UserId", "createdAt"],
                        include: { model: db.User, attributes: ["username"] },
                    },
                    {
                        model: db.User,
                        attributes: ["username"]
                    },
                    {
                        model: db.Ingredient,
                        attributes: ["id", "amount", "unit", "name"]
                    },
                    {
                        model: db.Instruction,
                        attributes: ["id", "instruction"]
                    },
                    {
                        model: db.Genre,
                        attributes: ["id", "name"],
                    },
                ],
            });

            const myRecipeLikes = await findLikes(myRecipe);

            const myRecipeJSON = myRecipeLikes.map((myRecipe) => myRecipe.get({ plain: true }));
            const savedRecipeJSON = savedRecipeLikes.map((savedRecipe) => savedRecipe.get({ plain: true }));
            // res.status(200).json(myRecipeJSON);
            // res.status(200).json(savedRecipeJSON);
            res.render("dashboard", {
                myRecipeJSON,
                savedRecipeJSON,
                loggedIn: req.session.loggedIn
            })
        } else {
            res.status(403).json({
                message: 'User not logged in.'
            });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;
