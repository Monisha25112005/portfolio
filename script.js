const typingText = document.getElementById("typing-text");
const roles = ["Aspiring Web Developer", "Python Programmer", "AI/ML Student"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
