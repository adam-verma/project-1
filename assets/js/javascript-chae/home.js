//F I R E B A S E ---------------------------
//setting up the basics for firebase usage 
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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


//  F U N C T I O N 2 -----------------------------------



//  GOOGLE CHARTS STARTS HERE -------------------------------
// Set a callback to run when the Google Visualization API is loaded.
google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawDualY);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawDualY(calories=0, exercise=0) {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Day of Week');
  data.addColumn('number', 'Calorie Intake');
  data.addColumn('number', 'Exercise Time');

  data.addRows([
    ['Monday', calories, exercise],
    ['Tuesday', 0, 0],
    ['Wednesday', 0, 0],
    ['Thursday', 0, 0],
    ['Friday', 0, 0],
    ['Saturday', 0, 0],
    ['Sunday', 0, 0]

  ]);


  // Set chart options
  var options = {
    chart: {
      title: 'Caloric Intake to Exercise Ratio',
      subtitle: 'Based on a scale of 1 to 10'
    },
    series: {
      0: {
        axis: 'Caloric Intake'
      },
      1: {
        axis: 'Exercise Level'
      }
    },
    axes: {
      y: {
        MotivationLevel: {
          label: 'Caloric Intake'
        },
        EnergyLevel: {
          label: 'Exercise Level'
        }
      }
    },
    hAxis: {
      title: 'Time of Day',
      format: 'number',
      viewWindow: {
        min: [1000],
        max: []
      }
    },
    vAxis: {
      title: 'Rating (scale of 1-10)',
      viewWindow: {
        min: [],
        max: []
      }
    },
  };

  // Instantiate and draw our chart, passing in some options.
  var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
  materialChart.draw(data, options);
}










//adds the info into the html (change code to push the info into the data array)
// database.ref().on("child_added", function(snapshot) {
//     //i need to figure out what this actually does, how is it looping 
//     const snap = snapshot.val();

//     //console out to see if it works
//     console.log(snap.dailyConsumedCalories);
//     console.log(snap.dailyExerciseAmount);

//     //append to the html to see if it works

// });




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