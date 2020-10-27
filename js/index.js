import lottie from "lottie-web";
import "../scss/index.scss";
import cryingEmoji from "../lottie/crying-emoji.json";

const playButton = document.querySelector(".local-lottie-button");
const container = document.querySelector(".local-lottie");
const animation = lottie.loadAnimation({
  container,
  renderer: "svg",
  loop: true,
  autoplay: false,
  animationData: cryingEmoji
});

playButton.addEventListener("click", () => animation.goToAndPlay(0));
container.addEventListener("mouseover", () => animation.play());
container.addEventListener("mouseleave", () => animation.pause());

document.getElementById('year').innerText = new Date().getFullYear()