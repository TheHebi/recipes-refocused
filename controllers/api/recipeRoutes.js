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
    const oneRecipe = await db.Recipe.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.Genre,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Ingredient,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Instruction,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Comment,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
      ],
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!oneRecipe){
      res.status(404).json({message: `no recipe found with this id`})
    }
    res.status(200).json(oneRecipe);
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
    if(!delRecipe){
      res.status(404).json({message: `no recipe found with this id`})
    }
    res.status(200).json({message:"recipe deleted"});
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
