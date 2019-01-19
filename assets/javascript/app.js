var trivia = [
    {hint:"Here is your question" ,
    answer:"Here is the answer",
    options:["Here is a possible",  "Here is a possible", "Here is a possible"]
    },

     {hint:"Here is your question" ,
    answer:"Here is the answer",
    options:["Here is a possible",  "Here is a possible", "Here is a possible"]
    },
    {hint:"Here is your question" ,
    answer:"Here is the answer",
    options:["Here is a possible",  "Here is a possible", "Here is a possible"]
        }

];

console.log(trivia[0].hint);

// var correctQ1 = trivia.trivia1.answers;
// var correctQ2 = trivia.trivia2.answers;
// var correctQ3 = trivia.trivia3.answers;

// for(var i = 0 ; i < trivia.length ; i ++ ) {
//     var question = trivia[i].q;
//     for(var j = 0 ; j < trivia[i].options.length ; j++) {
//         $('.choices').append('<button>'+trivia[i].options[j] + '/button')
//     }

// }


// if($(this).text() == trivia[i].answer) {
//     score
// }



console.log(trivia.trivia1);

$("#startbtn").on("click", function(){
    for(var i = 0 ; i < trivia.length ; i ++ ) {
        var question = trivia[i].q;
        for(var j = 0 ; j < trivia[i].options.length ; j++) {
            $('.choices').append('<button>'+trivia[i].options[j] + '/button')
        }
    
    }
    console.log(hint1);

    // $(".board").html();
    $(".board").empty();
    $(".board").html(question1);
    $(".question1").append('<p>'+  +'</p>')
})