// Get references to the audio elements and play buttons
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

// Set the sources for the audio elements
audioElements[0].src = 'path_to_song_1.mp3';
audioElements[1].src = 'path_to_song_2.mp3';
audioElements[2].src = 'path_to_song_3.mp3';
audioElements[3].src = 'path_to_song_4.mp3';
audioElements[4].src = 'path_to_song_5.mp3';

// Function to play/pause the corresponding audio element when a button is clicked
function togglePlayPause(index) {
  if (audioElements[index].paused) {
    const playPromise = audioElements[index].play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        playButtons[index].textContent = 'Pause';
      })
      .catch(error => {
        console.error('Error playing audio:', error);
        // Show appropriate error message to the user
        alert('Error playing audio. Please check your network connection.');
      });
    }
  } else {
    audioElements[index].pause();
    playButtons[index].textContent = 'Play';
  }
}

// Add event listeners to the play buttons
playButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    togglePlayPause(index);
  });
});

// Function to reset audio playback when it ends
function resetAudio(index) {
  audioElements[index].currentTime = 0; // Reset playback to the beginning
  audioElements[index].play(); // Start playing again
}

// Add event listeners to the audio elements to handle the 'ended' event
audioElements.forEach((audioElement, index) => {
  audioElement.addEventListener('ended', () => {
    resetAudio(index);
  });
});
