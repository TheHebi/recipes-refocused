const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all users
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

module.exports = router