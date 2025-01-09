document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel', // Carousel mode
    startAt: 0,       // Start at the first slide
    perView: 3,       // Show 3 slides at a time
    gap: 20,          // Space between slides
    autoplay: 3000,   // Auto-scroll every 3 seconds
    breakpoints: {    // Responsive settings
      1024: { perView: 2 },
      600: { perView: 1 }
    }
  }).mount();
});
