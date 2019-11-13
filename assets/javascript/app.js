  database = firebase.database;

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
        rec_carbs: 3 * this.weight,
        rec_prots: 1.5 * this.weight,
        rec_fats: 0.45 * this.weight,
        diet: 'high-carb',
        activity_factor: 1.9,
      },
      {
        id: 'active',
        rec_carbs: 2 * this.weight,
        rec_prots: 1.1 * this.weight,
        rec_fats: 0.4 * this.weight,
        diet: 'high-protein',
        activity_factor: 1.725,
      },
      {
        id: 'sedentary',
        rec_carbs: 0.9 * this.weight,
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
    userFoodPref = []
    $('input:checkbox:checked').each(function () {
      userFoodPref.push($(this).val());
    });
    $('#GFG_DOWN').text(userFoodPref);
    console.log(userFoodPref)

    // Create a function that performs an API call for the BMR 

      userShape.height = parseInt($('#height-input').val());
      userShape.weight = parseInt($('#weight-input').val());
      userShape.target_weight = parseInt($('#target-weight-input').val());
      goal_weight_diff = userShape.weight - userShape.target_weight;
      dob = $('#dob-input').val();
      userShape.age = Math.abs(moment().diff(dob, 'years'));
      userShape.gender = toString($('#gender-input').val());

      for (let i = 0; i < userShape.types.length; i++) {
        const typeDiet = userShape.types[i].diet;
        const typeId = userShape.types[i].id;
        const typeActivity = userShape.types[i].activity_factor;
        let userExercise = $('.form-check-exercise').val()

          if (userExercise === "Do not exercise") {
            
          }
          else if (userExercise === "1-2 days") {
            
          }
          else if (userExercise === "3-5 days") {
           
          }
          else if (userExercise === "6-7 days") {
            
          }
          else if (userExercise === "7 days") {
            
          }
        }
      

      let bmr, daily_intake_cals
      if (userShape.gender === "Male") {
        bmr = 655 + (4.35 * userShape.weight) + (4.7 * userShape.height) - (4.7 * userShape.age);
        daily_intake_cals = parseFloat(bmr * typeActivity);
      } else {
        bmr = 66 + (6.23 * userShape.weight) + (12.7 * userShape.height) - (6.8 * userShape.age);
        daily_intake_cals = parseFloat(bmr * typeActivity);
      } 
      
    
      const bmi = parseFloat((userShape.weight / (userShape.height * userShape.height)) * 703).toFixed(1);

      if (bmi < 18.5) {
        typeId = 'underweight'
      } else if (bmi >= 18.5) {
        typeId = 'active'
      } else if (bmi >= 25) {
        typeId = 'sedentary'
      } else if (bmi >= 30) {
        typeId = 'overweight'
      } else if (bmi >= 35) {
        typeId = 'obese'
      }

      const female_body_fat = (163.205 * Math.log10(userShape.hip + userShape.hip - userShape.neck)) - (97.684 * Math.log10(userShape.height)) - 78.387
      const male_body_fat = (86.010 * Math.log10(userShape.waist - userShape.neck)) - (70.041 * Math.log10(userShape.height)) + 36.76

      if (userShape.gender === 'Female') {
        let fatEl = $('<p>').text(`${female_body_fat}%`);
        bodyfatDiv = $("<div class= 'body-fat'>").append(fatEl);
        $('.health-info').append('.body-fat');
      } else if (userShape.gender === 'Male') {
        let fatEl = $('<p>').text(`${male_body_fat}%`);
        bodyfatDiv = $("<div class= 'body-fat'>").append(fatEl);
        $('.health-info').append('.body-fat');
      }
      displayNutritionInfo(typeDiet, daily_intake_cals)
    });

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

        const dietChoiceButton = $("<button class='diet'>");
        //Storing the recipe name, calories, image 
        const label = results[i].recipe.label;
        const fat = parseInt(results[i].recipe.totalNutrients.FAT * single_serving) + "g";
        const carb = parseInt(results[i].recipe.totalNutrients.CHOCDF * single_serving) + "g";
        const protein = parseInt(results[i].recipe.totalNutrients.FAT * single_serving) + "g";
        const calories = parseInt(results[i].recipe.calories * single_serving);
        
        const recipeImgURL = results[i].recipe.image;
        
        // Creating an element to have the label, calories, image displayed

        const labEl = $("<p>").text(label);
        const caloriesEl = $("<p>").text(calories);
        const fatEl = $("<p>").text(fat);

        const img = $("<img>").attr("src", recipeImgURL).addClass("recipeImage");

        // Retrieving the image for the 
        dietChoiceButton.append(labEl, caloriesEl, fatEl, img);

        // Putting the entire gif above the previous gifs
        $("#breakfast").append(dietChoiceButton);

        $(".diet").on("click", function (e) {

        });
      }
    });
  };

  // Adding food item from the textbox to our array
  // foodGroupItem.push(checkedItem);

  // Calling renderButtons which handles the processing of our foodGroupItem array






  // // // YouTube API 

  // function displayVideoInfo() {

  //   const  queryURL =
  //     `https://www.googleapis.com/youtube/v3/search`;

  //   // Creating an AJAX call for the specific gif button being clicked
  //   $.ajax({
  //       cache: false,
  //          data: $.extend({
  //              key: 'AIzaSyC6r69qVvSp98MRD3JJcud6fxaN20gi6ls',
  //              q: $('').val(),
  //              part: 'snippet'
  //          }, {
  //              maxResults: 20,
  //              pageToken: $("#pageToken").val()
  //          }),
  //          dataType: 'json',
  //          method: 'GET',
  //          timeout: 5000,
  //          url: queryURL,
  //      }).done(function(data) {
  //          $('.btn-group').show();
  //          if (typeof data.prevPageToken === "undefined") {
  //              $("#pageTokenPrev").hide();
  //          } else {
  //              $("#pageTokenPrev").show();
  //          }
  //          if (typeof data.nextPageToken === "undefined") {
  //              $("#pageTokenNext").hide();
  //          } else {
  //              $("#pageTokenNext").show();
  //          }
  //          var items = data.items,
  //              videoList = "";
  //          $("#pageTokenNext").val(data.nextPageToken);
  //          $("#pageTokenPrev").val(data.prevPageToken);
  //          $.each(items, function(index, e) {
  //              videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="' + e.snippet.title + '"><span class="title">' + e.snippet.title + '</span><span class="stat attribution">by <span>' + e.snippet.channelTitle + '</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="' + e.snippet.title + '" src="' + e.snippet.thumbnails.default.url + '" width="120" height="90"></span></a></div></li>';
  //          });
  //          $("#hyv-watch-related").html(videoList);
  //          // JSON Responce to display for user 	 
  //          new PrettyJSON.view.Node({
  //              el: $(".hyv-watch-sidebar-body"),
  //              data: data
  //          });
  //      });
  //      console.log(queryURL);
  //     // Creating a div to hold the diet information
  //     }

  //