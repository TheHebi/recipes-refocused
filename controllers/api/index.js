const express = require('express');
const router = express.Router();
const recipeRoutes = require("./recipeRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const genreRoutes = require("./genreRoutes");
const ingredientRoutes = require("./ingredientRoutes");

router.use("/genres",instructionRoutes);
router.use("/genres",genreRoutes);
router.use("/ingredients",ingredientRoutes);
router.use("/comments",commentRoutes);
router.use("/users",userRoutes);
router.use("/recipes",recipeRoutes);

module.exports = router;