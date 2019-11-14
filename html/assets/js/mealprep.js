// setting the bootstrap carousel
$('#blogCarousel').carousel({
    interval: 3000
});

// setting button to log out and go to the login page on click 
$("#log-out-button").on("click", function() {
    location.href="loginpage.html";
});
