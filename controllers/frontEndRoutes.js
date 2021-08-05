const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");

// homepage with all recipes
router.get("/", (req, res) => {
  db.Recipe.findAll({
    attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time"],
    include: [
      {
        model: db.Comment,
        attributes: ["id", "content", "RecipeId", "UserId", "createdAt"],
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
    attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time"],
    include: [
      {
        model: db.Comment,
        attributes: ["id", "content", "RecipeId", "UserId", "createdAt"],
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
      if (!recipeData) {
        res.status(404).json({
          message: "No recipe found with this id",
        });
        return;
      }

      const post = recipeData.get({
        plain: true,
      });

      res.render("viewRecipe", {
        post,
        logged_in: req.session.logged_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

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