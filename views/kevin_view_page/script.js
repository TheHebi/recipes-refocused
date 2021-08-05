const commentList = document.querySelector('#comment-list');

let saved = false;
const saveBtn = document.querySelector('#unsaved').children[0];
const unsaveBtn = document.querySelector('#saved').children[0];
document.querySelector('#saved').style.display = 'none'; // hidden by default

const commentFormHandler = async (event) => {
    // TURN PREVENT DEFAULT OFF FOR DEPLOYED APP - WE WANT THE PAGE TO RELOAD WITH THE COMMENT
    event.preventDefault();

    const comment_text = document.querySelector('#comment-box').value.trim();

    const newCard = document.createElement('div');
    newCard.classList.add('card', 'my-2');

    // comment content
    const newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    const newSpan = document.createElement('span');
    newSpan.innerHTML = comment_text;

    // user info
    const newFooter = document.createElement('div');
    newFooter.classList.add('card-footer');

    const newFooterContent = document.createElement('p');
    const newFooterName = document.createElement('strong');
    newFooterName.innerHTML = 'username';

    newFooterContent.append(newFooterName);
    newFooterContent.innerHTML = ' - on X/X/XXXX';

    // append all and display
    newFooter.append(newFooterContent);
    newCardBody.append(newSpan);
    newCard.append(newCardBody);
    newCard.append(newFooter);

    commentList.append(newCard);
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
saveBtn.addEventListener('click', saveHandler);
unsaveBtn.addEventListener('click', saveHandler);