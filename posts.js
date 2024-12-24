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
}

// Initialize posts
document.addEventListener("DOMContentLoaded", () => {
  loadPosts("data.json"); // Replace with your Google Sheets JSON link if using Sheets
});
