document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        { title: 'Post 1', img: 'https://via.placeholder.com/300', desc: 'Description 1', link: '#' },
        { title: 'Post 2', img: 'https://via.placeholder.com/300', desc: 'Description 2', link: '#' },
        { title: 'Post 3', img: 'https://via.placeholder.com/300', desc: 'Description 3', link: '#' }
    ];

    const slidesContainer = document.querySelector('.glide__slides');
    posts.forEach(post => {
        const slide = document.createElement('li');
        slide.className = 'glide__slide';
        slide.innerHTML = `
            <div class="post-card">
                <img src="${post.img}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.desc}</p>
                <a href="${post.link}">Read More</a>
            </div>
        `;
        slidesContainer.appendChild(slide);
    });

    // Initialize Glide.js AFTER adding slides
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 20,
        autoplay: 3000,
        breakpoints: {
            1024: { perView: 2 },
            600: { perView: 1 }
        }
    }).mount();
});
