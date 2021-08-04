const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all instructions
router.get("/", async (req, res) => {
  try {
    const instructions = await db.Instruction.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(instructions);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one instruction by id
router.get("/:id", async (req, res) => {
  try {
    const instruction = await db.Instruction.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!instruction){
      res.status(404).json({message: `no instruction found with this id`})
    }
    res.status(200).json(instruction);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new instruction
router.post("/", async (req, res) => {
  try {
    const newGenre = await db.Instruction.create(req.body);
    res.status(200).json(newGenre);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete a instruction by id
router.delete("/:id", async (req, res) => {
    try {
      const delGenre = await db.Instruction.destroy({
        where: { id: req.params.id },
      });
      console.log(delGenre);
      if(!delGenre){
        res.status(404).json({message: `no instruction found with this id`})
      }
      res.status(200).json({message:"instruction deleter"});
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;