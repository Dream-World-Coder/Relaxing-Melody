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
audioElements[0].src = 'Piano.mp3';
audioElements[1].src = 'Rommance.mp3';
audioElements[2].src = 'Thriller.mp3';
audioElements[3].src = 'chill.mp3';
audioElements[4].src = 'sad.mp3';

// Append the audio elements to the body or a specific container
// This step is crucial for the audio to play
audioElements.forEach(audioElement => {
 document.body.appendChild(audioElement);
});

// Set the volume for each audio element
audioElements.forEach(audioElement => {
 audioElement.volume = 0.8; // Set volume to 50% (adjust as needed)
});

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
