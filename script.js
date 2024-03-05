document.addEventListener('DOMContentLoaded', function() {
  const audioElements = [
    document.createElement('audio'),
    document.createElement('audio'),
    document.createElement('audio'),
    document.createElement('audio'),
    document.createElement('audio')
  ];

  const playButtons = [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3'),
    document.getElementById('b4'),
    document.getElementById('b5')
  ];

  audioElements[0].src = 'Piano.mp3';
  audioElements[1].src = 'rain.mp3';
  audioElements[2].src = 'deep_forest.mp3';
  audioElements[3].src = 'wind_chime.mp3';
  audioElements[4].src = 'sea_beach.mp3';

  audioElements.forEach(audioElement => {
    audioElement.volume = 1.0; // Set volume to 100% 
  });

  audioElements.forEach(audioElement => {
    document.body.appendChild(audioElement);
  });

  function togglePlayPause(index) {
    if (audioElements[index].paused) {
      const playPromise = audioElements[index].play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          playButtons[index].textContent = 'Pause';
        })
        .catch(error => {
          console.error('Error playing audio:', error);
          
          alert('Error playing audio. Please check your network connection.');
        });
      }
    } else {
      audioElements[index].pause();
      playButtons[index].textContent = 'Play';
    }
  }

  playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      togglePlayPause(index);
    });
  });

  function resetAudio(index) {
    audioElements[index].currentTime = 0; 
    audioElements[index].play(); 
  }

  audioElements.forEach((audioElement, index) => {
    audioElement.addEventListener('ended', () => {
      resetAudio(index);
    });
  });
});
