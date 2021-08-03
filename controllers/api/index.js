const express = require('express');
const router = express.Router();
const recipeRoutes = require("./recipeRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/comments",commentRoutes);
router.use("/users",userRoutes);
router.use("/recipes",recipeRoutes);

module.exports = router;