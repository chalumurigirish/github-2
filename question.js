const questions = [
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Mathematics",
    question: "What is 7 multiplied by 8?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  }
];


function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}


const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
console.log("Question:", selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));


