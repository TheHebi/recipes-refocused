// ==================================================================================
// INIT VARIABLES AND SET UP
// ==================================================================================
const current_recipe_id = parseInt(document.querySelector('#recipe-id').innerHTML);
const commentList = document.querySelector('#comment-list');

let saved = false;
// const saveBtn = document.querySelector('#unsaved').children[0];
// const unsaveBtn = document.querySelector('#saved').children[0];
// document.querySelector('#saved').style.display = 'none'; // hidden by default

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

const saveHandler = () => {
    // IF COMMENT IS NOT YET SAVED - CREATE SAVE

    // IF COMMENT IS SAVED - DELETE SAVE
};


// const commentDeleteHandler = async (event) => {
//     const res = await fetch (`/comment/${}`, {
//         method: 'DELETE',
//     });
//     location.replace(`/recipe/${current_recipe_id}/#comments`);
// }

// const upvoteHandler = () => {
//     const likeCount = document.querySelector('#like-btn').children[1].innerHTML;
    
//     document.querySelector('#like-btn').children[0].style.background = 'blue'
//     console.log(likeCount)
// };


// ==================================================================================
// EVENT LISTENERS
// ==================================================================================

if (document.querySelector('#recipe-delete-btn')) {
    document.querySelector('#recipe-delete-btn').addEventListener('click', recipeDeleteHandler);
};

if (document.querySelector('#add-comment-btn')) {
    document.querySelector('#add-comment-btn').addEventListener('click', commentFormHandler);
};

document.querySelector('#back-btn').addEventListener('click', () => {
    history.back();
});
// document.querySelector('#like-btn').addEventListener('click', upvoteHandler);
// saveBtn.addEventListener('click', saveHandler);
// unsaveBtn.addEventListener('click', saveHandler);