// Create global variables of user info references
let database = firebase.database();
let userInfo = database.ref();

// Create objects for each body type 
const userShape = {
  height: 0,
  weight: 0,
  target_weight: 0,
  waist: 0,
  neck: 0,
  hip: 0,
  age: 0,
  gender: '',
  types: [{
      id: 'athletic',
      rec_carbs: parseInt(3 * this.weight),
      rec_prots: parseInt(1.5 * this.weight),
      rec_fats: parseInt(0.45 * this.weight),
      diet: 'high-carb',
      activity_factor: 1.9,
    },
    {
      id: 'active',
      rec_carbs: parseInt(2 * this.weight),
      rec_prots: parseInt(1.1 * this.weight),
      rec_fats: parseInt(0.4 * this.weight),
      diet: 'high-protein',
      activity_factor: 1.725,
    },
    {
      id: 'sedentary',
      rec_carbs: parseInt(0.9 * this.weight),
      rec_prots: 0.7 * this.weight,
      rec_fats: 0.4 * this.weight,
      diet: 'balanced',
      activity_factor: 1.35,
    },
    {
      id: 'overweight',
      rec_carbs: 0.7 * this.weight,
      rec_prots: 0.7 * this.weight,
      rec_fats: 0.3 * this.weight,
      diet: 'low-fat',
      activity_factor: 1.2,
    },
    {
      id: 'obese',
      rec_carbs: 0.5 * this.weight,
      rec_prots: 0.5 * this.weight,
      rec_fats: 0.25 * this.weight,
      diet: 'low-carb',
      activity_factor: 1.1,
    }
  ]
};

// // This function handles events where a foodGroupItem box is checked
$("#submit-question").on("click", function (event) {
  event.preventDefault();

  breakfastMeat = $('input[name="breakfast-meat"]:checked').val();
  breakfastSupp = $('input[name="breakfast-supp"]:checked').val();
  lunchMeat = $('input[name="lunch-meat"]:checked').val();
  lunchSupp = $('input[name="breakfast-supp"]:checked').val();
  lunch = `${lunchMeat}%20${lunchSupp}` 
  dinnerMeat = $('input[name="dinner-meat"]:checked').val();
  dinnerSupp = $('input[name="breakfast-supp"]:checked').val();
  dinner = `${dinnerMeat}%20${dinnerSupp}` 
  
  // Write variables pertaining to values from HTML selectors 
  userShape.height = parseInt($("#height-input").val().trim());
  userShape.weight = parseInt($('#weight-input').val().trim());
  userShape.target_weight = parseInt($('#target-weight-input').val());
  userShape.hip = parseInt($("#hip-input").val().trim());
  userShape.neck = parseInt($("#neck-input").val().trim());
  userShape.waist = parseInt($("#waist-input").val().trim());
  userShape.target_weight = parseInt($("#target-weight-input").val().trim());
  const goal_weight_diff = userShape.weight - userShape.target_weight;
  const daysInMonth = moment().daysInMonth();
  const daily_weightLoss = goal_weight_diff / daysInMonth;
  const dob = $('#dob-input').val();
  userShape.age = Math.abs(moment().diff(dob, 'years'));
  userShape.gender = $('#gender-input').val().toString();
  const userExercise = $('input[name="form-radio-exercise"]:checked').val();
  console.log(userShape.gender)
  let bmr, body_fat, daily_intake_cals, typeDiet, typeId;

  if (userShape.gender === 'Male') {
    body_fat = (86.010 * Math.log10(userShape.waist - userShape.neck)) - (70.041 * Math.log10(userShape.height)) + 36.76
    bmr = 655 + (4.35 * userShape.weight) + (4.7 * userShape.height) - (4.7 * userShape.age);
    if (userExercise === "Do not exercise") {
      daily_intake_cals = parseFloat(bmr * userShape.types[4].activity_factor);
      console.log(daily_intake_cals);
    } else if (userExercise === "1-2 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[3].activity_factor);
    } else if (userExercise === "3-5 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[2].activity_factor);
    } else if (userExercise === "6-7 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[1].activity_factor);
    } else if (userExercise === "7 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[0].activity_factor);
    }

  } else if (userShape.gender === 'Female') {
    body_fat = (163.205 * Math.log10(userShape.waist + userShape.hip - userShape.neck)) - (97.684 * Math.log10(userShape.height)) - 78.387
    console.log(body_fat)
    bmr = 66 + (6.23 * userShape.weight) + (12.7 * userShape.height) - (6.8 * userShape.age);
    if (userExercise === "Do not exercise") {
      daily_intake_cals = parseFloat(bmr * userShape.types[4].activity_factor);
    } else if (userExercise === "1-2 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[3].activity_factor);
    } else if (userExercise === "3-5 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[2].activity_factor);
    } else if (userExercise === "6-7 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[1].activity_factor);
    } else if (userExercise === "7 days") {
      daily_intake_cals = parseFloat(bmr * userShape.types[0].activity_factor);
    }
  }
  const bmi = parseFloat((userShape.weight / (userShape.height * userShape.height)) * 703).toFixed(1);

  if (bmi < 18.5) {
    typeId = userShape.types[0].id;
    typeDiet = userShape.types[0].diet;
  } else if (bmi >= 18.5) {
    typeId = userShape.types[1].id;
    typeDiet = userShape.types[1].diet;
  } else if (bmi >= 25) {
    typeId = userShape.types[2].id;
    typeDiet = userShape.types[2].diet;
  } else if (bmi >= 30) {
    typeId = userShape.types[3].id;
    typeDiet = userShape.types[3].diet;
  } else if (bmi >= 35) {
    typeId = userShape.types[4].id;
    typeDiet = userShape.types[4].diet;
  }

  userInfo.push({
    bmi: bmi,
    bmr: bmr,
    body_fat: body_fat,
    daily_intake_cals: daily_intake_cals,
    goal_weight_diff: goal_weight_diff,
    typeId: typeId,
    typeDiet, typeDiet,
  })

  displayNutritionInfo(daily_intake_cals,typeDiet)

  window.open('finalizeddietplanpage.html');
});
userInfo.on('value', function (snap) {
  let data = snap.val();
  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    let bmi = data[k].bmi;
    let bmr = data[k].bmr;
    let body_fat = data[k].body_fat;
    let daily_intake_cals = data[k].daily_intake_cals;
    let goal_weight_diff = data[k].goal_weight_diff;
    let typeDiet = data[k].typeDiet;
    let typeId = data[k].typeId;
  
    appendUserData(bmi,bmr,body_fat,daily_intake_cals,goal_weight_diff,typeId,typeDiet,breakfast,lunch,dinner)
  };
});

