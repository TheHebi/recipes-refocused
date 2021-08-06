const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all genres
router.get("/", async (req, res) => {
  try {
    const genres = await db.Genre.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(genres);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one genre by id value including associated recipes
router.get("/:id", async (req, res) => {
  try {
    const genre = await db.Genre.findOne({
      where: { id: req.params.id },
      include: {
        model: db.Recipe,
        attributes: { exclude: [`createdAt`, `updatedAt`] },
      },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!genre){
      res.status(404).json({message: `no genre found with this id`})
    }
    res.status(200).json(genre);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new genre
router.post("/", async (req, res) => {
  try {
    const newGenre = await db.Genre.create(req.body);
    res.status(200).json(newGenre);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a genre by id
router.delete("/:id", async (req, res) => {
    try {
      const delGenre = await db.Genre.destroy({
        where: { id: req.params.id },
      });
      console.log(delGenre);
      if(!delGenre){
        res.status(404).json({message: `no genre found with this id`})
      }
      res.status(200).json({message:"genre deleter"});
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
