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

// click on recipe to view it
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
  })
    .then((recipeData) => {
      if (!recipeData) {
        res.status(404).json({
          message: "No recipe found with this id",
        });
        return;
      }

      const post = recipeData.get({
        plain: true,
      });

      // res.status(200).json(post);
      res.render("recipe", {
        post,
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
    // process image to cloudinary


    // post to mysql db
    const newRecipe = await db.Recipe.create({
      recipe_image: imgURL,
      recipe_name: req.body.recipe_name,
      prep_time: req.body.prep_time,
      cook_time: req.body.cook_time,
      UserId: 2, // req.session.userId or whatever the parameter is called
    });


    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
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