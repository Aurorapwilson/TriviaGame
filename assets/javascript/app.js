//create an object that holds the time of 2 minutes to finish the game.
let Time = 120;
//Then create an array for my questions
let questions = {
    Q1: {'What is the name of Jake\'s girlfriend?': 'Lady Rainicorn'},
    Q2: {'Who is Marceline?': 'A vampire'},
    Q3: {'What world does Adventure Time take place?': 'Ooo'},
    Q4: {'How many children does Jake have?': '5'},
    Q5: {'Who plays the voice of FInn the Human?': 'Jeremy Shada'},
    Q6: {'Who is the King that steals the princesses?': 'Ice King'},
    Q7: {'Where does Jake say he got his stretchy powers?': 'mud puddle'},
    Q8: {'This character is unliked by most people, and also the heir to the Candy Kingdom throne.' :'Lemongrab'}
};


//create a variable to store the correct Answers
let correctAnswers;
let wrongAnswers;
let intervalId;


//Create a function to play the game
//When we click the button two thing will happen
function gamePlay(){
  $('.btn').click(function()
  {
      alert("button has been clicked");
      //remove the start button once clicked and show first answer
      $('button').remove('.btn');
      //then we want to run the first question function
      quest1();
      });
    }
  
  //function to create new Div with the first question of our object
  function quest1(){
      let newDiv = $('<div class= "quest q1">');
      newDiv.html(questions.Q1);

      console.log();

    // when the first part of quest1 runs and our new question div appear we start our timer
    $('.btnContainer').append(newDiv);
    intervalId = setInterval(timeCount, 1000);
  }

  //this function is our timer basically decreasing 1000milliseconds
  function timeCount(){
      time --;
      console.log(time);
  }






