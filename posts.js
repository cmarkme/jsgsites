async function loadPosts(dataSource) {
  const container = document.getElementById("posts-container");

  // Fetch data
  const response = await fetch(dataSource);
  const posts = await response.json();

  // Dynamically create post cards
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    // Shorten the description
    const shortDescription = post.description.length > 150
      ? `${post.description.substring(0, 150)}...`
      : post.description;

    postCard.innerHTML = `
      <img src="${post.imageURL}" alt="${post.title}" class="post-image">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-description" data-full-description="${post.description}">
        ${shortDescription}
      </p>
      <a href="${post.link}" class="post-link" target="_blank">Read More</a>
    `;

    // Add event listener for toggling description
    const descriptionElement = postCard.querySelector(".post-description");
    descriptionElement.addEventListener("click", () => {
      const isExpanded = descriptionElement.dataset.expanded === "true";

      if (isExpanded) {
        // Collapse to short description
        descriptionElement.textContent = shortDescription;
        descriptionElement.dataset.expanded = "false";
      } else {
        // Expand to full description
        descriptionElement.textContent = post.description;
        descriptionElement.dataset.expanded = "true";
      }
    });

    container.appendChild(postCard);
  });

  // Initialize auto-scrolling
  initializeAutoScroll(container);
}

function initializeAutoScroll(container) {
  let isManualScroll = false;
  let scrollInterval;

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
  function resumeAutoScroll() {
    stopAutoScroll();
    setTimeout(startAutoScroll, 3000); // 3 seconds delay before resuming
  }

  // Event listeners for manual scrolling
  container.addEventListener("mousedown", stopAutoScroll);
  container.addEventListener("touchstart", stopAutoScroll);
  container.addEventListener("scroll", () => {
    isManualScroll = true;
    resumeAutoScroll();
  });

  // Add navigation arrows
  const leftArrow = document.createElement("div");
  leftArrow.className = "scroll-arrow left-arrow";
  leftArrow.innerHTML = "&#9664;"; // Left arrow symbol
  leftArrow.addEventListener("click", () => {
    stopAutoScroll();
    container.scrollBy({ left: -300, behavior: "smooth" });
    resumeAutoScroll();
  });

  const rightArrow = document.createElement("div");
  rightArrow.className = "scroll-arrow right-arrow";
  rightArrow.innerHTML = "&#9654;"; // Right arrow symbol
  rightArrow.addEventListener("click", () => {
    stopAutoScroll();
    container.scrollBy({ left: 300, behavior: "smooth" });
    resumeAutoScroll();
  });

  container.parentElement.appendChild(leftArrow);
  container.parentElement.appendChild(rightArrow);

  // Start auto-scrolling
  startAutoScroll();
}

// Initialize posts
document.addEventListener("DOMContentLoaded", () => {
  loadPosts("data.json"); // Replace with your Google Sheets JSON link if using Sheets
});
