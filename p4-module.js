/*
    CIT 281 Project 4
    Name: Emily Lashchuk
*/

const { data } = require("./p4-data");

//Returns an array of strings where each array element is a question.
function getQuestions() {
  let gq = data.map(q => q.question);
  return gq;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Returns an array of strings where each array element is an answer.
function getAnswers() {
  let ga = data.map(a => a.answer);
  return ga;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Returns a copy of the original data array of objects and avoid simply making a mutable copy.
function getQuestionsAnswers() {
  const gqa = [];
  for (const dat of data) {
    const o = {};
    for (const prop in dat) {
      o[prop] = dat[prop];
    }
    gqa.push(o);
  }
  return gqa;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Returns an object with the following properties:
question property (string): The question from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.
*/
function getQuestion(number = "") {
  const gqn = {
    question: '',
    number: number,
    error: ''
  };

  if (number >= 1 && number <= 3) {
    gqn.error = ""
  } else if (number <= 0) {
    gqn.error = "Question number must be >= 1"
  } else if (number >= 4) {
    gqn.error = `Question number must be less than the number of questions (${data.length})` 
  } else if (isNaN(number) === true){
    gqn.error = "Question number must be an integer"
  } 

  const  qqq = data.map(qq => qq.question);
  if (number === 1) {
    gqn.question = qqq[0];
  } else if (number === 2) {
    gqn.question = qqq[1];
  } else if (number === 3) {
    gqn.question = qqq[2];
  }
  
  return gqn
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Returns an object with the following properties:
answer property (string): The answer from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.
*/
function getAnswer(number = "") {
  const gan = {
    answer: '',
    number: number,
    error: ''
  };

  if (number >= 1 && number <= 3) {
    gan.error = ""
  } else if (number <= 0) {
    gan.error = "Answer number must be >= 1"
  } else if (number >= 4) {
    gan.error = `Answer number must be less than the number of questions (${data.length}) `
  } else if (isNaN(number) === true){
    gan.error = "Answer number must be an integer"
  } 

  const  aaa = data.map(aa => aa.answer);
  if (number === 1) {
    gan.answer = aaa[0];
  } else if (number === 2) {
    gan.answer = aaa[1];
  } else if (number === 3) {
    gan.answer = aaa[2];
  }
  
  return gan
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Returns an object with the following properties:
question property (string): The question from the data.
answer property (string): The answer from the data.
number property (integer): The question number,  not array index value.
error message property (string): Any error that occurred while getting the question.
*/
function getQuestionAnswer(number = "") {
  const gqan = {
    question: '',
    answer: '',
    number: number,
    error: ''
  };

  if (number >= 1 && number <= 3) {
    gqan.error = ""
  } else if (number <= 0) {
    gqan.error = "Question number must be >= 1"
  } else if (number >= 4) {
    gqan.error = `Question number must be less than the number of questions (${data.length})` 
  } else if (isNaN(number) === true){
    gqan.error = "Question number must be an integer"
  } 

  const  gqaq = data.map(qaq => qaq.question);
  const  gqaa = data.map(qaa => qaa.answer);
  if (number === 1) {
    gqan.question = gqaq[0];
    gqan.answer = gqaa[0];
  } else if (number === 2) {
    gqan.question = gqaq[1];
    gqan.answer = gqaa[1];
  } else if (number === 3) {
    gqan.question = gqaq[2];
    gqan.answer = gqaa[2];
  }

  return gqan
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
} 
  
// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit



// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
}; 
  
// getAnswers()
if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
}; 
  
// getQuestionsAnswers()
if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}; 
  
// getQuestion()
if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
}; 
  
// getAnswer()
if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
}; 
  
// getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
}; 



module.exports = {
  getQuestions, 
  getAnswers, 
  getQuestionsAnswers, 
  getQuestion, 
  getAnswer, 
  getQuestionAnswer,
};