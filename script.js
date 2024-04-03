'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.question-container');

  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');

      const arrow = question.querySelector('.arrow');
      arrow.classList.toggle('arrow-down');

      document.querySelectorAll('.answer-container').forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove('active');
          otherAnswer.previousElementSibling
            .querySelector('.arrow')
            .classList.remove('arrow-down');
        }
      });
    });
  });
});
