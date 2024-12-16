function openPost(postTitle) {
  alert(`You selected: ${postTitle}`);
  // Replace with navigation logic or modal display
}

document.addEventListener("DOMContentLoaded", () => {
  const truncatedTextElements = document.querySelectorAll(".truncated-text");

  truncatedTextElements.forEach((textElement) => {
    textElement.addEventListener("click", () => {
      const postCard = textElement.closest(".post-card");

      // Toggle the expanded class to adjust height
      postCard.classList.toggle("expanded");

      // Update the text to indicate more/less
      if (postCard.classList.contains("expanded")) {
        textElement.classList.remove("truncated-text");
      } else {
        textElement.classList.add("truncated-text");
      }
    });
  });
});
