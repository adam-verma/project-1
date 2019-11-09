// Pull info from Edamam API Key pertaining to diets
// Diets should be specific to body requirements 
// Develop a body calculator that determines bmr, rmr, activity level, caloric deficit, macros, 
// Set a realistic goal 
// BMR (Basal metabolic rate = # of cals needed just for body to function)

userShape = { 
    height,
    weight,
    age,
    gender,
    types: [
    {   id: 'athlete',
        rec_carbs: 3*weight,
        rec_prots: 1.5*weight,
        rec_fats: 0.45*weight,
        diet: balanced,
    },
    {   id: 'active'
        rec_carbs: 2*weight,
        rec_prots: 1.1*weight,
        rec_fats: 0.4*weight,
        diet: high-protein,
    },
    {   id: 'sedentary',
        rec_carbs: 0.9*weight,
        rec_prots: 0.7*weight,
        rec_fats: 0.4*weight,
        diet: low-carb,
    },
    {   id: 'overweight',
        rec_carbs: 0.7*weight,
        rec_prots: 0.7*weight,
        rec_fats: 0.3*weight,
        diet: low-fat,
    },
    {   id: 'obese',
        rec_carbs: 0.5*weight,
        rec_prots: 0.5*weight,
        rec_fats: 0.25*weight,
        diet: low-fat,
    }]
};

function displayNutritionInfo() {

    const foodGroupItem = $(this).attr("data-name");
    for (i=0; i<userShape.types[i].length; i++) {
        typeDiet = userShape.types.diet;
        console.log(typeDiet);
    }
};
return displayNutritionInfo();