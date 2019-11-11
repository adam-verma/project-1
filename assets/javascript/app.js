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


    //  function signup () {
    // // 
    //    let email = $("#signup-email").val().trim();
    //    let password = $("#signup-password").val().trim();
        
    //    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    //    console.log(cred.user);
    //  });

    //  };
    //  $("#signup-button").on("click",signup);
   

    ///////////////which one is better and what is the diffrent ? 
    //////they both creating account but also i wanna make an account and show one text that if the sucssesfuly log in or there is an error
   
    ////// register 
    function signup () {
       let email = $("#signup-email").val().trim();
       let password = $("#signup-password").val().trim();
     auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage)
        if (errorMessage === '') {
            
            $(".message-signup").html("<strong>try again! (error)</strong>"+ errorMessage)
    
          }
          else {
            $(".message-signup").html("<strong>Welcome to NUTRIFIT !</strong>")
          }
      });
  };
  $("#signup-button").on("click",signup);