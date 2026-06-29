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

const skillBars = document.querySelectorAll(".progress");
const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains("html"))
                entry.target.style.width = "90%";

            if(entry.target.classList.contains("css"))
                entry.target.style.width = "80%";

            if(entry.target.classList.contains("js"))
                entry.target.style.width = "75%";

            if(entry.target.classList.contains("python"))
                entry.target.style.width = "75%";

            if(entry.target.classList.contains("cSharp"))
                entry.target.style.width = "70%";

            if(entry.target.classList.contains("java"))
                entry.target.style.width = "80%";

            if(entry.target.classList.contains("sql"))
                entry.target.style.width = "75%";

            if(entry.target.classList.contains("git"))
                entry.target.style.width = "75%";

            if(entry.target.classList.contains("actions"))
                entry.target.style.width = "70%";
        }
    });
},{ threshold:0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});