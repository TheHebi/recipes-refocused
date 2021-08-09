const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")
const homeRoutes = require("./homeRoutes");
// const frontEndRoutes = require("./frontEndRoutes")
const dashboardRoutes = require("./dashboardRoutes");
const recipeRoutes = require('./recipeRoutes');
const createRoutes = require('./createRoutes');
const aboutRoutes = require('./aboutRoutes');

router.use("/api",apiRoutes);
router.use("/", homeRoutes);
// router.use('/', frontEndRoutes);
router.use('/', dashboardRoutes);
router.use('/', recipeRoutes);
router.use('/', createRoutes);
router.use('/', aboutRoutes);

module.exports = router;