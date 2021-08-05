const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")
const frontEndRoutes = require("./frontEndRoutes")
const profileRoutes = require("./profileRoutes")

router.use("/api",apiRoutes)
router.use('/profile', profileRoutes);
router.use('/', frontEndRoutes);

module.exports = router;