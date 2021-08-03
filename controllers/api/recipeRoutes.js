const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await db.Recipe.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one recipe by id value including associated genres and comments
router.get("/:id", async (req, res) => {
  try {
    const recipe = await db.Genre.findOne({
      where: { id: req.params.id },
      include: [{
        model: db.Genre,
        attributes: { exclude: [`createdAt`, `updatedAt`] },
      },
      {
        model: db.Comment,
        attributes: { exclude: [`createdAt`, `updatedAt`] },
      }],
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res
      .status(200)
      .json({ message: recipe ? res.json(recipe) : `Recipe not found.` });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new recipe
router.post("/", async (req, res) => {
  try {
    const newRecipe = await db.Recipe.create(req.body);
    res.status(200).json(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a recipe by id
router.delete("/:id", async (req, res) => {
    try {
      const delRecipe = await db.Recipe.destroy({
        where: { id: req.params.id },
      });
      console.log(delRecipe);
      res.status(200).json({
        message: delRecipe ? `Recipe deleted!` : `Recipe not found.`,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;