const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

// ============================================
// RECIPE VIEWERS AND CREATORS AND EDITORS
// ============================================

// homepage with all recipes
router.get("/", (req, res) => {
  db.Recipe.findAll({
    attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time"],
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

      res.render("index", {
        posts,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// serve create recipe page
router.get("/create", (req, res) => {
  res.render("create", {
    logged_in: true,
  });
});

// process new recipe
router.post('/create', async (req, res) => {
  // TODO: add functionality for checking whether user is logged in
  try {
    // post to mysql db
    const newRecipe = await db.Recipe.create({
      recipe_image: req.body.imgUrl,
      recipe_name: req.body.recipe_name,
      prep_time: req.body.prep_time,
      cook_time: req.body.cook_time,
      UserId: 2, // req.session.userId or whatever the parameter is called
    });

    const recipe = newRecipe.get({plain: true});
    res.status(200).json(recipe);
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
      newInstructsArray.push(item)
    };
    const newRecipeInstructs = await db.Instruction.bulkCreate(newInstructsArray);

    res.status(200).json(newRecipeInstructs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
  const recipe = await db.Recipe.findByPk(req.body.RecipeId);
  recipe.addGenre(req.body.recipe_genres);
});

// ============================================
// LOGIN MANAGEMENT
// ============================================

// login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// register
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("register");
});

// router.get("*", (req, res) => {
//   res.status(404).render("404");
//   // res.redirect('/');
// });

//Export//
module.exports = router;