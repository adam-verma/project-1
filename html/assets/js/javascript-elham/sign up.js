const firebaseConfig = {
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
     const auth = firebase.auth();
     const database = firebase.database();
   
     
    /// register 
    function signup () {
            ///store full name on fire base 
       let fullname = $("#full-Name").val().trim();
       let email = $("#signup-email").val().trim();
       let password = $("#signup-password").val().trim();
     auth.createUserWithEmailAndPassword(email, password)
     .then(function(){
      auth.onAuthStateChanged(function(user) {
        if (user) {
         console.log(user)
        window.location = "./finalizedformpage.html"
        
        } else {
        
        };
        
      });
  
    })
     .catch(function(error) {
        // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
        console.log(errorMessage)
          $(".message-signup").html("<strong>try again! (error)</strong>"+ errorMessage);
      });
      //adding to fire base 
      database.ref().push(fullname);
      
      // set the value empty for inputs
      $("#full-Name").val("");
      $("#signup-email").val("");
      $("#signup-password").val("");

  };


  // login part
function login () {
  console.log('login')
  var email = document.querySelector("#userEmail-signin").value;
  var password = document.querySelector("#password-signin").value;
  auth.signInWithEmailAndPassword(email, password)
  .then(function(){
    auth.onAuthStateChanged(function(user) {
      if (user) {
       console.log(user)
      window.location = "./finalizedformpage.html"
      
      } else {
      
      }
      
    })

  })
  .catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)

      $(".message-login").html("<strong>try again! (error)</strong>"+ errorMessage)
  });
  $("#userEmail-signin").val("");
  $("#password-signin").val("");
}
  

// //init Modals
$(document).on("click", "#login-button", function(event){
     event.preventDefault();
    console.log("Button Clicked")
    login();
  });

 
  //signout
  function signout(){ 
    auth.signOut()
    .then(function() {

      auth.onAuthStateChanged(function(user) {
        if (user) {
         console.log(user)
         console.log("user is log out")
        window.location = "./signup.html"
        
        } else {
        
        }
      // Sign-out successful.
     
    }).catch(function(error) {
      // An error happened.
    });
  });
}
 
  $("#signup-button").on("click",signup);
  $("#logout-button").on("click",signout);


  $('#close').on('click', function(e){
    console.log("hello")
    $('.modal-login').modal('toggle')

  })


