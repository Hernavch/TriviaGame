var trivia = [
    {hint:"Who was the first woman inducted into the Rock and Roll Hall of Fame?" ,
    answer:"Aretha Franklin",
    options:["Janice Joplin",  "Stevie Nixx"]
    },

    {hint:"In the film Babe, what type of animal was Babe?" ,
    answer:"Pig",
    options:["Horse",  "Dog"]
    },
    {hint:"Which planet is the closest to Earth?" ,
    answer:"Venus",
    options:["Mars",  "Mercury"]
        }

];

// console.log(trivia[0].hint);


// if($(this).text() == trivia[i].answer) {
//     score
// }



$("#startbtn").on("click", function(){
    var timer = setInterval(timer, 1000);
        function timer() {
            var t= new time();
            $("countdown").html(t.toLocaleTimeString());
             console.log(timer)
         }

    $(".board").empty();
    $(".board").html();
    

    for(var i = 0 ; i < trivia.length ; i ++ ) {
        var question = trivia[i].hint;
        // console.log(question);
        console.log(trivia[i].options.length);
    
        $(".board").append('<div class="questions">' + question + '<div>');
    

            for (var j = 0; j < trivia[i].options.length; j++) {
                console.log(trivia[i].options[j]);
                var choices = trivia[i].options[j];
            //     // var choices1 = trivia[0].options[j];
            //     // var choices2 = trivia[1].options[j];
            //     // var choices3 = trivia[2].options[j];
            //     console.log(choices);
                    // if(trivia[i].options[j]> 2){
                        $(".choosebtn").empty()
                    }
                    // $(".questions").append('<button class="choosebtn" id="q1">'+ choices + '</button>');
                    $(".questions").append('<button class="choosebtn answer" id="answer1">' + trivia[0].answer + '</button>');
                    $(".questions").append('<button class="choosebtn answer" id="answer2">' + trivia[1].answer + '</button>');
                    $(".questions").append('<button class="choosebtn answer" id="answer3">' + trivia[2].answer + '</button>');
                    
                }            
    });
    
// });