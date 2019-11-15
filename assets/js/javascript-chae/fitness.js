// array of videos to be input
var sectionOneVideos = [
    '<iframe src="https://www.youtube.com/embed/2pLT-olgUJs" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/rptV4dEJUx4" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/CSRtn7N0lWI" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionTwoVideos = [
    '<iframe src="https://www.youtube.com/embed/j64BBgBGNIU" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/bl_ZSXldBrU" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/RE5yzqSXDCI" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'

];
var sectionThreeVideos = [
    '<iframe src="https://www.youtube.com/embed/twjhKJtHwfg" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/COwGXr1RIlI" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/EMTF-6LTN38" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionFourVideos = [
    '<iframe src="https://www.youtube.com/embed/xJlztO0JeIo" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/owrBD7_8edA" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/_wcfyOGuQ-U" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionFiveVideos = [
    '<iframe src="https://www.youtube.com/embed/a9vL6BsgkPg" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/uKjpor1k3eE" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/NWDIN2ZhE1E" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionSixVideos = [
    '<iframe src="https://www.youtube.com/embed/mTgc6gpCEng" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/aCa8R9II8F0" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/Oix85vyiyHk" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionSevenVideos = [
    '<iframe src="https://www.youtube.com/embed/qH1e8HYEDCQ" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/gE1OG72J7Ls" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/Jg61m0DwURs" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];
var sectionEightVideos = [
    '<iframe src="https://www.youtube.com/embed/ZFiOK7CEvmM" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/yOrDe5sLWkM" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/uwMuATwhLV4" + width="535" + height="315" + frameborder="0" + allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" + allowfullscreen></iframe>'
];

//append videos to the respective div
$("#section-one").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionOneVideos);
});
$("#section-two").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionTwoVideos);
});
$("#section-three").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionThreeVideos);
});
$("#section-four").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionFourVideos);
});
$("#section-five").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionFiveVideos);
});
$("#section-six").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionSixVideos);
});
$("#section-seven").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionSevenVideos);
});
$("#section-eight").on("click", function() {
    $("#fitness-section-videos").empty();
    $("#fitness-section-videos").append(sectionEightVideos);
});

// setting button to log out and go to the login page on click 
$("#log-out-button").on("click", function() {
    location.href="loginpage.html";
});
