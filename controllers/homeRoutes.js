const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

// home
router.get("/", (req, res) => {
    console.log(req.session)
    db.Recipe.findAll({
        attributes: ["id", "recipe_name", "recipe_image", "prep_time", "cook_time", "createdAt"],
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
            const posts = recipeData.map((recipe) =>
                recipe.get({
                    plain: true,
                })
            );

            res.render("home", {
                posts,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// login page
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;