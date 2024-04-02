'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.question-container');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');

      document.querySelectorAll('.answer-container').forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove('active');
        }
      });

      const arrow = document.querySelectorAll('.arrow');

      arrow.forEach((arrow) => arrow.classList.toggle('arrow-down'));
    });
  });
});
