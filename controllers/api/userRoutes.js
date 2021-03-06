const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require(`bcrypt`);

// find all users
router.get("/", async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one user by id tag and associated recipes and comments
router.get("/:id", async (req, res) => {
  try {
    const user = await db.User.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.Recipe,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Comment,
          attributes: { exclude: [`createdAt`, `updatedAt`] },
        },
        {
          model: db.Recipe,
          as: `SavedRecipe`,
          attributes: {exclude: [`createdAt`, `updatedAt`]},
          through:{attributes: {exclude: [`createdAt`,`updatedAt`]}}
        },
        {
          model: db.Recipe,
          as: `LikedRecipe`,
          attributes: {exclude: [`createdAt`, `updatedAt`]},
          through:{attributes: {exclude: [`createdAt`,`updatedAt`]}}
        }
      ],
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!user){
      res.status(404).json({message: `no user found with this id`})
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new user
router.post("/", (req, res) => {
  db.User.create(req.body)
    .then((newUser) => {
      req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.username = newUser.username;
        req.session.loggedIn = true;
        res.json(newUser);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// user login
router.post("/login", (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (!user) {
      res.status(403).json({
        message: "incorrect username or password",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (isPasswordCorrect) {
        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.username = user.username;
          req.session.loggedIn = true;
          res.json(user);
        });
        
      } else {
        res.status(403).json({
          message: "incorrect username or password",
        });
      }
    }
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// delete a user by id
router.delete("/:id", async (req, res) => {
  try {
    const delUser = await db.User.destroy({
      where: { id: req.params.id },
    });
    console.log(delUser);
    if(!delUser){
      res.status(404).json({message: `no user found with this id`})
    }
    res.status(200).json({message:"user deleted"});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;