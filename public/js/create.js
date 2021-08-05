// =====================================================================
// CLOUDINARY WIDGET INIT
// =====================================================================

let imgUrl = null; // global var init
const widget = cloudinary.createUploadWidget({
    cloudName: "dwz0bmbpa", 
    uploadPreset: "oetjkfou",
    sources: ['local', 'url', 'google_drive'],
    multiple: false,
}, (err, result) => {
    if (err) {
        console.log(err);
    };
    if (result) {
        if (result.event === 'success') {
            // uploads
            // const filename = result.info.original_filename;
            imgUrl = result.info.secure_url;

            // html assets
            document.querySelector('#svgoutput').style.display = 'none';
            document.querySelector('#imgUpload').style.display = 'none';

            const recipeImage = document.querySelector('#output');
	        recipeImage.src = imgUrl;

            const clientHeight = document.getElementById('card-right').clientHeight;
            recipeImage.style.height = `${clientHeight}px`;
            recipeImage.style.objectFit = 'cover';
            recipeImage.style.borderBottomLeftRadius = '3px';
            recipeImage.style.borderBottomRightRadius = '3px';
        };
    };
});

// =====================================================================
// VARIABLE INIT
// =====================================================================

const imageUploader = document.querySelector('#imgUpload');

const ingredientArray = [];
const ingredientButton = document.querySelector('#ingredient-btn');

const stepArray = [];
const stepButton = document.querySelector('#step-btn');

const genreArray = [];
let genreCounter = 0;
const addGenreButton = document.querySelector('#add-genre-btn');

const prepTime = document.querySelector('#prep-time');
const cookTime = document.querySelector('#cook-time');
const createPostForm = document.querySelector('#create-recipe-form');

// =====================================================================
// FUNCTION DEFINITIONS
// =====================================================================

const imageUploadHandler = () => {
    widget.open();
};

const ingredientCreateHandler = () => {
    const ingredientList = document.querySelector('#ingredientList');

    // create new elements
    const newWrapper = document.createElement('div');
    newWrapper.classList.add('d-flex', 'flex-row', 'align-items-center');

    const newDiv = document.createElement('div');
    newDiv.classList.add('input-group',  'my-2');

    const newQuant = document.createElement('input');
    newQuant.classList.add('form-control');
    newQuant.type = 'number';
    newQuant.placeholder = 'Quantity';
    newQuant.style.width = '25%';
    
    const newUnit = document.createElement('input');
    newUnit.classList.add('form-control');
    newUnit.type = 'text';
    newUnit.placeholder = 'Unit';
    newUnit.style.width = '25%';

    const newIngredient = document.createElement('input');
    newIngredient.classList.add('form-control');
    newIngredient.type = 'text';
    newIngredient.placeholder = 'Ingredient';
    newIngredient.style.width = '50%';

    const newDelBtn = document.createElement('button');
    newDelBtn.classList.add('btn-close', 'mx-3');

    // display new elements
    newDiv.append(newQuant);
    newDiv.append(newUnit);
    newDiv.append(newIngredient);
    newWrapper.append(newDiv);
    newWrapper.append(newDelBtn);
    ingredientList.append(newWrapper);
    
    // format neighbor div
    const placeHolderImage = document.querySelector('#svgoutput');
    if (placeHolderImage.style.display === 'none') {
        // update image height (to the left)
        const recipeImage = document.querySelector('#output');
        const clientHeight = document.getElementById('card-right').clientHeight;
        recipeImage.style.height = `${clientHeight}px`;
        recipeImage.style.objectFit = 'cover';
    } else {
        console.log('no image')
    };
};

const ingredientDeleteHandler  = (event) => {
    event.preventDefault();

    if (event.target.matches('.btn-close')) {
        // remove element from html
        event.target.parentElement.remove();
    };
};

const stepCreateHandler = () => {
    // create new elements
    const newDiv = document.createElement('div');
    newDiv.classList.add('input-group', 'd-flex', 'align-items-center', 'my-2');

    const newH5 = document.createElement('h5');
    newH5.innerHTML = `${stepList.children.length + 1}.`;
    
    const newInput = document.createElement('input');
    newInput.classList.add('form-control', 'mx-3');
    newInput.type = 'text';
    newInput.placeholder = 'New step...';
    
    const newDelBtn = document.createElement('button');
    newDelBtn.classList.add('btn-close', 'mx-3');
    // newDelBtn.setAttribute('data-id', (stepCounter - 1))
    
    
    // display new elements
    newDiv.append(newH5);
    newDiv.append(newInput);
    newDiv.append(newDelBtn);
    
    stepList.append(newDiv);
};

const stepDeleteHandler = (event) => {
    event.preventDefault();

    if (event.target.matches('.btn-close')) {
        const stepList = document.querySelector('#step-list');

        // remove element from html
        event.target.parentElement.remove();

        // update step number
        for (let i = 0; i < stepList.children.length; i++) {
            stepList.children[i].children[0].innerHTML = `${i+1}.`;
        }
    };
};

