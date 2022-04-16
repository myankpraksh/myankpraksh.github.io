let buttonOne = document.getElementsByTagName("button")[0];
let buttonTwo = document.getElementsByTagName("button")[1];
let buttonThree = document.getElementsByTagName("button")[2];
let buttonFour = document.getElementsByTagName("button")[3];
let sectionOne = document.getElementById("sec-one");
let sectionTwo = document.getElementById("sec-two");
let sectionThree = document.getElementById("sec-three");
let sectionFour = document.getElementById("sec-four");
let audio = new Audio("assets/button.wav");
let pic = document.getElementById("pic");
let root = document.querySelector(":root");
let vh = window.innerHeight * 0.01;
root.style.setProperty("--height1", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  root.style.setProperty("--height1", `${vh}px`);
});
function buttonTextColor() {
  let a = Math.floor(Math.random() * 4 + 1);
  switch (a) {
    case 1:
      root.style.setProperty("--button_clicked_color", "#93f071");
      break;
    case 2:
      root.style.setProperty("--button_clicked_color", "#f07171");
      break;
    case 3:
      root.style.setProperty("--button_clicked_color", "#71b7f0");
      break;
    case 4:
      root.style.setProperty("--button_clicked_color", "#b971f0");
      break;
  }
}

function displayOne() {
  audio.play();
  buttonTextColor();
  buttonOne.classList.add("button_pressed");
  buttonTwo.classList.remove("button_pressed");
  buttonThree.classList.remove("button_pressed");
  buttonFour.classList.remove("button_pressed");
  sectionOne.style.display = "flex";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  sectionFour.style.display = "none";
}
function displayTwo() {
  audio.play();
  buttonTextColor();
  buttonOne.classList.remove("button_pressed");
  buttonTwo.classList.add("button_pressed");
  buttonThree.classList.remove("button_pressed");
  buttonFour.classList.remove("button_pressed");
  sectionOne.style.display = "none";
  sectionTwo.style.display = "flex";
  sectionThree.style.display = "none";
  sectionFour.style.display = "none";
}
function displayThree() {
  audio.play();
  buttonTextColor();
  buttonOne.classList.remove("button_pressed");
  buttonTwo.classList.remove("button_pressed");
  buttonThree.classList.add("button_pressed");
  buttonFour.classList.remove("button_pressed");
  sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "flex";
  sectionFour.style.display = "none";
}
function displayFour() {
  audio.play();
  buttonTextColor();
  buttonOne.classList.remove("button_pressed");
  buttonTwo.classList.remove("button_pressed");
  buttonThree.classList.remove("button_pressed");
  buttonFour.classList.add("button_pressed");
  sectionOne.style.display = "none";
  sectionTwo.style.display = "none";
  sectionThree.style.display = "none";
  sectionFour.style.display = "flex";
}
buttonOne.addEventListener("click", displayOne);
buttonTwo.addEventListener("click", displayTwo);
buttonThree.addEventListener("click", displayThree);
buttonFour.addEventListener("click", displayFour);
pic.addEventListener("click", displayOne);
