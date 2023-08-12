let container = document.querySelector(".container");
let careers = ["Youtuber", "Developer", "Freelancer", "Driver"];
let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  container.innerHTML = `<h1>I am A ${careers[careerIndex].slice(
    0,
    characterIndex
  )} </h1>`;
  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
