const commentList = document.querySelector('#comment-list');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-box').value.trim();

    const newDiv = document.createElement('div');
    newDiv.classList.add('card', 'my-2', 'p-2');

    const newH4 = document.createElement('h4');
    newH4.innerText = "username"
    const newP = document.createElement('p');
    newP.innerText = "on Date"
    const newBreak = document.createElement('br');
    const newSpan = document.createElement('span');
    newSpan.innerText = comment_text;

    newDiv.append(newH4);
    newDiv.append(newP);
    newDiv.append(newBreak);
    newDiv.append(newSpan);

    commentList.append(newDiv);
}

$('#add-comment-btn').click('click', commentFormHandler(event));

// document.querySelector('#add-comment-btn').addEventListener('submit', commentFormHandler);