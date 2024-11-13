document.getElementById('scrollArrow').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

const spaceEmojis = ['✨', '💫', '🌟', '🌟', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

document.addEventListener('click', (e) => {
    const emoji = document.createElement('div');
    emoji.classList.add('space-emoji');
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    emoji.textContent = spaceEmojis[Math.floor(Math.random() * spaceEmojis.length)];
    document.body.appendChild(emoji);

    emoji.offsetWidth;

    emoji.style.animation = 'floatUp 1s ease-out forwards';

    setTimeout(() => {
        document.body.removeChild(emoji);
    }, 1000);
});