const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")
const homeRoutes = require("./homeRoutes");
// const frontEndRoutes = require("./frontEndRoutes")
const dashboardRoutes = require("./dashboardRoutes");
const recipeRoutes = require('./recipeRoutes');
const createRoutes = require('./createRoutes');

router.use("/api",apiRoutes);
router.use("/", homeRoutes);
// router.use('/', frontEndRoutes);
router.use('/', dashboardRoutes);
router.use('/', recipeRoutes);
router.use('/', createRoutes);

module.exports = router;