const sounds = ['applause', 'boo', 'gasp','tada','victory','wrong']; // these are filenames without extension
const buttonContainer = document.getElementById('buttons');
const audioElements = {};

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
btn.innerHTML = `<audio controls><source src="./sounds/${sound}.mp3</audio>" type="audio/mpeg">`
  btn.addEventListener('click', () => {
    stopSounds();
    audioElements[sound].play();
  });

  const audio = new Audio(`./sounds/${sound}.mp3`);
  audioElements[sound] = audio;

  buttonContainer.appendChild(btn);
});

// STOP BUTTON
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.classList.add('btn');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopSounds);
buttonContainer.appendChild(stopBtn);

function stopSounds() {
  Object.values(audioElements).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
