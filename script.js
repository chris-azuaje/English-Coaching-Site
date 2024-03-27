"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".question-container");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = document.querySelectorAll(".arrow");

      answer.classList.toggle("active");

      //   arrow.forEach((item) => item.classList.add("arrow-down"));
      arrow.forEach((arrow) =>
        arrow.classList.contains("arrow-down")
          ? arrow.classList.remove("arrow-down")
          : arrow.classList.add("arrow-down")
      );

      document.querySelectorAll(".answer-container").forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove("active");
        }
      });
    });
  });
});