function appendUserData(bmi,bmr,body_fat,daily_intake_cals,goal_weight_diff,typeId,typeDiet,breakfast,lunch,dinner) {
  
  let bmiEl = $('<p>').text(`Currently, based on your Body Mass Index of ${bmi} you are a(n) ${typeId} type`);
  let fatEl = $('<p>').text(`${body_fat}%`);

  bodyfatDiv = $("<div class= 'body-fat'>").append(fatEl);
  bmiDiv = $("<div class= 'body-fat'>").append(bmiEl);
  $('.health-info').append(bmiDiv,bodyfatDiv);
}
// displayNutritionInfo function re-renders the HTML to display the appropriate content
function displayNutritionInfo(typeDiet, foodGroupItem, daily_intake_cals) {
  console.log(typeDiet, daily_intake_cals);
  const queryURL =
    `https://api.edamam.com/search?q=${foodGroupItem}&diet=${typeDiet}&app_id=72b0f0df`;

  // Creating an AJAX call for the specific gif button being clicked
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    const results = response.hits;
    // Creating a div to hold the diet information
    for (let i = 0; i < results.length; i++) {
      const single_serving = parseFloat(1 / parseInt(results[i].recipe.yield)).toFixed(2);
      const calories = parseInt(results[i].recipe.calories * single_serving);

      // Compare daily intake to calories per recipe 
      if (daily_intake_cals - 500 > calories) {
      const dietChoiceButton = $("<button class='diet'>");
      //Storing the recipe name, calories, image 

      const label = results[i].recipe.label;
      const fat = parseInt(results[i].recipe.totalNutrients.FAT * single_serving) + "g";
      const carb = parseInt(results[i].recipe.totalNutrients.CHOCDF * single_serving) + "g";
      const protein = parseInt(results[i].recipe.totalNutrients.FAT * single_serving) + "g";
      
      const recipeImgURL = results[i].recipe.image;
        // Creating an element to have the label, calories, image displayed

        const labEl = $("<p>").text(label);
        const caloriesEl = $("<p>").text(calories);
        const fatEl = $("<p>").text(fat);
        const img = $("<img>").attr("src", recipeImgURL).addClass("recipeImage");

        // Putting the entire gif above the previous gifs
        $("#breakfast").append(dietChoiceButton);

        $(".diet").on("click", function (e) {
          $('.recipe-info-body').append(img,labEl, caloriesEl, fatEl)
        });
      }
    }
  });
};