


  $(document).ready(function(){
       
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

    auth.signOut().then(function() {
        window.location = "./index.html"
      console.log('Signed Out');
    
})
.catch(function(error){
  console.log(error)
})
  }
 
  $("#signup-button").on("click",signup);

  $("#logout-button").on("click",signout);

  $('#close').on('click', function(e){

    $('.modal-login').modal('toggle')

  })

//   //recipe page start from here 
$("#search-button").on("click", function(e) {
  e.preventDefault();
const queryURL = `https://www.googleapis.com/youtube/v3/search`;


// Creating an AJAX call for the specific video button being clicked
$.ajax({
cache: false,
 data: $.extend({
     key: 'AIzaSyC6r69qVvSp98MRD3JJcud6fxaN20gi6ls',
     q: encodeURIComponent($("#search-input").val()).replace(/%20/g, "+"),
     kind: "youtube#videoCategoryListResponse",
     part: 'snippet',
     type: "video",
 }, {
     maxResults: 6,
 }),
 dataType: 'json',
 method: 'GET',
 timeout: 5000,
 url: queryURL 
}).then(function(response) {

    $("#display-videos").empty();
     console.log (response); 

     results = response.items;
     for(let i=0; i<results.length; i++) {
      //      // creating one input and give that attr
        const $video = $("<iframe>").attr("src",`https://www.youtube.com/embed/`+results[i].id.videoId)
       $video.addClass("video");
       $("#display-videos").append(`<h2> ${results[i].snippet.title}</h2>`)
        $("#display-videos").append($video);
        
     }  

         });
         
        });
      })


