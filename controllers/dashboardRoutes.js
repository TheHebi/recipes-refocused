const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

router.get("/dashboard", (req, res) => {
    console.log(req.session)
    db.Recipe.findAll({
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
                attributes: ["username"],
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
    })
        .then((recipeData) => {
            const myPosts = recipeData.map((recipe) =>
                recipe.get({
                    plain: true,
                })
            );

            res.render("dashboard", {
                myPosts,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;