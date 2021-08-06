const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

// ============================================
// RECIPE CREATION
// ============================================

// serve create recipe page
router.get("/create", (req, res) => {
    res.render("create", {
        loggedIn: req.session.loggedIn,
    });
});
  
// process new recipe
router.post('/create', async (req, res) => {
    try {
        if (req.session.user_id) {
            // post to mysql db
            const newRecipe = await db.Recipe.create({
                recipe_image: req.body.recipe_url,
                recipe_name: req.body.recipe_name,
                prep_time: req.body.prep_time,
                cook_time: req.body.cook_time,
                UserId: req.session.user_id,
            });
      
            const recipe = newRecipe.get({plain: true});
            res.status(200).json(recipe);
        } else {
            res.status(403).json({
                messsage: 'Forbidden: login first!'
            });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
  
// process new instructions
router.post('/createInstructs', async (req, res) => {
    try {
        // post to mysql db
        const newInstructsArray = [];
        for (let i=0; i<req.body.recipe_howto.length; i++) {
            const item = {
                RecipeId: req.body.RecipeId,
                local_step_number: i+1,
                instruction: req.body.recipe_howto[i],
            };
            newInstructsArray.push(item);
        };
        const newRecipeInstructs = await db.Instruction.bulkCreate(newInstructsArray);
  
        res.status(200).json(newRecipeInstructs);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
  
// process new ingredients
router.post('/createIngredients', async (req, res) => {
    try {
        // post to mysql db
        const newIngredientsArray = [];
        for (let i=0; i<req.body.recipe_ingredients.length; i++) {
            const item = {
                RecipeId: req.body.RecipeId,
                amount: req.body.recipe_ingredients[i].amount,
                unit: req.body.recipe_ingredients[i].unit,
                name: req.body.recipe_ingredients[i].name,
            };
            newIngredientsArray.push(item);
        };
        const newRecipeIngredients = await db.Ingredient.bulkCreate(newIngredientsArray);
  
        res.status(200).json(newRecipeIngredients);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
  
// process tags
router.post('/addTags', async (req, res) => {
    try {
        const recipe = await db.Recipe.findByPk(req.body.RecipeId);
        await recipe.addGenre(req.body.recipe_genres);
        res.status(200).json(recipe.get({plain:true}))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// ============================================
// COMMENT CREATION
// ============================================

router.post('/createComment', async (req, res) => {
    try {
        if (req.session.user_id) {
            const comment = await db.Comment.create({
                content: req.body.content,
                UserId: req.session.user_id,
                RecipeId: req.body.recipe_id,
            });
            const commentJSON = comment.get({plain: true});
            res.status(200).json(commentJSON);
        } else {
            res.status(403).json({
                messsage: 'Forbidden: login first!'
            });
        };
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

//

//Export//
module.exports = router;