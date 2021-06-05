/*
    CIT 281 Project 4
    Name: Emily Lashchuk
*/

// Question and answer data array      //loop thru the data
const data = [
    {
      question: "Q1",
      answer: "A1",
    },
    {
      question: "Q2",
      answer: "A2",
    },
    {
      question: "Q3",
      answer: "A3",
    },
];
  
// Export statement must be below data declaration - no hoisting with const (or let, only var)
  module.exports = {
    data,
};