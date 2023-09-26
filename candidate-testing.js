const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? " , "True or false: 5 kilometer == 5000 meters? " , "(5 + 3)/2 * 10 = ? " , "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("What is your name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 let grade = 0;
 let innerGrade = 0;
 for (let i = 0; i < correctAnswers.length; i++){
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    innerGrade++;
    console.log(`Correct! Well Done! ${innerGrade} out of 5!`);
  } else {
    console.log(`Sorry, you got it wrong. ${innerGrade} out of 5.`);
  }
 }

  //TODO 3.2 use this variable to calculate the candidates score.
grade = (innerGrade / questions.length) * 100;
if (grade >= 80) {
  console.log("Congrats! You passed!");
} else {
  console.log("I'm sorry. You failed. Please try again.");
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log(candidateAnswers);
  console.log(correctAnswers);
  console.log(candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase());
  //if (candidateAnswers[0].to)
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};