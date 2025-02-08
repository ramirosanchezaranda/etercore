window.addEventListener('scroll', function() {
  const titleSection = document.querySelector('.title.title__intro');
  const scrollPosition = window.scrollY;
  const opacity = 1 - (scrollPosition / 500); // Adjust 500 to change the fade speed

  if (opacity >= 0) {
    titleSection.style.opacity = opacity;
  } else {
    titleSection.style.opacity = 0.08;
  }
});
