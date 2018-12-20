//create an object that holds the time of 2 minutes to finish the game.

//Then create an array for my questions
// let questions = {
//   Q1: {
//     'The name of Jake\'s girlfriend is Lady Rainicorn': 't'
//   },
//   Q2: {
//     'Marceline is a ghost': 'f'
//   },
//   Q3: {
//     'Jake and Finn live in the world of Ooo': 't'
//   },
//   Q4: {
//     'Jake has 18 children': 'f'
//   },
//   Q5: {
//     'The voice of Finn the Human is Jason Bateman': 'f'
//   },
//   Q6: {
//     'The Ice King kidnaps the princesses of Ooo from time to time': 't'
//   },
//   Q7: {
//     'LSP is a Cloud Princess': 't'
//   },
//   Q8: {
//     'Finn and Jake live in a cave atop a mountain': 'f'
//   }
// };

let questions = [{
    question: 'The name of Jake\'s girlfriend is Lady Rainicorn',
    answers: {
      a: true,
      b: false,
    },
    correctAnswer: "a"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },

  {
    question: 'Marceline is a ghost',
    answers: {
      a: "A Dog",
      b: "A Ghost",
      c: "A Vampire"
    },
    correctAnswer: "c"
  },


];


//create a variable to store the correct Answers
let correctAnswers;
let wrongAnswers;
let intervalId;
let time = 3;

// Cache elements
let questionContainer = $(".questionContainer");
let rowContainer = $("#rowContainer");


//Create a function to play the game
//When we click the button two thing will happen
$('.startBtn').click(function () {

  //remove the start button once clicked and show first answer
  $('button').css('display', "none");
  //then we want to run the first question function
  quest1();
});

//function to create new Div with the first question of our object
function quest1() {
  //create new div for questions
  let newDiv = $('<div= "questions">')
  $(newDiv).html(questions);
  $('.jumbotron.text-center').append(newDiv);


  // when the first part of quest1 runs and our new question div appear we start our timer
  $('.btnContainer').append(newDiv);
  intervalId = setInterval(timeCount, 1000);
  buildQuestions();
}



//this function is our timer basically decreasing 1000milliseconds
function timeCount() {
  time--;
  $("#show-number").html("<h2>" + time + "</h2>");
  //stops timer
  if (time === 0) {
    stopTimer();
  }

}

function stopTimer() {
  clearInterval(intervalId);
  $("#show-number").html("<h2>Time has run out, refresh browser to Play Again!</h2>");
  $('button').css('display', "initial");
  time = 120;
  //TODO: Delete childs element when usr click on Play again
}

function buildQuestions() {
  const output = [];

  questions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (game in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
          "<label class='radio-question'> <input type='radio' name='question'" + questionNumber + "value='" + game + "'> " + game + " : " + currentQuestion.answers[game] + " </label>"
        );
      }



                              

      // add this question and its answers to the output
      output.push(
        "<div class='col-md-3'>" + 
          "<div class=''>" +
            "<div class='card' style='width: 18rem;'>" +
              "<div class='card-body'>"+
                "<h5 class='card-title question'>"+ currentQuestion.question +"</h5>" +
                "<p class='card-text'>"+ answers.join('') +"</p>" +
              "</div>" +
            "</div>"+
          "</div>" +
        "</div>"

        // "<div class='question'>" + currentQuestion.question + " </div>",
         //"<div class='answers'> " + answers.join('') + " </div>"
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  rowContainer.html(output);
}