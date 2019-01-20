var trivia = [
    {hint:"Here is your question 1" ,
    answer:"Here is the answer",
    options:["Here is a possible 1",  "Here is a possible 2"]
    },

    {hint:"Here is your question 2" ,
    answer:"Here is the answer",
    options:["Here is a possible1.1",  "Here is a possible 1.2"]
    },
    {hint:"Here is your question 3" ,
    answer:"Here is the answer",
    options:["Here is a possible2.1",  "Here is a possible2.2"]
        }

];

// if($(this).text() == trivia[i].answer) {
//     score
// }

$("#startbtn").on("click", function(){
    $(".board").empty();
    $(".board").html();
    

    for(var i = 0 ; i < trivia.length ; i ++ ) {
        var question = trivia[i].hint;
        // console.log(question);
        console.log(trivia[i].options.length);
        
        $(".board").append('<div class="questions">' + question + '<div>');

            for (var j = 0; j < 2; j++) {
                var choices = trivia[i].options[j];
                // var choices1 = trivia[0].options[j];
                // var choices2 = trivia[1].options[j];
                // var choices3 = trivia[2].options[j];
                console.log(choices);
                               
                // console.log(choices2)
                // $(".board").append('<div class="questions">' + question + '<div>');
                $(".questions").append('<button class="choosebtn" id="q1">'+ choices + '</button>')
                // $(".questions").append()

                // console.log(trivia[i].answer);
                // console.log(trivia[i].options[j]);

                // $(".questions").append('<p>'+ choices +'</p>');

            // }

        // $(".questions").append('<p>'+ choices +'</p>');

        // for(var j = 0 ; j < trivia[i].options.length ; j++) {
        //     $('.choices').append('<button>'+trivia[i].options[j] + trivia[i].answer + '</button>')
        // }
    
    }
    }
   
    // $(".board").html();
    // $(".board").empty();
    // $(".board").html(question1);
    // $(".question1").append('<p>'+  +'</p>')
});