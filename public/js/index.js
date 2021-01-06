// // array of check-in questions
// var checkInQuestions = [
//     "What is one article of clothing that someone could wear that would make you walk out on a date with them?",
//     "The zombie apocalypse is coming; who are 3 people you want on your team?",
//     "What is your most used emoji?",
//     "What was the worst style choice you ever made?",
//     "Who was your childhood actor/actress crush?",
//     "If you were a wrestler, what would be your entrance theme song?",
//     "Have you ever been told you look like someone famous?  If so, who was it?",
//     "If you could bring back any fashion trend, what would it be?",
//     "What is the most embarrassing fashion trend you used to rock?",
//     "What did you name your first car or bike?",
//     "Does your current mode of transportation have a name? What is it?",
//     "If you had your own late night talk show, who would you invite as your first guest?",
//     "If a movie was made of your life, what genre would it be?",
//     "If a movie was made of your life, who would play you?",
//     "If you were famous, what would you be famous for?",
//     "What is your \"go-to\" karaoke song?",
//     "What food did you hate most as a child? Do you still hate it or do you love it now?",
//     "If you had to eat one meal everyday for the rest of your life, what would it be?",
//     "If you were left on a deserted island, would you choose to be alone or with your worst enemy? Why?",
//     "If aliens offered to take you home with them, would you go?",
//     "Which decade do you love the most and why?",
//     "What is your favorite sandwich and why?",
//     "What is the best piece of advice you have ever been given?",
//     "When you die, what do you want to be remembered for?",
//     "What is your favorite item that you bought this year?",
//     "What do you consider to be the most surprising scientific discovery imaginable?",
//     "What would your talent be if you were Miss or Mister Universe?",
//     "What would the title of your autobiography be?",
//     "If you did not have to work, what would you do with your time?",
//     "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
//     "What is your favorite magical or mythological animal?",
//     "Who is your favorite cartoon character? Why?",
//     "If you could add anyone to Mount Rushmore, who would it be? why?",
//     "If you were going to travel around the world, what would be your mode of travel be and what would you name it?",
//     "What television family would you be a member of?",
//     "What sport would you compete in if you were in the Olympics?",
//     "What was the worst job you ever had?",
//     "If you could have any fictional character as your imaginary friend, who do you choose and why?",
//     "What would your superpower be and why?",
//     "Which band / artist, dead or alive, would play at your funeral?",
//     "As a child, what did you want to be when you grew up?",
//     "What is your favorite tradition or holiday?",
//     "What fictional world or place would you like to visit?",
//     "What is your favorite breakfast food?",
//     "What is your favorite time of the day and why?",
//     "What is your favorite TV show?",
//     "What book have you read recently that you would recommend and why?",
//     "What movie have you seen recently that you would recommend and why?",
//     "What breed of cat or dog would you be?",
//     "If you had a time machine, would go back in time or into the future?",
//     "What is your favorite dessert?",
//     "What was your favorite game to play as a child?",
//     "What fictional world or place would you like to visit?",
//     "What is your favorite place of all the places you have travelled?",
//     "If you could travel anywhere in the world, where would you go?",
//     "Have you ever met your idol or someone you revere greatly?",
//     "Name one thing on your bucket list.",
//     "Have you ever completed anything on your bucket list?  What was it?",
//     "What did you have for breakfast this morning?",
//     "What is one thing we do not know about you?",
//     "What is your favorite meal to cook and why?",
//     "Are you a morning person or a night person?",
//     "What is your favorite musical instrument and why?",
//     "What languages do you know how to speak?",
//     "What is the weirdest food you have ever eaten?",
//     "What is your \"go-to\" dance move?",
//     "If you could hang out with any cartoon character, who would you choose and why?",
//     "If you could live anywhere in the world, where would it be?",
//     "If you could bring back any fashion trend what would it be?",
//     "If you could live in any country, where would you live?",
//     "If you could choose any two famous people to have dinner with, who would they be?",
//     "If you could be any animal, what would you choose to be?",
//     "If you could be any magical or mythological animal, what would you be and why?",
//     "If you had a personal assistant, what would you have them do?",
//     "If you could instantly become an expert in something, what would it be?",
//     "If you could be fluent in any language, what would it be?",
//     "If you could be immortal, what age would you choose to stop aging at and why?",
//     "If you could be on a reality TV show, which one would you choose and why?",
//     "If you could eliminate one thing from your daily routine, what would it be and why?",
//     "If you could travel to another planet, where would you go?",
//     "Would you rather live in the ocean or on the moon?"
// ]

// Loop through array and post to database
// let newQues = {question: ''};
// for(var i = 0; i < checkInQuestions.length; i++) {
//     newQues.question = checkInQuestions[i];
//     addQuestions(newQues);
// }
// async function addQuestions(ques) {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(ques)
//     };
//     const postResponse = await fetch('/api', options);
//     const postFeedback = await postResponse.json();
//     console.log(postFeedback);
// }
// addQuestions();

// Get question from database
async function getQuestion() {
    const response = await fetch('/api');
    const data = await response.json();
    if(data.available === 'none') {// Stop when all questions have been displayed
        document.getElementById('btn').style.display = 'none';
        document.getElementById('quesDisplay').innerHTML = data.text;
    } else {// Display random question
        document.getElementById('quesDisplay').innerHTML = data.question; 
    }
}

// Click the button to display a random check-in question
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('btn').innerHTML = 'New Question'; // change button from "Display Question" to "New Question"    
    getQuestion();
});

