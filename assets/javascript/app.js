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

// console.log(trivia[0].hint);


// if($(this).text() == trivia[i].answer) {
//     score
// }



$("#startbtn").on("click", function(){
    $(".board").empty();
    $(".board").html();
    
    var number = 60;
    function countdown() {   
           setInterval(countdown, 1000)
           $(".board").html('<h2>'+ "Time Remaining: " + number + '</h2>');
           number--;     

        // }
        //     console.log(number);
            
    //   countdown();

// for loop providing all questions and inserting them into the page
     for(var i = 0 ; i < trivia.length ; i ++ ) {
        var question = trivia[i].hint;
        $(".board").append('<div class="questions">' + question + '<div>');
    
// For loop providing all options excluding answers to show in new div within questions
        // currently looping too many times.
            for (var j = 0; j < trivia[i].options.length; j++) {
                // console.log(trivia[i].options[j]);
                var choices = trivia[i].options[j];
                $(".board").append("<input type='radio' name='question-" + i + "' value='" + trivia[i].options[j] + "''>" + trivia[i].options[j]);

 
                    // if(trivia[i].options[j]> 2){
                        // $(".choosebtn").empty()
                    }
                }

            }
            console.log(number);
            
      countdown();   
       
             
});