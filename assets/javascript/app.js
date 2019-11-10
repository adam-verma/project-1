database = firebase.database; 

//sign up
const signupForm = $('.input-form-signin');
signupForm.on('click','#submit-button',function(event) {
  event.preventDefault; 

  // get User info
  const email = signupForm['#input-email'].val(); 
  const password = signupForm['#input-email'].val(); 

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);

  })
})

// create a listener for chosen foodgroupItems input to push to 

// Create objects for each body type 

userShape = { 
    height: 0,
    weight: 50,
    age: 0,
    gender: '',
    types: [
    {   id: 'athlete',
        rec_carbs: 3*this.weight,
        rec_prots: 1.5*this.weight,
        rec_fats: 0.45*this.weight,
        diet: 'balanced',
    },
    {   id: 'active',
        rec_carbs: 2*this.weight,
        rec_prots: 1.1*this.weight,
        rec_fats: 0.4*this.weight,
        diet: 'high-protein',
    },
    {   id: 'sedentary',
        rec_carbs: 0.9*this.weight,
        rec_prots: 0.7*this.weight,
        rec_fats: 0.4*this.weight,
        diet: 'low-carb',
    },
    {   id: 'overweight',
        rec_carbs: 0.7*this.weight,
        rec_prots: 0.7*this.weight,
        rec_fats: 0.3*this.weight,
        diet: 'low-fat',
    },
    {   id: 'obese',
        rec_carbs: 0.5*this.weight,
        rec_prots: 0.5*this.weight,
        rec_fats: 0.25*this.weight,
        diet: 'low-fat',
    }]
};

  // displayNutritionInfo function re-renders the HTML to display the appropriate content
  function displayNutritionInfo() {

    const foodGroupItem = ['chicken'];
    for (let i=0; i<userShape.types.length; i++) {
        typeDiet = userShape.types[i].diet;
        typeId = userShape.types[i].id; 
        console.log(typeDiet);
    
    const  queryURL =
      `https://api.edamam.com/search?q=${foodGroupItem}&diet=${typeDiet}&app_id=72b0f0df`;
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
      }
    });
  };
}

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
    
    bmrFormula = {
    const gender: '',
    female_bmr: 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age),

    male_bmr: 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age),
   };

   bmiFormula = (weight / (height * height)) * 703;

  bodyFatCalculator = function() {
    const bodyCF = []; 
    female_body_fat =[163.205*Math.log10(waist + hip - neck)] - [97.684 * Math.log10(height)] - 78.387
    male_body_fat = [86.010*Math.log10(waist - neck)] - [70.041 * Math.log10(height)] + 36.76
  }
}
}

  var firebaseConfig = {
    apiKey: "AIzaSyAM5HFiBF7iP96i-T_Z5q77Ijwj5FASDR0",
    authDomain: "nutritfit-a2eef.firebaseapp.com",
    databaseURL: "https://nutritfit-a2eef.firebaseio.com",
    projectId: "nutritfit-a2eef",
    storageBucket: "nutritfit-a2eef.appspot.com",
    messagingSenderId: "646248193448",
    appId: "1:646248193448:web:199e0f3fc21f1ec13f519d",
    measurementId: "G-KYQ1YX7K38"
  };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     function signup () {
      let email = $("#userEmail").val().trim();
      let password = $("#password").val().trim();
      
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
  });
  
};

$("#signup-button").on("click",signup);
