const express = require("express");
const router = express.Router();
const db = require("../../models");

// find all comments
router.get("/", async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await db.Comment.findOne({
      where: { id: req.params.id },
      attributes: { exclude: [`createdAt`, `updatedAt`] },
    });
    if(!comment){
      res.status(404).json({message: `no comment found with this id`})
    }
    res.status(200).json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a new comment
router.post("/", async (req, res) => {
  try {
    const newComment = await db.Comment.create(req.body);
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update comment by id
router.put('/:id', async (req, res) => {
    try{
      const editComment = await db.Comment.update(req.body,{
        where: {id:req.params.id},
      })
      if(!editComment){
        res.status(404).json({message: `no comment found with this id`})
      }
      res.status(200).json({message:"comment updated"});
    }catch(err){
      res.status(400).json(err)
    }
  });

// delete a comment by id
router.delete("/:id", async (req, res) => {
  try {
    const delComment = await db.Comment.destroy({
      where: { id: req.params.id },
    });
    console.log(delComment);
    if(!delComment){
      res.status(404).json({message: `no comment found with this id`})
    }
    res.status(200).json({message:`comment deleted`});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
