


  $(document).ready(function(){

      //careating on click event for the hole function 
    $("#search-button").on("click", function(e) {
      e.preventDefault();
 const queryURL = `https://www.googleapis.com/youtube/v3/search`;


// Creating an AJAX call for the specific video button being clicked
$.ajax({
  cache: false,
     data: $.extend({
         key: 'AIzaSyC6r69qVvSp98MRD3JJcud6fxaN20gi6ls',
         q: encodeURIComponent($("#search-input").val()),
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
            $("#display-videos").append($video);
            console.log(results)
         }  
         resetVideoHeight();
             });
              $(window).on("resize", resetVideoHeight);
           
            });

            function resetVideoHeight() {
              // $(".video").css("height", "20%", "width", "30%");
          }
  })



//   var sectionTwoVideos = [
//     '<iframe src="https://www.youtube.com/embed/j64BBgBGNIU" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
//     '<iframe src="https://www.youtube.com/embed/bl_ZSXldBrU" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
//     '<iframe src="https://www.youtube.com/embed/RE5yzqSXDCI" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
// ];


          


  
