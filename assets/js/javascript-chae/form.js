
//setting up the basics for firebase usage 


const data_base = firebase.database();

//   setting the variables to get for the homepage 

const weight = 0;
const height = 0;

$("#continue-button").on("click", function () {
    let userGender = $("#gender-input").val().trim();
    let userDateOfBirth = $("#date-of-birth-input").val().trim();
    let userBloodType = $("#blood-input").val().trim();
    let userWeight = parseInt($("#weight-input").val().trim());
    let userHeight = parseInt($("#height-input").val().trim());
    let userWaist = parseInt($("#waist-input").val().trim());
    let userHip = parseInt($("#hip-input").val().trim());
    let userNeck = parseInt($("#neck-input").val().trim());
    let userTargetWeight = parseInt($("#target-weight-input").val().trim());

    let userCheckYes = [];
    let userCheckNo = [];
    let userChicken = [];
    let userBeef = [];
    let userPork = [];
    let userSalmon = [];
    let userCousCous = [];
    let userWhiteRice = [];
    let userBrownRice = [];
    let userQuinoa = [];
    let userOats = [];
    let userPotato = [];
    let userSweetPotato = [];

    console.log(userGender);
    console.log(userDateOfBirth);
    console.log(userBloodType);
    console.log(userWeight);
    console.log(userHeight);
    console.log(userWaist);
    console.log(userHip);
    console.log(userNeck);
    console.log(userTargetWeight);
    console.log(userCheckYes);
    console.log(userCheckNo);
    console.log(userChicken);
    console.log(userBeef);
    console.log(userPork);
    console.log(userSalmon);
    console.log(userCousCous);
    console.log(userWhiteRice);
    console.log(userBrownRice);
    console.log(userQuinoa);
    console.log(userOats);
    console.log(userPotato);
    console.log(userSweetPotato);


    // allergy check 
    $("#yes-check").change(function () {
        let allergyYes = $(this);
        let userAllergyYes = allergyYes.prop("checked");
        userCheckYes = userAllergyYes;
    }).change();



    $("#no-check").change(function () {
        let allergyNo = $(this);
        let userAllergyNo = allergyNo.prop("checked");
        userCheckNo = userAllergyNo;
    }).change();






    //meat check 
    $("#chicken-check").change(function () {
        let chicken = $(this);
        let userChickenYes = chicken.prop("checked");
        userChicken = userChickenYes;
    }).change();
    $("#beef-check").change(function () {
        let beef = $(this);
        let userBeefYes = beef.prop("checked");
        userBeef = userBeefYes;
    }).change();
    $("#pork-check").change(function () {
        let pork = $(this);
        let userPorkYes = pork.prop("checked");
        userPork = userPorkYes;
    }).change();
    $("#salmon-check").change(function () {
        let salmon = $(this);
        let userSalmonYes = salmon.prop("checked");
        userSalmon = userSalmonYes;
    }).change();


    //carbs check 
    $("#cous-cous-check").change(function () {
        let cousCous = $(this);
        let userCousCousYes = cousCous.prop("checked");
        userCousCous = userCousCousYes;
    }).change();
    $("#white-rice-check").change(function () {
        let whiteRice = $(this);
        let userWhiteRiceYes = whiteRice.prop("checked");
        userWhiteRice = userWhiteRiceYes;
    }).change();
    $("#brown-rice-check").change(function () {
        let brownRice = $(this);
        let userBrownRiceYes = brownRice.prop("checked");
        userBrownRice = userBrownRiceYes;
    }).change();
    $("#quinoa-check").change(function () {
        let quinoa = $(this);
        let userQuinoaYes = quinoa.prop("checked");
        userQuinoa = userQuinoaYes;
    }).change();
    $("#oats-check").change(function () {
        let oats = $(this);
        let userOatsYes = oats.prop("checked");
        userOats = userOatsYes;
    }).change();
    $("#potato-check").change(function () {
        let potato = $(this);
        let userPotatoYes = potato.prop("checked");
        userPotato = userPotatoYes;
    }).change();
    $("#sweet-potato-check").change(function () {
        let sweetPotato = $(this);
        let userSweetPotatoYes = sweetPotato.prop("checked");
        userSweetPotato = userSweetPotatoYes;
    }).change();


    //veggies check ----------------------
    $("#carrot-check").change(function () {
        let carrot = $(this);
        let userCarrot
        console.log(carrot.prop("checked"));
    }).change();
    $("#celery-check").change(function () {
        var celery = $(this);
        console.log(celery.prop("checked"));
    }).change();

    $("#eggplant-check").change(function () {
        var eggplant = $(this);
        console.log(eggplant.prop("checked"));
    }).change();
    $("#green-beans-check").change(function () {
        var greenBeans = $(this);
        console.log(greenBeans.prop("checked"));
    }).change();
    $("#onion-check").change(function () {
        var onion = $(this);
        console.log(onion.prop("checked"));
    }).change();
    $("#spinach-check").change(function () {
        var spinach = $(this);
        console.log(spinach.prop("checked"));
    }).change();
    $("#squash-check").change(function () {
        var squash = $(this);
        console.log(squash.prop("checked"));
    }).change();


    //fats check -------------------
    $("#almonds-check").change(function () {
        var almonds = $(this);
        console.log(almonds.prop("checked"));
    }).change();
    $("#avocado-check").change(function () {
        var avocado = $(this);
        console.log(avocado.prop("checked"));
    }).change();
    $("#chia-seeds-check").change(function () {
        var chiaSeeds = $(this);
        console.log(chiaSeeds.prop("checked"));
    }).change();
    $("#coconut-oil-check").change(function () {
        var coconutOil = $(this);
        console.log(coconutOil.prop("checked"));
    }).change();
    $("#olive-oil-check").change(function () {
        var oliveOil = $(this);
        console.log(oliveOil.prop("checked"));
    }).change();



    data_base.ref().push({
        genderUser: userGender,
        dateOfBirthUser: userDateOfBirth,
        bloodTypeUser: userBloodType,
        weightUser: userWeight,
        heightUser: userHeight,
        waistUser: userWaist,
        hipUser: userHip,
        neckUser: userNeck,
        targetWeightUser: userTargetWeight

    });



});


// to the next html file -------------------
$("#continue-button").on("click", function () {
    location.href = "finalizedhomepage.html";
});