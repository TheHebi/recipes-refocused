const router = require("express").Router();

router.get("/about", (req, res) => {

    res.render("about", {
        loggedIn: req.session.loggedIn
    });

});

module.exports = router;