/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        console.log("here");
        var totalScore;
    });
});


function questionOne(answer){
    if (answer==="basketball") {
        return 1
    }
    else if (answer==="swimming") {
        return 2
    }
    else if (answer==="reading") {
        return 3
    }
    else {
        return 0
    }
}

console.log(questionOne("swimming"))

