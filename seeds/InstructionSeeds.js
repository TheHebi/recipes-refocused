const Instruction = require('../models/Instruction.js');


const instructionData = [
    
    {
        instruction: 'In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.',
        local_step_number: 1,
        RecipeId: 1,
    },
    {
        instruction: 'In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg mixture. Fry slices until golden brown, then flip to cook the other side. Serve with syrup.',
        local_step_number: 2,
        RecipeId: 1
    },
    {
        instruction: 'Whisk all the ingredients, except the flour, together. Add in the flour, a little bit at a time, whisking just until the flour has been mixed in.',
        local_step_number: 1,
        RecipeId: 2
    },
    {
        instruction: 'Let the crepe batter rest for 10 minutes. Then, give the batter a quick whisk again before using.',
        local_step_number: 2,
        RecipeId: 2
    },
    {
        instruction: 'Grease a non-stick, 6" skillet with unsalted butter and heat over medium heat. Pour about 2-3 tablespoons worth of batter into the pan and tip the pan from side to side to get the batter to spread out throughout the pan.',
        local_step_number: 3,
        RecipeId: 2
    },
    {
        instruction: 'Cook each side of the crepe for 30 seconds before gently loosening up the edges with a large spatula. If it lifts, then the crepe is ready to be flipped. If it does not lift up very well, give it 10 to 15 more seconds and try again. Gently lift the crepe out of the pan, then flip over into the pan and cook the other side for another 10 to 15 seconds; remove to cool.',
        local_step_number: 4,
        RecipeId: 2
    },
    {
        instruction: 'Once cooled, add fruit and fold into triangle then enjoy!',
        local_step_number: 5,
        RecipeId: 2
    },
    {
        instruction: 'Combine ground beef, onion, garlic, and green pepper in a large saucepan. Cook and stir until meat is brown and vegetables are tender. Drain grease.',
        local_step_number: 1,
        RecipeId: 3
    },
    {
        instruction: 'Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally.',
        local_step_number: 2,
        RecipeId: 3
    },
    {
        instruction: 'Boil noodles and top with meat sauce',
        local_step_number: 3,
        RecipeId: 3
    },
    {
        instruction: 'Place 3/4 cup warm water in bowl of a stand mixer; sprinkle with yeast. Stir in barley malt syrup until dissolved. Let mixture stand until yeast is foamy, 5 to 7 minutes. Add flour, beer, butter, and kosher salt; using a wooden spoon or rubber spatula, stir until a shaggy dough forms.',
        local_step_number: 1,
        RecipeId: 4
    },
    {
        instruction: 'Attach bowl and dough hook to stand mixer. Beat on medium-low speed until dough comes together and forms a smooth ball, about 1 minute. Dough should be quite firm and may be slightly tacky but not sticky. If dough is sticky, add flour, 2 tablespoons at a time, and beat until dough is smooth. If dough is too dry, add water, 1 teaspoon at a time, and beat until smooth.',
        local_step_number: 2,
        RecipeId: 4
    },
    {
        instruction: 'Increase mixer speed to medium-high, and beat until dough is smooth and elastic, 5 to 7 minutes. Transfer dough to a large bowl greased with cooking spray; turn to coat. Cover with plastic wrap, and let dough rise in refrigerator until almost doubled in size, at least 8 hours or up to 24 hours.',
        local_step_number: 3,
        RecipeId: 4
    },
    {
        instruction: 'While dough rises, preheat oven to 300°F. Spread baking soda in a small glass or ceramic baking dish, and bake in preheated oven 1 hour. Remove from oven, and let cool completely, about 10 minutes. Store cooled baking soda in an airtight container at room temperature until ready to use.',
        local_step_number: 4,
        RecipeId: 4
    },
    {
        instruction: 'Turn dough out onto an unfloured work surface, and firmly press down to deflate. Cut dough into 8 portions. Working with 1 portion at a time and keeping remaining dough covered, pat dough down with your fingertips to form a 3 1/2- by 5 1/2-inch rectangle. Beginning on one long side, roll dough up tightly, forming a loaf shape; pinch seam together on bottom of loaf.',
        local_step_number: 5,
        RecipeId: 4
    },
    {
        instruction: 'Shape each loaf into a rope by rolling it against the work surface with your palms, applying mild pressure and working from the center outward. (If you need more friction, moisten work surface with a few drops of water, dispersing it evenly with your hands.) Continue rolling until dough rope is 14 to 16 inches long and begins to shrink back toward middle. Set dough rope aside, and cover. Repeat process with remaining 7 dough pieces.',
        local_step_number: 6,
        RecipeId: 4
    },
    {
        instruction: 'Line 2 large baking sheets with parchment paper. Return first rolled dough rope to work surface, and continue rolling rope to a length of about 30 inches, leaving middle about 1 inch in diameter and tapering ends by applying a little more pressure as you work your way out. Shape 30-inch dough rope into a U shape, positioning ends of the U pointing away from you. Holding one end in each hand, lift and cross ends over each other about 5 inches down from ends. Cross ends again, passing ends to opposite hands, creating a twist in the dough.',
        local_step_number: 7,
        RecipeId: 4
    },
    {
        instruction: 'Holding ends and maintaining twist, fold ends toward bottom of U. Allowing for a 1/4 inch overhang on each side, press ends into bottom of U at 4 o’clock and 8 o’clock. Gently transfer shaped pretzel to prepared baking sheet; cover loosely with plastic wrap. Repeat with remaining dough ropes, working in the order in which they were rolled, spacing shaped pretzels 1 inch apart on prepared baking sheets.',
        local_step_number: 8,
        RecipeId: 4
    },
    {
        instruction: 'Let covered pretzels rise in a warm place until puffy and increased in size by half, 30 to 45 minutes. Meanwhile, preheat oven to 500°F with racks in upper third and lower third positions. Stir together egg and milk; set egg wash aside.',
        local_step_number: 9,
        RecipeId: 4
    },
    {
        instruction: 'Place baked baking soda in a wide stainless steel (nonreactive) saucepan, and add 6 cups tap water. With range hood vent running on high, bring mixture to a gentle simmer over high, stirring gently to dissolve baking soda. Reduce heat to low, and maintain a very gentle simmer. Using a large skimmer or fish spatula, gently place 1 or 2 pretzels in alkaline water. Cook 20 seconds, carefully flipping after 10 seconds. Using skimmer, lift pretzels from alkaline water, allowing excess to drip off, and transfer to a parchment paper–lined baking sheet, placing at least 1 inch apart. (Pretzels will be wrinkly.)',
        local_step_number: 10,
        RecipeId: 4
    },
    {
        instruction: 'Wearing rubber gloves, reshape pretzels on baking sheet as needed. Repeat with remaining pretzels. Quickly brush tops and sides of pretzels with egg wash, and sprinkle with flaky sea salt.',
        local_step_number: 11,
        RecipeId: 4
    },
    {
        instruction: 'Immediately bake pretzels at 500°F until deep mahogany in color, 9 to 12 minutes, rotating pans from front to back and top to bottom halfway through baking time. Transfer pretzels to wire racks, and let cool about 10 minutes before serving.',
        local_step_number: 12,
        RecipeId: 4
    },
    {
        instruction: 'In the large crawfish pot, bring 3 gallons water to boil over a propane burner set to high.',
        local_step_number: 1,
        RecipeId: 5
    },
    {
        instruction: 'Meanwhile, in a large bowl, combine the lemon juice, vinegar, and, if using, Hondashi. You’ll mix this with the cooked crawfish before you serve them.',
        local_step_number: 2,
        RecipeId: 5
    },
    {
        instruction: 'In another small bowl, combine 2 cups of the lemon vinegar with 1 teaspoon from those 3/4 cups of boil spice and set aside; this is your Super Sauce to serve alongside the boiled crawfish.',
        local_step_number: 3,
        RecipeId: 5
    },
    {
        instruction: 'Once the water is boiling, add the salt and 3 cups of the boil spice. Taste the water to make sure it’s as salty as seawater. If it’s not, add more salt.',
        local_step_number: 4,
        RecipeId: 5
    },
    {
        instruction: 'Add the potatoes, onions, and bay leaves to the crawfish pot basket. Boil until the potatoes begin to soften, 10 to 13 minutes.',
        local_step_number: 5,
        RecipeId: 5
    },
    {
        instruction: 'Add the corn, garlic, and sausage. Cook until the potatoes are fork-tender, 7 to 10 more minutes. Once the potatoes are done, the rest will also be done, 17 to 23 minutes in total.',
        local_step_number: 6,
        RecipeId: 5
    },
    {
        instruction: 'Remove the vegetables from the basket, put them in a small container to keep warm.',
        local_step_number: 7,
        RecipeId: 5
    },
    {
        instruction: 'Bring that water in the crawfish pot back to a boil.',
        local_step_number: 8,
        RecipeId: 5
    },
    {
        instruction: 'Put the crawfish in the basket and submerge them in the boiling water. Cook for 7 to 8 minutes.',
        local_step_number: 9,
        RecipeId: 5
    },
    {
        instruction: 'The crawfish will become bright red and their tails will curl. Fish one out of the pot to see if the batch is ready. Remove the crawfish from the boiling water.',
        local_step_number: 10,
        RecipeId: 5
    },
    {
        instruction: 'Pour 1/3 of the crawfish back into the clean, unused large cooler, cover with the remaining boil spice, and drizzle evenly with one-third of the lemon vinegar mixture (the one with no spice).',
        local_step_number: 11,
        RecipeId: 5
    },
    {
        instruction: 'Repeat until all the crawfish are in the cooler. Close the lid. Give the cooler a few violent shakes.',
        local_step_number: 12,
        RecipeId: 5
    },
    {
        instruction: 'Transfer the cooked vegetables from the small container to the crawfish cooler and close the lid.',
        local_step_number: 13,
        RecipeId: 5
    },
    {
        instruction: 'After 5 minutes, give another violent shake. Repeat every 5 minutes for 20 minutes total. Cover a communal table with newspaper.',
        local_step_number: 14,
        RecipeId: 5
    },
    {
        instruction: 'Divide the lemon-vinegar-and-spice Super Sauce into little bowls and scatter them around the table for use as a dipping sauce.',
        local_step_number: 15,
        RecipeId: 5
    },
    {
        instruction: 'Place a mound of the boil spice at each person’s spot for them to swipe peeled tails through.',
        local_step_number: 16,
        RecipeId: 5
    },
    {
        instruction: 'Then pour the crawfish out onto the newspaper and let people belly up.',
        local_step_number: 17,
        RecipeId: 5
    },      
];

const instructionSeeds = () => Instruction.bulkCreate(instructionData);

module.exports = instructionSeeds;