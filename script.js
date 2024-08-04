const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-img')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = e.target.src;
    }
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});