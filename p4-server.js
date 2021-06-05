/*
    CIT 281 Project 4
    Name: Emily Lashchuk
*/

//import module files
const fs = require("fs");
const fastify = require("fastify")();
const { data } = require("./p4-data");
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer } = require("./p4-module");

fastify.get("/", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>Hello from Project 4!</h1>");
});

//Return all questions
fastify.get("/cit/question", (request, reply) => {
    const gq = getQuestions();
    const q = {
        error: '',
        statusCode: 200,
        questions: gq
    }
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(q));
});

//Return all answers
fastify.get("/cit/answer", (request, reply) => {
    const ga = getAnswers();
    const a = {
        error: '',
        statusCode: 200,
        questions: ga
    }
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(a));
});

//Return all questions and answers
fastify.get("/cit/questionanswer", (request, reply) => {
    const gqa = getQuestionsAnswers();
    const qa = {
        error: '',
        statusCode: 200,
        questions: gqa
    }
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(qa));
});

//Return a specific question
fastify.get("/cit/question/:number", (request, reply) => {
    const qn = request.params.number;
    const qnn = parseInt(qn);
    const gqn = getQuestion(qnn)
    const gqno = {
        error: gqn.error,
        statusCode: 200,
        question: gqn.question,
        number: qnn
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(gqno));
});

//Return a specific answer
fastify.get("/cit/answer/:number", (request, reply) => {
    const an = request.params.number;
    const ann = parseInt(an);
    const gan = getAnswer(ann)
    const gano = {
        error: gan.error,
        statusCode: 200,
        answer: gan.answer,
        number: ann
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(gano));
});

//Return a specific question and answer
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const qan = request.params.number;
    const qann = parseInt(qan);
    const gqan = getQuestionAnswer(qann)
    const gqano = {
        error: gqan.error,
        statusCode: 200,
        question: gqan.question,
        answer: gqan.answer,
        number: qann
    }
    
    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(gqano));
});

//Unmatched route handler
fastify.get("*", (request, reply) => {
    const wc = {
        error: 'Route not found',
        statusCode: 404
    };

    reply
      .code(200)
      .header("Content-Type", "application/JSON; charset=utf-8")
      .send(JSON.stringify(wc));
}); 

// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});