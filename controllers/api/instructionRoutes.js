const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all users
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

module.exports = router