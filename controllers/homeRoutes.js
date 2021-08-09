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

// home
router.get("/", async (req, res) => {
    try {
        const recipeData = await db.Recipe.findAll({
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
        });

        const recipeDataLikes = await findLikes(recipeData);

        const posts = recipeDataLikes.map(recipe => recipe.get({ plain: true }));
        // res.status(200).json(posts)
        res.render("home", {
            posts,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
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