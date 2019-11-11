//F I R E B A S E ---------------------------
//setting up the basics for firebase usage 
var firebaseConfig = {
    apiKey: "AIzaSyC_H3fHMtfTetJUCBocCXzRsPUqostdm1I",
    authDomain: "nutrifit-ef6c8.firebaseapp.com",
    databaseURL: "https://nutrifit-ef6c8.firebaseio.com",
    projectId: "nutrifit-ef6c8",
    storageBucket: "nutrifit-ef6c8.appspot.com",
    messagingSenderId: "746322749711",
    appId: "1:746322749711:web:93941b044a99fd48ba367a",
    measurementId: "G-1SV8J3TN81"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const database = firebase.database();
  const caloricIntake = 0;
//   const caloricIntakeMax = (this amount will depend on the user's information provided)
  const exerciseAmount = 0;


//this function is to grab the user's input and add it onto firebase database 
$("#log-stats-button").on("click", function(event) {
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

    //parse JSON to convert text to a Javascript Object 
    var obj = JSON.parse()
    //push to the donut chart data array 
    myDoughnutChart.data[1].datasets[1].data.push(dailyCalories);
});

//adds the info into the html (change code to push the info into the data array)
database.ref().on("child_added", function(snapshot) {
    //i need to figure out what this actually does, how is it looping 
    const snap = snapshot.val();

    //console out to see if it works
    console.log(snap.dailyConsumedCalories);
    console.log(snap.dailyExerciseAmount);

    //append to the html to see if it works

});




//IMAGE LINKS --------------------------
$("#ad-1").on("click", function(){
  window.open("https://www.onepeloton.com/bike?gclid=CjwKCAiAh5_uBRA5EiwASW3IarHk740ZJH4etvqScAGs4aZY5Olx9Lu3ViSZyglOU8QLIewmOFjT2RoCw7EQAvD_BwE", "Peloton", "");
});
$("#ad-2").on("click", function(){
  window.open("https://www.nike.com", "Nike", "");

});



