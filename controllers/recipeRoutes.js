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
                attributes: ["id", "username"],
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
    const recipeOwner = (post.User.id === req.session.user_id);
    res.render("recipe", {
        post,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
        recipe_owner: recipeOwner
    });
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// check session user's saved recipes
router.get('/savedRecipes', async (req, res) => {
    try {
        if (req.session.user_id) {
            const savedUsers = await db.User.findByPk(req.session.user_id, {
                include: [
                    {
                        model: db.Recipe,
                        as: `SavedRecipe`,
                        attributes: {exclude: [`createdAt`, `updatedAt`]},
                        through:{attributes: {exclude: [`createdAt`,`updatedAt`]}}
                    },
                ],
            });
            const savedUsersJSON = savedUsers.get({ plain: true });
            res.status(200).json(savedUsersJSON);
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

// add a saved recipe
router.post('/savedRecipes', async (req, res) => {
    try {
        const saveUser = await db.User.findByPk(req.session.user_id);
        await saveUser.addSavedRecipe(req.body.recipeId);
        res.status(200).json(saveUser.get({plain:true}))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// remove a saved recipe
router.delete('/savedRecipes', async (req, res) => {
    try {
        const saveUser = await db.User.findByPk(req.session.user_id);
        await saveUser.removeSavedRecipe(req.body.recipeId);
        res.status(200).json(saveUser.get({plain:true}))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// check session user's liked recipes
router.get('/likedRecipes', async (req, res) => {
    try {
        if (req.session.user_id) {
            const likedUsers = await db.User.findByPk(req.session.user_id, {
                include: [
                    {
                        model: db.Recipe,
                        as: `LikedRecipe`,
                        attributes: {exclude: [`createdAt`, `updatedAt`]},
                        through:{attributes: {exclude: [`createdAt`,`updatedAt`]}}
                    },
                ],
            });
            const likedUsersJSON = likedUsers.get({ plain: true });
            res.status(200).json(likedUsersJSON);
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

// add a liked recipe
router.post('/likedRecipes', async (req, res) => {
    try {
        const likeUser = await db.User.findByPk(req.session.user_id);
        await likeUser.addLikedRecipe(req.body.recipeId);
        res.status(200).json(likeUser.get({plain:true}))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// remove a liked recipe
router.delete('/likedRecipes', async (req, res) => {
    try {
        const likeUser = await db.User.findByPk(req.session.user_id);
        await likeUser.removeLikedRecipe(req.body.recipeId);
        res.status(200).json(likeUser.get({plain:true}))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// delete a recipe
router.delete('/recipe/:id', async (req, res) => {
    try {
        // delete chosen recipe
        const recipeDelete = db.Recipe.destroy({
            where: {
                id: req.params.id
            }
        });
        // const recipeDeleteJSON = recipeDelete.get({plain:true})
        res.status(200).json(recipeDelete);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// ============================================
// DELETE A COMMENT
// ============================================

// router.delete('/comment/:id', async (req, res) => {
//     try {
//         // delete chosen comment
//         const commentDelete = db.Comment.destroy({
//             where: {
//                 id: req.params.id,
//             }
//         });
//         res.status(200).json(commentDelete);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

//Export//
module.exports = router;