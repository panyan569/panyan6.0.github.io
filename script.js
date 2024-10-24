// Function to create an emoji element
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.textContent = randomEmoji(); // Get a random emoji
    emoji.classList.add('emoji');
  
    // Set initial random position
    emoji.style.left = `${Math.random() * window.innerWidth}px`;
    emoji.style.top = `${Math.random() * window.innerHeight}px`;
  
    // Set random velocity
    emoji.dx = (Math.random() - 0.5) * 5;
    emoji.dy = (Math.random() - 0.5) * 5;
  
    document.body.appendChild(emoji);
    animateEmoji(emoji);
  }
  
  // Function to animate the emoji
  function animateEmoji(emoji) {
    function update() {
      // Update position
      emoji.style.left = `${parseFloat(emoji.style.left) + emoji.dx}px`;
      emoji.style.top = `${parseFloat(emoji.style.top) + emoji.dy}px`;
  
      // Bounce off the walls
      if (parseFloat(emoji.style.left) > window.innerWidth - emoji.clientWidth || parseFloat(emoji.style.left) < 0) {
        emoji.dx = -emoji.dx;
      }
      if (parseFloat(emoji.style.top) > window.innerHeight - emoji.clientHeight || parseFloat(emoji.style.top) < 0) {
        emoji.dy = -emoji.dy;
      }
  
      requestAnimationFrame(update);
    }
    update();
  }
  
  // Function to get a random emoji
  function randomEmoji() {
    const emojis = ['😀', '😂', '😍', '😎', '🤔', '😱', '🙌', '👍'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  
  // Create a full screen of emojis
  for (let i = 0; i < 50; i++) { // Adjust the number of emojis
    createEmoji();
  }
  