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

  audioElements[0].src = 'path_to_song_1.mp3';
  audioElements[1].src = 'path_to_song_2.mp3';
  audioElements[2].src = 'path_to_song_3.mp3';
  audioElements[3].src = 'path_to_song_4.mp3';
  audioElements[4].src = 'path_to_song_5.mp3';

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
