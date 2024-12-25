function initializeAutoScroll(container) {
  let scrollInterval;
  let userInteractionTimeout;

  // Start auto-scrolling
  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      container.scrollBy({ left: 2, behavior: "smooth" });
    }, 20);
  }

  // Stop auto-scrolling
  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Resume auto-scrolling after a delay
  function delayedResumeAutoScroll() {
    clearTimeout(userInteractionTimeout); // Reset the timer
    userInteractionTimeout = setTimeout(() => {
      startAutoScroll(); // Resume auto-scrolling after 3 seconds
    }, 3000);
  }

  // Event listeners for manual scrolling
  container.addEventListener("mousedown", () => {
    stopAutoScroll();
  });

  container.addEventListener("touchstart", () => {
    stopAutoScroll();
  });

  container.addEventListener("scroll", () => {
    stopAutoScroll();
    delayedResumeAutoScroll(); // Resume auto-scroll after delay
  });

  // Add navigation arrows
  const leftArrow = document.createElement("div");
  leftArrow.className = "scroll-arrow left-arrow";
  leftArrow.innerHTML = "&#9664;"; // Left arrow symbol
  leftArrow.addEventListener("click", () => {
    stopAutoScroll();
    container.scrollBy({ left: -300, behavior: "smooth" });
    delayedResumeAutoScroll();
  });

  const rightArrow = document.createElement("div");
  rightArrow.className = "scroll-arrow right-arrow";
  rightArrow.innerHTML = "&#9654;"; // Right arrow symbol
  rightArrow.addEventListener("click", () => {
    stopAutoScroll();
    container.scrollBy({ left: 300, behavior: "smooth" });
    delayedResumeAutoScroll();
  });

  container.parentElement.appendChild(leftArrow);
  container.parentElement.appendChild(rightArrow);

  // Start auto-scrolling
  startAutoScroll();
}
