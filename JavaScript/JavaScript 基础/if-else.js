// Check if the user is ready to play!
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");
//confirm("Are you ready ?");

if(userAnswer === "yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

//prompt("What's your age");
var age = prompt("What's your age ");
if(age < 13) {
    console.log("age is less than 13!");
}else{
    console.log("age is OK!");
}

var feedback = prompt("the user to rate your game out of 10");
if(feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
}else{
    console.log("I'll keep practicing coding and racing.");
}
