const Recipe = require('../models/Recipe');

const recipeData = [
  {
    recipe_image: 'http://placecage.com/200/300',
    recipe_name: 'Chinese Dumplings',
    recipe_ingredients: [
        'Ground Pork',
        'Napa cabbage',
        'Green onions',
        'Shiitake mushrooms',
        'Bok choy',
        'Bamboo shoots',
        'Garlic cloves',
        'Fresh ginger',
        'Soy sauce',
        'Corn starch',
        'Sesame oil',
        'Sriracha'
    ],
    prep_time: 30,
    cook_time: 60,
    recipe_howto: [
        'Make the potsticker filling: Just put all the filling ingredients in a large bowl and mix until combined.',
        'Form the dumplings: Fill each wrapper with about a tablespoon of pork filling. Wet your finger in water, then run it along the edges of the wrapper. This will help keep it closed.',
        'Pan fry the dumplings: Heat 2 tablespoons of oil in a large skillet. Lightly fry the dumplings until the bottoms are golden.',
        'Steam the dumplings: Add 1/3 cup of water, cover with a tight fitting lid and steam the dumplings until the water has cooked away. Uncover and cook for another 2 minutes over medium-low heat.',
        'Serve: Remove from heat and serve your dumplings with soy sauce and thinly sliced green onions.'
    ],
    user_id: 1,
    genre_id: 7,
  },
  {
    recipe_image: 'http://placecage.com/g/200/300',
    recipe_name: 'Lemon garlic butter chicken',
    recipe_ingredients: [
        '6 bone in, skin on or off chicken thighs',
        'Pinch of salt to season',
        'Cracked black pepper',
        '2 teaspoons dried Thyme (or your herbs of choice)',
        '1 tablespoon olive oil',
        '2 tablespoons unsalted butter',
        '6 cloves garlic, crushed (or 1 1/2 tablespoons minced garlic)',
        'Juice of 1 lemon (about 1/3 cup fresh squeezed lemon juice)',
        '1 lemon, thinly sliced',
        '5 fresh thyme sprigs',
        '2-3 bunches of asparagus (about 24 spears), woody ends removed',
    ],
    prep_time: 10,
    cook_time: 40,
    recipe_howto: [
        'Preheat your oven to 200°C | 400° F. Season chicken thighs with salt, pepper and dried thyme.',
        'Heat a large (34 cm or 13-14 inch) cast iron skillet (or heavy based oven-proof pan), over medium-high heat. When the skillet (or pan) is hot, add the oil. Sear the thighs, skin-side down, until skin is golden and crisp (about 4-5 minutes). Flip chicken and sear on the other side for a further 5 minutes.',
        'Melt the butter in the pan. Add the garlic until fragrant (about 30 seconds). Pour in the lemon juice, and sprinkle over fresh thyme leaves from 2 sprigs. Place another 2 sprigs around the chicken.',
        'Transfer skillet (or pan), to the oven and cook for 25-30 minutes, or until completely cooked through. Add the asparagus spears to the pan during the last 12 minutes of cook time.',
        'Garnish with lemon slices and leaves from the remaining sprig of thyme. Serve immediately.'
    ],
    user_id: 2,
    genre_id: 3
  },
  {
    recipe_image: 'http://placecage.com/c/200/300',
    recipe_name: 'French Toast',
    recipe_ingredients: [
       ' 1 teaspoon ground cinnamon',
       '1/4 teaspoon ground nutmeg',
       '2 tablespoons sugar',
       '4 tablespoons butter',
       '4 eggs',
       '1/4 cup milk',
       '1/2 teaspoon vanilla extract',
       '8 slices challah, brioche, or white bread',
       '1/2 cup maple syrup, warmed'
    ],
    prep_time: 20,
    cook_time: 10,
    recipe_howto: [
        'In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.',
        'In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.'
    ],
    user_id: 3,
    genre_id: 1
  },
  {
    recipe_image: 'http://fillmurray.com/200/300',
    recipe_name: 'French Crepes',
    recipe_ingredients: [
        '2 eggs',
        '1/4 cup butter, melted',
        '2 1/2 tbsp sugar',
        '1/2 cup all-purpose flour',
        '1/2 cup milk',
        '1/8 cup water',
        '1/2 tsp vanilla',
        'tiny dash of salt'
    ],
    prep_time: 10,
    cook_time: 10,
    recipe_howto: [
        'Whisk all the ingredients, except the flour, together. Add in the flour, a little bit at a time, whisking just until the flour has been mixed in.',
        'Let the crepe batter rest for 10 minutes. Then, give the batter a quick whisk again before using.',
        'Grease a non-stick, 6" skillet with unsalted butter and heat over medium heat. Pour about 2-3 tablespoons worth of batter into the pan and tip the pan from side to side to get the batter to spread out throughout the pan.',
        'Cook each side of the crepe for 30 seconds before gently loosening up the edges with a large spatula. If it lifts, then the crepe is ready to be flipped. If it does not lift up very well, give it 10 to 15 more seconds and try again. Gently lift the crepe out of the pan, then flip over into the pan and cook the other side for another 10 to 15 seconds; remove to cool.',
        'Once cooled, add fruit and fold into triangle then enjoy!'
    ],
    user_id: 2,
    genre_id: 6
  },
  {
    recipe_image: 'http://placebear.com/200/300',
    recipe_name: 'Spaghetti with meat sauce',
    recipe_ingredients: [
        '1 pound ground beef',
        '1 onion, chopped',
        '4 cloves garlic, minced',
        '1 small green bell pepper, diced',
        '1 (28 ounce) can diced tomatoes',
        '1 (16 ounce) can tomato sauce',
        '1 (6 ounce) can tomato paste',
        '2 teaspoons dried oregano',
        '2 teaspoons dried basil',
        '1 teaspoon salt',
        '1/2 teaspoon black pepper'
    ],
    prep_time: 15,
    cook_time: 70,
    recipe_howto: [
        'Combine ground beef, onion, garlic, and green pepper in a large saucepan. Cook and stir until meat is brown and vegetables are tender. Drain grease.',
        'Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally.',
        'Boil noodles and top with meat sauce'
    ],
    user_id: 1,
    genre_id: 9
  },
  {
    recipe_image: 'http://fillmurray.com/200/300',
    recipe_name: 'Bavarian Pretzel',
    recipe_ingredients: [
        '3/4 cup warm water (100°F to 115°F), plus more as needed',
        '1 (1/4-ounce) envelope active dry yeast (2 1/4 teaspoons)',
        '1 1/2 tablespoons barley malt syrup',
        '4 3/4 cups unbleached bread flour (about 21 3/4 ounces), plus more as needed for dough',
        '3/4 cup lager beer or pilsner beer',
        '3 tablespoons unsalted butter, cubed, at room temperature',
        '1 tablespoon kosher salt',
        'Cooking spray',
        '1/3 cup baking soda',
        '1 large egg, beaten',
        '1 tablespoon whole milk',
        '6 cups tap water, plus more as needed for dough',
        'Flaky sea salt'
    ],
    prep_time: 60,
    cook_time: 15,
    recipe_howto: [
        'Place 3/4 cup warm water in bowl of a stand mixer; sprinkle with yeast. Stir in barley malt syrup until dissolved. Let mixture stand until yeast is foamy, 5 to 7 minutes. Add flour, beer, butter, and kosher salt; using a wooden spoon or rubber spatula, stir until a shaggy dough forms.',
        'Attach bowl and dough hook to stand mixer. Beat on medium-low speed until dough comes together and forms a smooth ball, about 1 minute. Dough should be quite firm and may be slightly tacky but not sticky. If dough is sticky, add flour, 2 tablespoons at a time, and beat until dough is smooth. If dough is too dry, add water, 1 teaspoon at a time, and beat until smooth.',
        'Increase mixer speed to medium-high, and beat until dough is smooth and elastic, 5 to 7 minutes. Transfer dough to a large bowl greased with cooking spray; turn to coat. Cover with plastic wrap, and let dough rise in refrigerator until almost doubled in size, at least 8 hours or up to 24 hours.',
        'While dough rises, preheat oven to 300°F. Spread baking soda in a small glass or ceramic baking dish, and bake in preheated oven 1 hour. Remove from oven, and let cool completely, about 10 minutes. Store cooled baking soda in an airtight container at room temperature until ready to use.',
        'Turn dough out onto an unfloured work surface, and firmly press down to deflate. Cut dough into 8 portions. Working with 1 portion at a time and keeping remaining dough covered, pat dough down with your fingertips to form a 3 1/2- by 5 1/2-inch rectangle. Beginning on one long side, roll dough up tightly, forming a loaf shape; pinch seam together on bottom of loaf.',
        'Shape each loaf into a rope by rolling it against the work surface with your palms, applying mild pressure and working from the center outward. (If you need more friction, moisten work surface with a few drops of water, dispersing it evenly with your hands.) Continue rolling until dough rope is 14 to 16 inches long and begins to shrink back toward middle. Set dough rope aside, and cover. Repeat process with remaining 7 dough pieces.',
        'Line 2 large baking sheets with parchment paper. Return first rolled dough rope to work surface, and continue rolling rope to a length of about 30 inches, leaving middle about 1 inch in diameter and tapering ends by applying a little more pressure as you work your way out. Shape 30-inch dough rope into a U shape, positioning ends of the U pointing away from you. Holding one end in each hand, lift and cross ends over each other about 5 inches down from ends. Cross ends again, passing ends to opposite hands, creating a twist in the dough.',
        'Holding ends and maintaining twist, fold ends toward bottom of U. Allowing for a 1/4 inch overhang on each side, press ends into bottom of U at 4 o’clock and 8 o’clock. Gently transfer shaped pretzel to prepared baking sheet; cover loosely with plastic wrap. Repeat with remaining dough ropes, working in the order in which they were rolled, spacing shaped pretzels 1 inch apart on prepared baking sheets.',
        'Let covered pretzels rise in a warm place until puffy and increased in size by half, 30 to 45 minutes. Meanwhile, preheat oven to 500°F with racks in upper third and lower third positions. Stir together egg and milk; set egg wash aside.',
        'Place baked baking soda in a wide stainless steel (nonreactive) saucepan, and add 6 cups tap water. With range hood vent running on high, bring mixture to a gentle simmer over high, stirring gently to dissolve baking soda. Reduce heat to low, and maintain a very gentle simmer. Using a large skimmer or fish spatula, gently place 1 or 2 pretzels in alkaline water. Cook 20 seconds, carefully flipping after 10 seconds. Using skimmer, lift pretzels from alkaline water, allowing excess to drip off, and transfer to a parchment paper–lined baking sheet, placing at least 1 inch apart. (Pretzels will be wrinkly.)',
        'Wearing rubber gloves, reshape pretzels on baking sheet as needed. Repeat with remaining pretzels. Quickly brush tops and sides of pretzels with egg wash, and sprinkle with flaky sea salt.',
        'Immediately bake pretzels at 500°F until deep mahogany in color, 9 to 12 minutes, rotating pans from front to back and top to bottom halfway through baking time. Transfer pretzels to wire racks, and let cool about 10 minutes before serving.'
    ],
    user_id: 2,
    genre_id: 20
  },
  {
  recipe_image: 'http://fillmurray.com/200/300',
    recipe_name: 'Cajun Crawfish boil',
    recipe_ingredients: [
        '10 pounds crawfish, cleaned and purged',
        '3 gallons water for cooking',
        '3/4 cups fresh squeezed lemon juice',
        '1/2 cup white wine vinegar',
        '1/2 tablespoon Hondashi, optional',
        '1 1/2 cup Zatarain’s Pro Boil, plus plenty more for serving',
        '3/4 cups kosher salt or more if needed',
        '2 1/2 pounds small red potatoes',
        '2 medium onions, peeled and halved lengthwise',
        '2 bay leaves',
        '2 ears of corn, shucked and broken in half',
        '3/4 cups peeled whole garlic cloves',
        '3/4 pounds hot smoked sausage, cut into 3 to 4 inch links'
    ],
    prep_time: 30,
    cook_time: 120,
    recipe_howto: [
        'In the large crawfish pot, bring 3 gallons water to boil over a propane burner set to high.',
        'Meanwhile, in a large bowl, combine the lemon juice, vinegar, and, if using, Hondashi. You’ll mix this with the cooked crawfish before you serve them.',
        'In another small bowl, combine 2 cups of the lemon vinegar with 1 teaspoon from those 3/4 cups of boil spice and set aside; this is your Super Sauce to serve alongside the boiled crawfish.',
        'Once the water is boiling, add the salt and 3 cups of the boil spice. Taste the water to make sure it’s as salty as seawater. If it’s not, add more salt.',
        'Add the potatoes, onions, and bay leaves to the crawfish pot basket. Boil until the potatoes begin to soften, 10 to 13 minutes.',
        'Add the corn, garlic, and sausage. Cook until the potatoes are fork-tender, 7 to 10 more minutes. Once the potatoes are done, the rest will also be done, 17 to 23 minutes in total.',
        'Remove the vegetables from the basket, put them in a small container to keep warm.',
        'Bring that water in the crawfish pot back to a boil.',
        'Put the crawfish in the basket and submerge them in the boiling water. Cook for 7 to 8 minutes.',
        'The crawfish will become bright red and their tails will curl. Fish one out of the pot to see if the batch is ready. Remove the crawfish from the boiling water.',
        'Pour 1/3 of the crawfish back into the clean, unused large cooler, cover with the remaining boil spice, and drizzle evenly with one-third of the lemon vinegar mixture (the one with no spice).',
        'Repeat until all the crawfish are in the cooler. Close the lid. Give the cooler a few violent shakes.',
        'Transfer the cooked vegetables from the small container to the crawfish cooler and close the lid.',
        'After 5 minutes, give another violent shake. Repeat every 5 minutes for 20 minutes total. Cover a communal table with newspaper.',
        'Divide the lemon-vinegar-and-spice Super Sauce into little bowls and scatter them around the table for use as a dipping sauce.',
        'Place a mound of the boil spice at each person’s spot for them to swipe peeled tails through.',
        'Then pour the crawfish out onto the newspaper and let people belly up.'
    ],
    user_id: 2,
    genre_id: 6
},
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;