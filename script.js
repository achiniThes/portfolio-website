document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you!Your message has been received");
        form.reset();
    });
});

const text = [
    "Undergraduate",
    "Software Engineering Student",
    "Web Developer",
    "Devops Learner",
    "Content Creator"
];
let count = 0;
let index = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing-text");

    let currentText = text[count];
    let letter = currentText.slice(0, ++index);
    typingElement.textContent = letter;
    if (letter.length === currentText.length) {
        count = (count + 1) % text.length;
        index = 0;
        setTimeout(typeEffect, 1500);
    } else {
        setTimeout(typeEffect, 100);
    }
}
typeEffect();