async function loadPosts(dataSource) {
  const container = document.getElementById("posts-container");

  // Fetch data
  const response = await fetch(dataSource);
  const posts = await response.json();

  // Dynamically create post cards
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    postCard.innerHTML = `
      <img src="${post.imageURL}" alt="${post.title}" class="post-image">
      <h3 class="post-title">${post.title}</h3>
      <p class="post-description">${post.description}</p>
      <a href="${post.link}" class="post-link" target="_blank">Read More</a>
    `;

    container.appendChild(postCard);
  });
}

// Initialize posts
document.addEventListener("DOMContentLoaded", () => {
  loadPosts("data.json"); // Replace with your Google Sheets JSON link if using Sheets
});
