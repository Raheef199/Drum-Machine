const displayElement = document.getElementById("display");
const powerSwitchElement = document.getElementById("checkbox");
const audioPlayer = document.getElementById("audio");
const volumeControlElement = document.getElementById("volume-control");
let powerOn = false;

function playAudio(key) {
  if (!powerOn) {
    displayElement.innerText = "";
    return;
  }

  const audioElement = document.getElementById(`audio audio-${key}`);

  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();

    const description = audioElement.getAttribute("data-description");
    displayElement.innerText = description;
  }
}

document.addEventListener("keydown", function (event) {
  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const pressedKey = event.key.toUpperCase();

  if (validKeys.includes(pressedKey)) {
    playAudio(pressedKey);
  }
});

function togglePower() {
  powerOn = powerSwitchElement.checked;

  if (!powerOn) {
    displayElement.innerText = "";
  }
}

powerSwitchElement.addEventListener("change", togglePower);

volumeControlElement.addEventListener("input", function () {
  const audioElements = document.querySelectorAll("audio");

  audioElements.forEach((audio) => {
    audio.volume = volumeControlElement.value;
  });
});
