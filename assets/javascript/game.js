$(document).ready(function () {

    var targetNum = 0;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var crystals = {
        firstCrystal:
        {
            value: 0
        },
        secondCrystal:
        {
            value: 0
        },
        thirdCrystal:
        {
            value: 0
        },
        fourthCrystal:
        {
            value: 0
        },
    };

    function start() {
        counter = 0;
        targetNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#targetnum").html(targetNum);
        crystals.firstCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystals.secondCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystals.thirdCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystals.fourthCrystal.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        $("#totalnum").html(counter);

    };

    function add(crystals) {
        counter = counter + crystals.value;
        $("#totalnum").html(counter);
        check();
    }

    function check() {
        if (counter > targetNum) {
            losses++;
            $("#loss").html(losses);
            start();

        }
        else if (counter == targetNum) {
            wins++;
            $("#wins").html(wins);
            start();
        }
    }
    start()

    $("#firstcrystal").on("click", function () {
        add(crystals.firstCrystal);
    });
    $("#secondcrystal").on("click", function () {
        add(crystals.secondCrystal);
    });
    $("#thirdcrystal").on("click", function () {
        add(crystals.thirdCrystal);
    });
    $("#fourthcrystal").on("click", function () {
        add(crystals.fourthCrystal);
    });

});
