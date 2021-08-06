const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.user_id) {
            const savedRecipe = await db.User.findByPk(req.session.user_id, {
                include: [
                    {
                        model: db.Recipe,
                        as: `SavedRecipe`,
                        attributes: { exclude: [`createdAt`, `updatedAt`] },
                        include: {
                            model: db.Genre
                        },
                        through: { attributes: { exclude: [`createdAt`, `updatedAt`] } }
                    },
                ],
            });

            const myRecipe = await db.Recipe.findAll({
                where: {
                    UserId: req.session.user_id
                },
                attributes: ["id", "recipe_name", "recipe_image", "prep_time", "cook_time"],
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

            const myRecipeJSON = myRecipe.map((myrecipe) => myrecipe.get({ plain: true }));
            const savedRecipeJSON = savedRecipe.get({ plain: true });
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