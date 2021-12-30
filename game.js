var colors = ["red", "blue", "green", "yellow"];
var seq = [];
var userChoice = [];
var started = false;
var level = 0;


function nextSeq() {

    $("#level-title").text("Level " + level);
    level++;

    var randNum = Math.floor(Math.random()*4);
    console.log(randNum);
    var newColor = colors[randNum];
    console.log(newColor);
    $("#"+newColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio( "sounds/" + newColor + ".mp3");
    seq.push(newColor);
    audio.play();
    console.log(seq);

 }

 $(".btn").click(function(event){

    var chosen = event.target.id;
    var audio = new Audio( "sounds/" + chosen + ".mp3");
    audio.play();

    $("#" + chosen).addClass("pressed");

    setTimeout(() => {

        $("#" + chosen).removeClass("pressed");
        
    }, 100);
    userChoice.push(chosen);
    checkAnswer(userChoice.length - 1);
    console.log(userChoice);    

 })

 function checkAnswer(index)
 {
     if(userChoice[index] == seq[index])
     {
         console.log("correct");
     }
     else
     {
        audio = new Audio( "sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 1000);
        $("#level-title").text("Game over. Press a key to restart!");
        restart();

        console.log("wrong");
     }
     if(index + 1 == seq.length)
     {
         userChoice = [];
         setTimeout(() => {

            nextSeq();
             
         }, 1000);
     }
 }

 function restart(){

    level = 0;
    started = false;
    seq = [];
    userChoice = [];

 }

 $(document).keydown(function(){

    if(!started){

        started = true;
        nextSeq();

    }
 })

 

 


