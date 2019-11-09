 // Create objects for each body type 

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
    {   id: 'active',
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

  // displayNutritionInfo function re-renders the HTML to display the appropriate content
  function displayNutritionInfo() {

    const foodGroupItem = [];
    for (i=0; i<userShape.types[i].length; i++) {
        typeDiet = userShape.types.diet;
        typeId = userShape.types.id; 
        console.log(typeDiet);
    }
    const  queryURL =
      `https://api.edamam.com/search?q=${foodGroupItem}&diet=${diet}&app_id=72b0f0df`;
    console.log(queryURL);
    // Creating an AJAX call for the specific gif button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      const results = response.hits;

      // Creating a div to hold the diet information
     
      for (let i = 0; i < results.length; i++) {
      const dietDiv = $("<div class='diet'>");
      //Storing the recipe name, calories, image 
      const label = results[i].recipe.label; 
      const calories = results[i].recipe.calories;
      const imageURL = results[i].recipe.image;

      // Creating an element to have the label, calories, image displayed
      const labEl = $("<p>").text(label);
      const caloriesEl = $("<p>").text(parseInt(calories)); 
      const img = $("<img>").addClass("recipeImg");

       // Retrieving the image for the 
      dietDiv.append(labEl,caloriesEl,img);

      // Putting the entire gif above the previous gifs
      $("#recipe-view").prepend(dietDiv);
      
    };
  });
  };
$(document).on("click",".diet",function () {
     
    });

  // This function handles events where a foodGroupItem box is checked
  $("#add-foodGroupItem").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    const checkedItem = $("#checkbox-foodItem").val().trim();

    // Adding food item from the textbox to our array
    foodGroupItem.push(checkedItem);

    // Calling renderButtons which handles the processing of our foodGroupItem array
    renderButtons();
  });

  // Adding a click event listener to all elements with a class of "gif-btn"
  $(document).on("click", ".diet", displayNutritionInfo);



bodyIndex = {

   // Create a function that performs an API call for the BMR 
   displaybmrInfo = function() {
    
    const userHeight = parseInt($(this).attr("data-height"));
    const userWeight = parseInt($(this).attr("data-weight"));
    const userAge =  pareInt($(this).attr("data-age"));
    const userGender =  toString($(this).attr("data-gender"));
    
    const queryURL =
      `https://urvipaithankar.herokuapp.com/bmr/index.php/${userHeight}/${userWeight}/${userAge}/${userGender}`;
    console.log(queryURL);
    // Creating an AJAX call for the specific gif button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      const results = response.data;
    });
    
  },

  bodyFatCalculator = function() {
    const bodyCF = []; 
    female_body_fat =[163.205*Math.log10(waist + hip - neck)] - [97.684 * Math.log10(height)] - 78.387
    male_body_fat = [86.010*Math.log10(waist - neck)] - [70.041 * Math.log10(height)] + 36.76
  }
};