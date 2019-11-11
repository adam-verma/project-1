

// const foods = ["salmon", "chicken", "vegies food", "turkey"];


function displayvideos () {
    // const food = $(food).attr("data-name");
    const APIKey = "AIzaSyC6r69qVvSp98MRD3JJcud6fxaN20gi6ls";
    const queryURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${food}&key=${APIKey}`;
   
    console.log (queryURL)
    $.ajax ({
    url: queryURL,
    method: "GET"
    }).then(function(response) {

        $("#display-videos").empty();
         console.log (queryURL);
        result = response.items;
        for(let i=0; i<result.length; i++) {

            const $video = $("<div>").attr("src", result[i].id.videoid)
             $("#display-videos").append($video);
      
           }
   });
 
 }

//here we generate function for render buttons
//   function renderButtons () {

//     $("#buttons-view").empty();

//     for (let i=0; i<foods.length; i++){
    
//       const bt = $("<button class = btn btn-warning id = more-buttons>");
//       bt.addClass ("food");
//     //   bt.attr("data-name",foods[i])
//       bt.text (foods[i]);
//       $("#buttons-view").append(bt);

//     }
// };

   // This function handles events where one button is clicked
  //  $("#add-button").on("click", function(event) {

  //   event.preventDefault();
  //   const newFood = $("#food-input").val().trim();
  //   foods.push(newFood);
  //   renderButtons();
  // });


   $(document).on("click", ".food", displayvideos)
  //  renderButtons();
 

  
