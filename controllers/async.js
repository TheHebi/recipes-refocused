router.get("/dashboard", async (req, res) => {
    console.log(req.session)
    try{

        const recipeData = await db.Recipe.findAll({
            where: {
                UserId: req.session.user_id
            },
            attributes: ["id", "recipe_name", "recipe_image", "prep_time", "cook_time"],
            include: [
                {
                    model: db.Comment,
                    attributes: ["id", "content", "UserId", "createdAt"],
                    include: { model: db.User, attributes: ["username"] },
                },
                {
                    model: db.User,
                    attributes: ["username"],
                },
                {
                    model: db.Ingredient,
                    attributes: ["id", "amount", "unit", "name"]
                },
                {
                    model: db.Instruction,
                    attributes: ["id", "instruction"]
                },
                {
                    model: db.Genre,
                    attributes: ["id", "name"],
                },
            ],
        });

        const savedData = await db.User.findOne({
            where: { id: req.params.id },
            include: [
              {
                model: db.Recipe,
                as: `SavedRecipe`,
                attributes: {exclude: [`createdAt`, `updatedAt`]},
                through:{attributes: {exclude: [`createdAt`,`updatedAt`]}}
              },
            ],
            attributes: { exclude: [`createdAt`, `updatedAt`] },
          });

        const myPosts = await recipeData.map((recipe) =>{
        recipe.get({
            plain: true,
        })
    })
        
        const mySaves = await savedData.map((saved)=>{
            saved.get({
                plain:true
            })
        })
        
        await res.render("dashboard", {
            myPosts,
            mySaves,
            loggedIn: req.session.loggedIn,
        });
    
}catch(err){
    console.log(err);
    res.status(500).json(err);
}
})
