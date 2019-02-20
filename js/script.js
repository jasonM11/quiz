/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Input = $("#question1").val();
        var q2Input = $("#question2").val();
        var q3Input = $("#question3").val();
        
        var q1Scores = questionOne(q1Input);
        var q2Scores = questionTwo(q2Input);
        var q3Scores = questionThree(q3Input);
        var totalScore= q1Scores+q2Scores+q3Scores;
        $(".result").html(totalScore);
});
});

function questionOne(answer){
    if (answer==="Reading") {
        return 1
    }
    else if (answer==="Coding") {
        return 2
    }
    else if (answer==="Sports") {
        return 3
    }
    else {
        return 0
    }
}
function questionTwo(answer){
    if (answer==="Pancakes") {
        return 1
    }
    else if (answer==="Waffles"){
        return 2
    }
    else if (answer==="French Toast"){
        return 3
    }
    else {
        return 0
    }
}
function questionThree(answer){
    if (answer.length<4){
        return 1
    }
    else if (answer.length<8){
        return 2
    }
    else if (answer.length<12){
        return 3
    }
    else {
        return 0
    }


    
}

