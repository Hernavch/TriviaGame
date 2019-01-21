var trivia = [
    {hint:"Who was the first woman inducted into the Rock and Roll Hall of Fame?" ,
    answer:"Aretha Franklin",
    options:["Janice Joplin",  "Stevie Nixx", "Aretha Franklin"]
    },

    {hint:"In the film Babe, what type of animal was Babe?" ,
    answer:"Pig",
    options:["Horse",  "Dog", "Pig"]
    },
    {hint:"Which planet is the closest to Earth?" ,
    answer:"Venus",
    options:["Mars",  "Mercury", "Venus"]
        }

];
// $("#startbtn").on("click", rungame);
// $("#startbtn").on("click", countdown)
var score = 0;
var incorrect = 0;
var unanswered = 3;

$("#startbtn").on("click", function(){
    $(".board").empty();
    $(".board").html();
    
    var number = 30;
    var intervalId;
    function countdown() { 
        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000)
        number--;  
        $(".countdown").html('<h2>'+ "Time Remaining: " + number + '</h2>');
        if (number === 0){
            stop();
            finished();

        } 
        }
                   
    function stop(){
        clearInterval(intervalId);
    }

// for loop providing all questions and inserting them into the page
     for(var i = 0 ; i < trivia.length ; i ++ ) {
        var question = trivia[i].hint;
        $(".board").append('<div class="questions">' + question + '<div>');
    console.log(trivia.length);
// For loop providing all options excluding answers to show in new div within questions
        // currently looping too many times.
            for (var j = 0; j < trivia[i].options.length; j++) {
                // console.log(trivia[i].options[j]);
                var choices = trivia[i].options[j];
                $(".board").append("<input type='radio' name='question-" + i + "' value='" + trivia[i].options[j] + "''>" + trivia[i].options[j]);

 
                   if(value === trivia[i].answer){
                       score++;
                   }
                    }
                };

    // Add a button
    $(".done").append('<button type="button" class="btn btn-success complete" id="finished">' + "Completed" + '</button>')
            
      countdown();   

      $("#finished").on("click", function(){
        finished();
      })

      function finished(){
        $(".board").empty();
        stop();
        $(".countdown").empty();
        $(".board").html();
        $(".done").empty();
        $(".board").append("Completed");
        function updateScore() {
            $(".board").append('<h2>' + score + '<h2>');
            $(".board").append('<h2>' + incorrect + '<h2>');
            $(".board").append('<h2>' + unanswered + '<h2>');
        }


        
    }
             
});

