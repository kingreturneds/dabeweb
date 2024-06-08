function scrollpadding(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  const increment = 20; // Change this value for smoother or faster scrolling
  
  function animateScroll() {
  currentTime += increment;
  const val = Math.easeInOutQuad(currentTime, start, change, duration);
  element.scrollTop = val;
  if (currentTime < duration) {
  requestAnimationFrame(animateScroll);
  }
  }
  
  animateScroll();
  }
  
  // Easing function for smoother scroll
  Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  // Usage example
  const element = document.documentElement; // Or any other element you want to scroll
  scrollpadding(element, 0, 500); // Scroll to top of the element over 500 milliseconds