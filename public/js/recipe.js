// ==================================================================================
// INIT VARIABLES AND SET UP
// ==================================================================================
const current_recipe_id = parseInt(document.querySelector('#recipe-id').innerHTML);
const commentList = document.querySelector('#comment-list');

// check for saved status
const saveBtn = document.querySelector('#save-button');
const checkSave = async () => {
    const res = await fetch('/savedRecipes');
    const resJSON = await res.json();

    let savedIndex = 0;
    let saved = false;
    for (let i=0; i<resJSON.SavedRecipe.length; i++) {
        if (resJSON.SavedRecipe[i].id === current_recipe_id) {
            savedIndex = resJSON.SavedRecipe[i].id;
            saved = true;
        };
    };

    if (saved) {
        saveBtn.classList.remove('btn-secondary');
        saveBtn.classList.add('btn-primary');
        saveBtn.innerHTML = '<i class="fas fa-save"></i> Saved!';
    };
};
checkSave();

// check for liked status
const likeBtn = document.querySelector('#like-button');
const checkLike = async () => {
    const res = await fetch('/likedRecipes');
    const resJSON = await res.json();
    
    let likedIndex = 0;
    let liked = false;
    for (let i=0; i<resJSON.LikedRecipe.length; i++) {
        if (resJSON.LikedRecipe[i].id === current_recipe_id) {
            likedIndex = resJSON.LikedRecipe[i].id;
            liked = true;
        };
    };

    if (liked) {
        likeBtn.classList.remove('btn-secondary');
        likeBtn.classList.add('btn-success');
        likeBtn.innerHTML = '<i class="far fa-thumbs-up"></i> Liked!';
    };
};
checkLike();


// Set image height to instructions card height
if (document.querySelector('#recipe-image')) {
    const clientHeight = document.querySelector('#card-right').children[0].children[0].clientHeight;
    const recipeImage = document.querySelector('#recipe-image');
    recipeImage.style.height = `${clientHeight}px`;
    recipeImage.style.objectFit = 'cover';
};

// ==================================================================================
// FUNCTIONS
// ==================================================================================
const commentFormHandler = async (event) => {
    // event.preventDefault();
    console.log(typeof(document.querySelector('#comment-box').value.trim()))
    if (document.querySelector('#comment-box').value === '') {
        alert('Cannot submit an empty comment!');
        return
    };

    // log new comment to database
    await fetch('/createComment', {
        method: 'POST',
        body: JSON.stringify({
            content: document.querySelector('#comment-box').value.trim(),
            recipe_id: current_recipe_id,
        }),
        headers: {
            "Content-Type":"application/json"
        },
    });
    location.replace(`/recipe/${current_recipe_id}/#comments`);
};

const recipeDeleteHandler = async () => {
    if (confirm("Are you sure you'd like to delete this recipe?")) {
        const res = await fetch(`/recipe/${current_recipe_id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            location.replace('/dashboard');
        } else {
            alert('Failed to delete recipe');
        };
    } else {
        return
    };
};

const saveHandler = async () => {
    const res = await fetch('/savedRecipes');
    const resJSON = await res.json();

    let savedIndex = 0;
    let saved = false;
    for (let i=0; i<resJSON.SavedRecipe.length; i++) {
        if (resJSON.SavedRecipe[i].id === current_recipe_id) {
            savedIndex = resJSON.SavedRecipe[i].id;
            saved = true;
        };
    };

    // IF RECIPE IS NOT SAVED - SAVE
    if (!saved) {
        // server
        const addRes = await fetch('/savedRecipes', {
            method: 'POST',
            body: JSON.stringify({
                recipeId: current_recipe_id,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        });

        if (addRes.ok) {
            // html
            saveBtn.classList.remove('btn-secondary');
            saveBtn.classList.add('btn-primary');
            saveBtn.innerHTML = '<i class="fas fa-save"></i> Saved!';
        } else {
            alert('Error saving recipe...');
        };

    // IF RECIPE IS SAVED - DELETE SAVE
    } else {
        // server
        const delRes = await fetch('/savedRecipes', {
            method: 'DELETE',
            body: JSON.stringify({
                recipeId: current_recipe_id,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        });

        if (delRes.ok) {
            // html
            saveBtn.classList.remove('btn-secondary');
            saveBtn.classList.add('btn-primary');
            saveBtn.innerHTML = '<i class="fas fa-save"></i> Saved!';
        } else {
            alert('Error un-saving recipe...');
        };

        // html
        saveBtn.classList.remove('btn-primary');
        saveBtn.classList.add('btn-secondary');
        saveBtn.innerHTML = '<i class="fas fa-save"></i> Save Recipe';
    };
};

const likeHandler = async () => {
    const res = await fetch('/likedRecipes');
    const resJSON = await res.json();

    let likedIndex = 0;
    let liked = false;
    for (let i=0; i<resJSON.LikedRecipe.length; i++) {
        if (resJSON.LikedRecipe[i].id === current_recipe_id) {
            likedIndex = resJSON.LikedRecipe[i].id;
            liked = true;
        };
    };

    // IF RECIPE IS NOT LIKED - SAVE
    if (!liked) {
        // server
        const addRes = await fetch('/likedRecipes', {
            method: 'POST',
            body: JSON.stringify({
                recipeId: current_recipe_id,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        });

        if (addRes.ok) {
            // html
            likeBtn.classList.remove('btn-secondary');
            likeBtn.classList.add('btn-success');
            likeBtn.innerHTML = '<i class="far fa-thumbs-up"></i> Liked!';
        } else {
            alert('Error liking recipe...');
        };

    // IF RECIPE IS SAVED - DELETE SAVE
    } else {
        // server
        const delRes = await fetch('/likedRecipes', {
            method: 'DELETE',
            body: JSON.stringify({
                recipeId: current_recipe_id,
            }),
            headers: {
                "Content-Type":"application/json"
            }
        });

        if (delRes.ok) {
            // html
            likeBtn.classList.remove('btn-secondary');
            likeBtn.classList.add('btn-success');
            likeBtn.innerHTML = '<i class="far fa-thumbs-up"></i> Liked!';
        } else {
            alert('Error un-liking recipe...');
        };

        // html
        likeBtn.classList.remove('btn-success');
        likeBtn.classList.add('btn-secondary');
        likeBtn.innerHTML = '<i class="far fa-thumbs-up"></i> Like Recipe';
    };
};

// const commentDeleteHandler = async (event) => {
//     const res = await fetch (`/comment/${}`, {
//         method: 'DELETE',
//     });
//     location.replace(`/recipe/${current_recipe_id}/#comments`);
// }


// ==================================================================================
// EVENT LISTENERS
// ==================================================================================

// Delete a recipe button
if (document.querySelector('#recipe-delete-btn')) {
    document.querySelector('#recipe-delete-btn').addEventListener('click', recipeDeleteHandler);
};

// Add a comment button
if (document.querySelector('#add-comment-btn')) {
    document.querySelector('#add-comment-btn').addEventListener('click', commentFormHandler);
};

// Back button functionality
document.querySelector('#back-btn').addEventListener('click', () => {
    history.back();
});

// Save recipe button functionality
saveBtn.addEventListener('click', saveHandler);

// Like recipe button functionality
likeBtn.addEventListener('click', likeHandler);

// document.querySelector('#like-btn').addEventListener('click', upvoteHandler);
// unsaveBtn.addEventListener('click', saveHandler);