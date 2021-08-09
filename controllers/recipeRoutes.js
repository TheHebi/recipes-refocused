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
        order: [
            [db.Instruction, 'id', 'asc'],
            [db.Ingredient, 'id', 'asc']
        ],
        include: [
            {
                model: db.Comment,
                attributes: ["id", "content", "createdAt"],
                include: { model: db.User, attributes: ["id", "username"] },
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
        // session_user_is: req.session.user_id,
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
                        include: {
                            model: db.Genre
                        },
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

// count total likes
router.get('/likedRecipesCount/:id', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByPk(req.params.id);
        const likeCount = await recipe.countLikedUser();
        res.status(200).json(likeCount)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// ============================================
// RECIPE UPDATERS
// ============================================

// serve the updater page
router.get('/update/:id', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByPk(req.params.id, {
            attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time", "createdAt"],
            order: [
                [db.Instruction, 'id', 'asc'],
                [db.Ingredient, 'id', 'asc']
            ],
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
        });
        const recipeJSON = recipe.get({plain: true})
        console.log(recipeJSON);
        res.render('update', recipeJSON);
    } catch (err) {
        res.status(500).json(err);
    };
});

// update a recipe
router.put('/update/:id', async (req, res) => {
    try {
        const recipeUpdate = await db.Recipe.update({
            recipe_image: req.body.recipe_url,
            recipe_name: req.body.recipe_name,
            prep_time: req.body.prep_time,
            cook_time: req.body.cook_time,
        },{
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(recipeUpdate);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// update recipe's instructions
router.put('/updateInstructs', async (req, res) => {
    try {
        // delete all related instructions
        await db.Instruction.destroy({
            where: {
                RecipeId: req.body.RecipeId
            }
        })

        // post to mysql db
        const updateInstructsArray = [];
        for (let i=0; i<req.body.instructions.length; i++) {
            const item = {
                RecipeId: req.body.RecipeId,
                local_step_number: i+1,
                instruction: req.body.instructions[i].step,
            };
            updateInstructsArray.push(item);
        };
        const instructionsUpdate = await db.Instruction.bulkCreate(updateInstructsArray);

        res.status(200).json(instructionsUpdate);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// update recipe's ingredients
router.put('/updateIngredients', async (req, res) => {
    try {
        // delete all related ingredients
        await db.Ingredient.destroy({
            where: {
                RecipeId: req.body.RecipeId,
            },
        });

        // post to mysql db
        const updateIngredientsArray = [];
        for (let i=0; i<req.body.recipe_ingredients.length; i++) {
            const item = {
                RecipeId: req.body.RecipeId,
                amount: req.body.recipe_ingredients[i].amount,
                unit: req.body.recipe_ingredients[i].unit,
                name: req.body.recipe_ingredients[i].name,
            };
            updateIngredientsArray.push(item);
        };
        const updateRecipeIngredients = await db.Ingredient.bulkCreate(updateIngredientsArray);
  
        res.status(200).json(updateRecipeIngredients);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// update recipe's genre tags
router.put('/updateTags', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByPk(req.body.RecipeId, {
            include: [
                {
                    model: db.Genre,
                    attributes: ["id", "name"],
                },
            ]
        });
        console.log(recipe)
        delArray = [];
        recipe.Genres.forEach(genre => {
            delArray.push(genre.dataValues.id)
        });
        // delete all related tags
        await recipe.removeGenre(delArray);
        // add new ones
        await recipe.addGenre(req.body.recipe_genres);
        res.status(200).json(recipe.get({plain:true}))

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    };
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
// COMMENT UPDATE / DELETE
// ============================================

router.put('/comment/:id', async (req, res) => {
    try {
        // update chosen comment
        const commentUpdate = await db.Comment.update({
            content: req.body.content
        },{
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(commentUpdate);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

router.delete('/comment/:id', async (req, res) => {
    try {
        // delete chosen comment
        const commentDelete = db.Comment.destroy({
            where: {
                id: req.params.id,
            }
        });
        res.status(200).json(commentDelete);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//Export//
module.exports = router;