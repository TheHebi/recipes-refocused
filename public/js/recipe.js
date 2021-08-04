// ==================================================================================
// INIT VARIABLES AND SET UP
// ==================================================================================

const commentList = document.querySelector('#comment-list');

let saved = false;
// const saveBtn = document.querySelector('#unsaved').children[0];
// const unsaveBtn = document.querySelector('#saved').children[0];
// document.querySelector('#saved').style.display = 'none'; // hidden by default

// Set image height to instructions card height
const clientHeight = document.querySelector('#card-right').children[0].children[0].clientHeight;
const recipeImage = document.querySelector('#recipe-image');
recipeImage.style.height = `${clientHeight}px`;
recipeImage.style.objectFit = 'cover';

// ==================================================================================
// FUNCTIONS
// ==================================================================================
const commentFormHandler = async (event) => {
    event.preventDefault();
    // log new comment to database

};

// const upvoteHandler = () => {
//     const likeCount = document.querySelector('#like-btn').children[1].innerHTML;
    
//     document.querySelector('#like-btn').children[0].style.background = 'blue'
//     console.log(likeCount)
// };

const saveHandler = () => {
    if (saved === false) {
        // display correct button
        document.querySelector('#unsaved').style.display = 'none';
        document.querySelector('#saved').style.display = 'flex';
        saved = true;
        console.log('blue')
    } else {
        // display correct button
        document.querySelector('#saved').style.display = 'none';
        document.querySelector('#unsaved').style.display = 'flex';
        saved = false;
        console.log('red')
    }
};

document.querySelector('#add-comment-btn').addEventListener('click', commentFormHandler);
// document.querySelector('#like-btn').addEventListener('click', upvoteHandler);
// saveBtn.addEventListener('click', saveHandler);
// unsaveBtn.addEventListener('click', saveHandler);