const addGenreHandler = () => {
    const genre = document.querySelector('#genre').value;
    const genreText = document.querySelector('#genre').options[genre].text;
    const genreList = document.querySelector('#genre-list');

    if (genre === 'Select a tag...') {} else if  (!genreArray.includes(genre)) {
        // create new elements
        const newGenreCard = document.createElement('div');
        newGenreCard.classList.add('card', 'mx-2', 'mt-1');
    
        const newGenreCardHeader = document.createElement('div');
        newGenreCardHeader.classList.add('card-header', 'd-flex', 'justify-content-end');
    
        const newGenreDelButton = document.createElement('button');
        newGenreDelButton.classList.add('btn-close');
        newGenreDelButton.setAttribute('data-id', genreCounter);
        genreArray.push(genre);
        genreCounter++;
        
        newGenreCardHeader.append(newGenreDelButton);
    
        const newGenreCardBody = document.createElement('div');
        newGenreCardBody.classList.add('card-body');
    
        const newBadge = document.createElement('span');
        newBadge.classList.add('badge', 'rounded-pill', 'bg-primary');
        newBadge.innerHTML = genreText;
        
        newGenreCardBody.append(newBadge);
        
        // append new elements
        newGenreCard.append(newGenreCardHeader);
        newGenreCard.append(newGenreCardBody);
    
        genreList.append(newGenreCard);
    } else {
        alert('Your recipe already has that tag!');
    };

};

const deleteGenreHandler = (event) => {
    event.preventDefault();

    if (event.target.matches('.btn-close')) {
        const genreList = document.querySelector('#genre-list');

        // remove tag from array
        const index = event.target.getAttribute('data-id');
        genreArray.splice(index, 1);

        // remove element from html
        event.target.parentElement.parentElement.remove();

        // update data-id of all elements
        for (let i = 0; i < genreArray.length; i++) {
            genreList.children[i].children[0].children[0].setAttribute('data-id', i);
        };
    };
};

const submitFormHandler = async (event) => {
    event.preventDefault();

    // CHECK FOR AT LEAST ONE INGREDIENT AND ONE STEP
    const ingredientList = document.querySelector('#ingredientList');
    const stepList = document.querySelector('#step-list');
    if (ingredientList.children.length === 0) {
        alert('Please enter at least one ingredient!');
        return
    } else if (stepList.children.length === 0) {
        alert('Please enter at least one step!');
        return
    };

    // Grab values and build post body
    const newIngredientArray = [];
    for (let i = 0; i < ingredientList.children.length; i++) {
        const amountHTML = ingredientList.children[i].children[0].children[0].value;
        const unitHTML = ingredientList.children[i].children[0].children[1].value;
        const nameHTML = ingredientList.children[i].children[0].children[2].value;

        if (amountHTML && nameHTML) {
            newIngredientArray.push({
                amount: amountHTML,
                unit: unitHTML,
                name: nameHTML,
            });
        };
    };
    if (newIngredientArray.length === 0) {
        alert('Please enter at least one ingredient!');
        return
    };


    const newStepArray = [];
    for (let i = 0; i < stepList.children.length; i++) {
        const step = stepList.children[i].children[1].value;
        if (step) {
            newStepArray.push(step);
        };
    };
    if (newStepArray.length === 0) {
        alert('Please enter at least one step!');
        return
    }

    const recipeObj = {
        recipe_name: document.querySelector('#recipe-title').value,
        recipe_url: imgUrl,
        prep_time: document.querySelector('#prep-time').value,
        cook_time: document.querySelector('#cook-time').value,
        genre_id: genreArray,
    };
    // console.log(recipeObj)
    
    // POST RECIPE TO SERVER
    let recipeRes = await fetch('/create', {
        method: 'POST',
        body: JSON.stringify(recipeObj),
        headers: {
            "Content-Type":"application/json"
        },
    });
    recipeResJSON = await recipeRes.json();
    
    // POST INSTRUCTIONS TO SERVER
    const stepObj = {
        RecipeId: recipeResJSON.id,
        recipe_howto: newStepArray
    };

    const instructRes = await fetch('/createInstructs', {
        method: 'POST',
        body: JSON.stringify(stepObj),
        headers: {
            "Content-Type":"application/json"
        },
    });

    // POST INGREDIENTS TO SERVER
    const ingredObj = {
        RecipeId: recipeResJSON.id,
        recipe_ingredients: newIngredientArray,
    };
    const ingredRes = await fetch('/createIngredients', {
        method: 'POST',
        body: JSON.stringify(ingredObj),
        headers: {
            "Content-Type":"application/json"
        },
    })

    // POST TAGS TO SERVER
    let tagResOk = true;
    let tagResStatus = 0;
    if (genreArray.length > 0) {
        const tagRes = await fetch('/addTags', {
            method: 'POST',
            body: JSON.stringify({
                RecipeId: recipeResJSON.id,
                recipe_genres: genreArray,
            }),
            headers: {
                "Content-Type":"application/json"
            },
        });
        tagResOk = tagRes.ok;
        tagResStatus = tagRes.status;
    };

    if (recipeRes.ok && instructRes.ok && ingredRes.ok && tagResOk) {
        // redirect to recipe page
        location.replace(`/recipe/${recipeResJSON.id}`)
    }  else if (recipeRes.status === 500 || instructRes.status === 500 || ingredRes.status === 500 || tagResStatus === 500) {
        // grab server error message
        alert('Something went wrong...');
    };
};

// =====================================================================
// EVENT LISTENERS
// =====================================================================

const stepList = document.querySelector('#step-list');
const genreList = document.querySelector('#genre-list');
const ingredientList = document.querySelector('#ingredientList');

// listeners to change HTML
imageUploader.addEventListener('click', imageUploadHandler);
ingredientButton.addEventListener('click', ingredientCreateHandler);
ingredientList.addEventListener('click', ingredientDeleteHandler);
stepButton.addEventListener('click', stepCreateHandler);
stepList.addEventListener('click', stepDeleteHandler);
addGenreButton.addEventListener('click', addGenreHandler);
genreList.addEventListener('click', deleteGenreHandler);


// submit form
createPostForm.addEventListener('submit', submitFormHandler);