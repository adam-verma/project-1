//F I R E B A S E ---------------------------
//setting up the basics for firebase usage 

const database = firebase.database();
const caloricIntake = 0;
//   const caloricIntakeMax = (this amount will depend on the user's information provided)
const exerciseAmount = 0;
let calories = 0;
let exercise = 0;



//  F U N C T I O N 1 ------------------------------------
//this function is to grab the user's input and add it onto firebase database 
$("#log-stats-button").on("click", function (event) {
  event.preventDefault();


  let dailyCalories = parseInt($("#input-calories").val().trim());
  let dailyExercise = parseInt($("#input-exercise").val().trim());

  console.log(dailyCalories);
  console.log(dailyExercise);

  //save the variables in firebase
  database.ref().push({
    dailyConsumedCalories: dailyCalories,
    dailyExerciseAmount: dailyExercise
  });



  // getting info from firebase and logging it into the graph 
  var ref = database.ref("dailyConsumedCalories");
  database.ref().on("value", gotData, errData);

  function gotData(data) {
    // console.log(data.val());
    var data = data.val();
    var keys = Object.keys(data);
    console.log(keys); //this gives an array of all the keys in that object 

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      let caloriesU = data[k].dailyConsumedCalories;
      let exerciseU = data[k].dailyExerciseAmount;
      calories = caloriesU;
      exercise = exerciseU;
      drawDualY(caloriesU, exerciseU)
      console.log(calories);
      console.log(exercise);
    };

  }

  function errData(err) {
    console.log("error!");
    console.log(err);
  }


});


let keepCalories = 0;
let keepExercise = 0;

// adding inputs to keep track 
$("#log-stats-button").on("click", function (e, checkInp) {
  e.preventDefault();

  keepCalories += parseInt($("#input-calories").val().trim());
  keepExercise += parseInt($("#input-exercise").val());


  $("#keep-up-calories").text(keepCalories + " cal");
  $("#keep-up-exercise").text(keepExercise + " mins");


  $("#input-calories").val("");
  $("#input-exercise").val("");

});


function checkInp() {
  var w = $("#input-calories").val();
  if (w === "") {
    alert("Calorie input must not be empty, if none input 0");
  };
  if (isNaN(w)) {
    alert("Calorie input must be a number");
    return false;
  };


  var q = $("#input-exercise").val();
  if (q === "") {
    alert("Exercise input must not be empty, if none input 0");
  };
  if (isNaN(q)) {
    alert("Exercise input must be a number");
    return false;
  };

}




//IMAGE LINKS --------------------------
$("#ad-1").on("click", function () {
  window.open("https://www.onepeloton.com/bike?gclid=CjwKCAiAh5_uBRA5EiwASW3IarHk740ZJH4etvqScAGs4aZY5Olx9Lu3ViSZyglOU8QLIewmOFjT2RoCw7EQAvD_BwE", "Peloton", "");
});
$("#ad-2").on("click", function () {
  window.open("https://www.nike.com", "Nike", "");

});



// GETTING INFO FROM FIREBASE FROM THE FORM PAGE TO PUSH INTO THE HOMEPAGE -------------
database.ref().on("child_added", function (snapshot) {
  const snap = snapshot.val();

  $("#firebase-weight").empty();
  $("#firebase-weight").append("<p>" + snap.weightUser + "</p>");

  $("#firebase-height").empty();
  $("#firebase-height").append("<p>" + snap.heightUser + "</p>");

  $("#firebase-goal-weight").empty();
  $("#firebase-goal-weight").append("<p>" + (snap.weightUser - snap.targetWeightUser) + "<p>");

});


// setting button to log out and go to the login page on click 
$("#log-out-button").on("click", function () {
  location.href = "loginpage.html";
});