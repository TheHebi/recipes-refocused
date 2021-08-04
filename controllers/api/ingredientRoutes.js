const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all ingredients
router.get("/", async (req, res) => {
  try {
    const ingredients = await db.Ingredient.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(ingredients);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one ingredient by id
router.get("/:id", async (req, res) => {
  try {
    const ingredient = await db.Ingredient.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!ingredient){
      res.status(404).json({message: `no ingredient found with this id`})
    }
    res.status(200).json(ingredient);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new ingredient
router.post("/", async (req, res) => {
  try {
    const newIngredient = await db.Ingredient.create(req.body);
    res.status(200).json(newIngredient);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a ingredient by id
router.delete("/:id", async (req, res) => {
    try {
      const delIngredient = await db.Ingredient.destroy({
        where: { id: req.params.id },
      });
      console.log(delIngredient);
      if(!delIngredient){
        res.status(404).json({message: `no ingredient found with this id`})
      }
      res.status(200).json({message:"ingredient deleter"});
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;