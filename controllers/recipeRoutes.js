const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

// ============================================
// RECIPE VIEWERS
// ============================================

// view a single recipe
router.get("/recipe/:id", (req, res) => {
    db.Recipe.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time", "createdAt"],
        include: [
            {
                model: db.Comment,
                attributes: ["id", "content", "createdAt"],
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
                attributes: ["id", "instruction", "local_step_number"]
            },
            {
                model: db.Genre,
                attributes: ["id", "name"],
            },
        ],
    }).then((recipeData) => {
        if (!recipeData) {
            res.status(404).json({
                message: "No recipe found with this id",
        });
        return;
    };
  
    const post = recipeData.get({plain: true});
  
    // res.status(200).json(post);
    res.render("recipe", {
        post,
        logged_in: req.session.loggedIn,
        username: req.session.username,
    });
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Export//
module.exports = router;