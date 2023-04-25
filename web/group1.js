function showMessage() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
  }
  
  function hideMessage() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
  }
  const typeElement = document.querySelector('.typewrite');
  const typeWords = JSON.parse(typeElement.getAttribute('data-type'));
  let index = 0;
  let wordIndex = 0;
  let isDeleting = false;
  let typingTimeout = 200;

  function type() {
    const currentWord = typeWords[index];
    const letter = currentWord[wordIndex];

    if (isDeleting) {
      typeElement.textContent = currentWord.substring(0, wordIndex - 1);
      typingTimeout = 100;
    } else {
      typeElement.textContent = currentWord.substring(0, wordIndex + 1);
      typingTimeout = 200;
    }

    if (!isDeleting && wordIndex === currentWord.length) {
      isDeleting = true;
      typingTimeout = 1000;
    } else if (isDeleting && wordIndex === 0) {
      isDeleting = false;
      index = (index + 1) % typeWords.length;
    }

    wordIndex += isDeleting ? -1 : 1;

    setTimeout(type, typingTimeout);
  }

  setTimeout(type, 1000);