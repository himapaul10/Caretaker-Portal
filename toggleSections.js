$(document).ready(function () {

    $("#option_1").css("background-color", "rgb(5, 5, 40)");

    function makeUp() {
        $("#option_1").css("background-color", "rgb(95, 95, 247)");
        $("#option_2").css("background-color", "rgb(95, 95, 247)");
        $("#option_3").css("background-color", "rgb(95, 95, 247)");
        $("#option_4").css("background-color", "rgb(95, 95, 247)");
        $("#option_5").css("background-color", "rgb(95, 95, 247)");
        $("#option_6").css("background-color", "rgb(95, 95, 247)");

        $("#care_team").hide();
        $("#conditions").hide();
        $("#medications").hide();
        $("#allergies").hide();
        $("#lab_tests").hide();
    }

    $("#option_1").click(function () {
        makeUp();
        $("#option_1").css("background-color", "rgb(5, 5, 40)");

        $("#care_team").show();
        $("#conditions").show();
        $("#medications").show();
        $("#allergies").show();
        $("#lab_tests").show();
    });

    $("#option_2").click(function () {
        makeUp();
        $("#option_2").css("background-color", "rgb(5, 5, 40)");
        $("#care_team").show();
    });

    $("#option_3").click(function () {
        makeUp();
        $("#option_3").css("background-color", "rgb(5, 5, 40)");
        $("#conditions").show();
    });

    $("#option_4").click(function () {
        makeUp();
        $("#option_4").css("background-color", "rgb(5, 5, 40)");
        $("#medications").show();
    });

    $("#option_5").click(function () {
        makeUp();
        $("#option_5").css("background-color", "rgb(5, 5, 40)");
        $("#allergies").show();
    });

    $("#option_6").click(function () {
        makeUp();
        $("#option_6").css("background-color", "rgb(5, 5, 40)");
        $("#lab_tests").show();
    });
});