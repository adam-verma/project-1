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
   

   
    ////// register 
    function signup () {
       let email = $("#signup-email").val().trim();
       let password = $("#signup-password").val().trim();
     auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
      //  console.log(errorMessage)
        if (errorMessage) {
          console.log(errorMessage)
            
            $(".message-signup").html("<strong>try again! (error)</strong>"+ errorMessage)
    
          }
          else {
            $(".message-signup").html("<strong>Welcome to NUTRIFIT !</strong>")
          }
      });
  };
  $("#signup-button").on("click",signup);

  // login part

   $("#login-form").on("click", function(event) {
   
     event.preventDefault();
    let email = $("#userEmail-signin").val().trim();
    let password = $("#password-signin").val().trim();
    
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorMessage === '') {

          $(".message-signup").html("<strong>try again! (error)</strong>"+ errorMessage)
         
        }
        else {

          $("#login-button").on("click", function(event){
            event.preventDefault;
          })
        }
        $(document).on("click", "#login-button", function(){
          var instance = M.Modal.getInstance(elem);
           instance.close();
      });

  });

 });


// //init Modals
$(document).on("click", "#login-button", function(event){
    event.preventDefault();
    $('.modal-login').modal();
    console.log("Button Clicked")
    $('#login-form').submit() 
  });


    //  function signup () {
    // // 
    //    let email = $("#signup-email").val().trim();
    //    let password = $("#signup-password").val().trim();
        
    //    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //    console.log(cred.user);
    //  });

    //  };
    //  $("#signup-button").on("click",signup);

    // login part
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  
//   // get user info
//   const email = loginForm['userEmail-signin'].value;
//   const password = loginForm['password-signin'].value;

//   // log the user in
//   auth.signInWithEmailAndPassword(email, password).then((cred) => {
//     console.log(cred.user);
//     // close the signup modal & reset form
//     $(document).on("click", "#login-button", function(){
//                  var instance = M.Modal.getInstance(elem);
//                   instance.close();
                
//   });
//   loginForm.reset();
// }); 

// });



//           //////////// which one ?
//         // const modal = document.querySelector('#modal-login');
